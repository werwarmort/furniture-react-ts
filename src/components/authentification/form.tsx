import { FC, useState } from "react";

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const saveAuthenticationToLocalStorage = () => {
    localStorage.setItem("authenticated", "true");
    localStorage.setItem("email", `${email}`);
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button
        onClick={() => {
          handleClick(email, pass);
          saveAuthenticationToLocalStorage();
        }}
      >
        {title}
      </button>
    </div>
  );
};

export default Form;
