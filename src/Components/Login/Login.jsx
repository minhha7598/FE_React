import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { FormGroup, Label, Input } from "reactstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../Nav/Nav";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loginfailed, setLoginfailed] = useState("");

  const validateAll = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email = "Required email!";
    } else if (!isEmail(email)) {
      msg.email = "Invalidate email!";
    }
    if (isEmpty(password)) {
      msg.password = "Required password!";
    }
    setErr(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const onSubmit = () => {
    const isVal = validateAll();
    if (!isVal) {
      setLoginfailed("login__failed");
      return;
    }
    axios
      .post(
        "http://127.0.0.1:8000/api/login/store",
        { email, password },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log("Log in Failed", err);
      });
  };

  return (
    <>
      <Nav />
      <div className="body">
        <div className={loginfailed ? loginfailed : "login__form"}>
          <div className="title__login">
            <FontAwesomeIcon icon={faUser} size="xs" /> LOGIN
          </div>
          <hr />
          <FormGroup>
            <label>Email :</label>
            <Label for="exampleEmail" hidden>
              Email
            </Label>
            <Input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <p className="err">{err.email}</p>
          <FormGroup>
            <label>Password :</label>
            <Label for="examplePassword" hidden>
              Password
            </Label>
            <Input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <p className="err">{err.password}</p>
          <button className="button" type="submit" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;
