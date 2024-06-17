import { Route, Routes } from "react-router-dom";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import PrivateRoutes from "./auth/PrivateRoutes";
import { AuthProvider } from "./authContext/AuthContext";
import Dashboard from "./components/DashBoard/Dashboard";
import "./index.css";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
