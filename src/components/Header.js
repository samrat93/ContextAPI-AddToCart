import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css";
import { useHistory } from "react-router-dom";
import useCountryList from "../hooks/useCountryList";

const Header = () => {
  const history = useHistory();
  const {
    state: { cart },
    dispatch,
    userData,
    setUserData,
    productDispatch,
  } = CartState();

  const handleLogout = () => {
    setUserData({
      userName: "",
      password: "",
      userLogin: false,
    });
    history.push("/");
  };

  // console.log("userdata-------->", user);

  const { isLoading, serverError, apiData } = useCountryList(
    "https://countriesnow.space/api/v0.1/countries/capital"
  );

  // console.log("------------>>>",apiData?.map(val=>{return val?.name}))


  return (
    <Navbar className="headerBack" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand color="red">
          <Link to="/">Demo Shopping Cart</Link>
        </Navbar.Brand>
        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 400}}

              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
        )}
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <div className="countryListWrapper">
        <label className="countryLabel"  for="country">Country:</label>
        <select className="countrySelect" name="country" id="country">
          {apiData?.map((val,i) => { return <option key={i} value={val?.name}>{val?.name}</option>})}
          {/* <option value="volvo">Volvo</option> */}
        </select>
        </div>
        {userData.userLogin ? (
          <Button
            style={{
              width: "100px",
              margin: "0 10px",
              background: "#eb5834",
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button
              style={{
                width: "100px",
                margin: "0 10px",
                background: "#12c721",
              }}
            >
              Login
            </Button>
          </Link>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
