import { Account, ID } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../api/appwrite";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // setLoading(false);
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      setUser(accountDetails);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const logoutUser = async () => {
    await account.deleteSession('current');
    setUser(null)
}
  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.name
      );

      await account.create(userInfo.email, userInfo.password);
      let accountDetails = await account.get();
      setUser(accountDetails);
      navigate("/");
      console.log(response)
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    checkUserStatus,
  };
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading State</p> : children}
    </AuthContext.Provider>
  );
};
//Custom Hook

export default AuthContext;
