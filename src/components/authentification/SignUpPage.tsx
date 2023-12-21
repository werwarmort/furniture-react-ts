import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./form";
import { useNavigate, useLocation, NavigateFunction } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const postId = queryParams.get("postId");

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
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

  return <Form title="register" handleClick={handleRegister} />;
};

export default SignUp;
