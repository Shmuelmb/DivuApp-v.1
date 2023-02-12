import React, { useEffect, useState, useContext } from "react";
import "./UserLoginBody.css";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";

const UserLoginBody = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [userList, setUserList] = useState([]);
  const [passInput, setPassInput] = useState();
  const [userInput, setUserInput] = useState();

  const loginCheck = (username, pass) =>
    userList.map((user) => {
      if (user.password === pass && user.userName === username) {
        console.log(userList);

        navigate(`/homepage:${pass}`);
      } else {
        setError("Failed, please try agein");
      }
    });

  const isPassBiggerThenFive = (pass) =>
    pass.length < 5
      ? setError("The Password must contain at least five digits")
      : setError("");

  const getAllUsers = async () => {
    try {
      const respone = await fetch(
        "http://localhost:8000/api/users/getAllUsers"
      );
      const data = await respone.json();
      setUserList(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return !isLoading ? (
    <div className="user-login-body">
      <h3>Welcome to DivuApp</h3>
      <div className="input-field">
        <input
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          type="text"
          placeholder="Please enter your User name"
        />
        <input
          onChange={(e) => {
            isPassBiggerThenFive(e.target.value);
            setPassInput(e.target.value);
          }}
          type="number"
          placeholder="Please enter your Password"
        />
        {/* <p className={!passFiveDigits ? "helper-text-input" : "hidden"}>
          The Password must contain at least five digits
        </p> */}
        {error && <p>{error}</p>}
      </div>
      <div className="remember-me-checkbox">
        <input className="checkbox" type="checkbox" />
        <label>Remember me</label>
      </div>

      <button
        onClick={() => {
          loginCheck(userInput, passInput);
        }}
        className="button-6">
        Login
      </button>
    </div>
  ) : (
    <Loading />
  );
};

export default UserLoginBody;
