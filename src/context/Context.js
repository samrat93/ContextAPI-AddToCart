import { createContext, useContext, useReducer, useState } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    userLogin: false,
  });

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    confPass: "",
  });
  const [showPassword, setShowpassword] = useState(false);
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider
      value={{
        state,
        user,
        setUser,
        dispatch,
        productState,
        productDispatch,
        userData,
        showPassword,
        setShowpassword,
        setUserData,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
