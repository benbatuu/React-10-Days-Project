import { useRef, useState } from "react";
import CustomForm from "./components/CustomForm/CustomForm";

export default function App() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const handleLogin = () => {
    console.log("login");
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
    //make a login api call
  };
  const handleRegister = () => {
    console.log("register");
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
    //make a register api call
  };
  return (
    <div className="App">
      <CustomForm
        username={{
          type: "text",
          label: "Username",
          placeholder: "Enter Username",
          ref: usernameRef,
          isInput: true,
        }}
        password={{
          type: "password",
          label: "Password",
          placeholder: "Enter Password",
          ref: passwordRef,
          isInput: true,
        }}
        loginButton={{
          handler: handleLogin,
          buttonText: "Login",
          isInput: false,
        }}
        registerButton={{
          handler: handleRegister,
          buttonText: "Register",
          isInput: false,
        }}
      />
    </div>
  );
}