import React, { useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { FormGroup, Label, Input } from "reactstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Register.scss";

function Register() {
  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [registerfailed, setRegisterfailed] = useState("");

  const validateAll = () => {
    const msg = {};
    if (isEmpty(name)) {
      msg.name = "Required name!";
    }
    if (isEmpty(email)) {
      msg.email = "Required email!";
    } else if (!isEmail(email)) {
      msg.email = "Invalidate email!";
    }

    if (isEmpty(password)) {
      msg.password = "Required password!";
    }
    if (isEmpty(repassword)) {
      msg.repassword = "Required password!";
    } else if (password !== repassword) {
      msg.repassword = "Not confirm password!";
    }

    setErr(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const onSubmit = () => {
    const isVal = validateAll();
    if (!isVal) {
      setRegisterfailed("register__failed");
      return;
    }

    //Call API
    axios
      .post("http://127.0.0.1:8000/api/register/store", {
        name,
        email,
        password,
        repassword,
      })
      .then((response) => {
        console.log("Status: ", response.status);
        console.log("Data: ", response.data);
        setSuccess(true);
      })
      .catch((err) => {
        console.error("Failed Register :", err);
      });
  };

  return (
    <>
      <Nav />
      {success ? (
        <section className="body_success_register">
          <h1 className="success__register">Success!</h1>
        </section>
      ) : (
        <div className={registerfailed ? registerfailed : "register__form"}>
          <div className="title__register">
            <FontAwesomeIcon icon={faUser} size="xs" />
            REGISTER
          </div>
          <hr />

          <FormGroup>
            <label>Name </label>
            <Label for="exampleName" hidden>
              Name
            </Label>
            <Input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <p className="err">{err.name}</p>

          <FormGroup>
            <label>Email </label>
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
            <label>Password </label>
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

          <FormGroup>
            <label>Confirm password </label>
            <Label for="examplePassword" hidden>
              Password
            </Label>
            <Input
              type="password"
              name="repassword"
              onChange={(e) => setRepassword(e.target.value)}
            />
          </FormGroup>
          <p className="err">{err.repassword}</p>

          <button className="button" type="submit" onClick={onSubmit}>
            Submit
          </button>
        </div>
      )}
    </>
  );
}
export default Register;
