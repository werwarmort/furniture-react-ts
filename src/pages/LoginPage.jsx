import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "../components/authentification/login";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login />
    </div>
  );
};

export default LoginPage;
