import "../styles.css";
import Image from "../Image";
import profilePic from "../../Images/superman.jpg";
import { CartState } from "../../context/Context";
import MOCK_USER from "../mock/UserMock";

const UserProfile = () => {
  const { user, userData } = CartState();
  return (
    <div className="profile-wrapper">
      <Image url={profilePic} height={"150px"} width={"150px"} />
      <p className="profile-name">
        User name : {userData.userName || "Sorry!!!"}
      </p>
      <form>
        <div className="textBox-wrap">
          <input
            className="textBox"
            disabled
            type="text"
            value={`First name : ${user.firstName || MOCK_USER[0].firstName}`}
            name="firstName"
          />
          <input
            className="textBox"
            disabled
            type="text"
            value={`Last name : ${user.lastName || MOCK_USER[0].lastName}`}
            name="lastName"
          />
        </div>
        <div className="textBox-wrap">
          <textarea
            className="textBox"
            disabled
            type="text"
            value={`Address : ${user.address || MOCK_USER[0].address}`}
            name="address"
          />
          <input
            className="textBox"
            disabled
            type="email"
            value={`Email : ${user.email || MOCK_USER[0].email}`}
            name="email"
          />
        </div>
        {/* <div className="btn-wrapper">
                    <button type="submit"  className="btn btn-error">Cancle</button>
                    <button type="submit" className="btn btn-submit">Submit</button>
                </div> */}
      </form>
    </div>
  );
};
export default UserProfile;
