import Form from "./form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { setUser } from "../../store/slices/userSlice";
import { useNavigate, useLocation, NavigateFunction } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const postId = queryParams.get("postId");

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate(-1);
      })
      .catch(console.error);
  };

  return <Form title="sign in" handleClick={handleLogin} />;
};

export default Login;
