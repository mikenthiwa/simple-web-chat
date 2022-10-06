import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { setAuthState } from "../Store/authSlice";
import { selectAuthState } from "../Store/authSlice";


const Login = () => {
  const dispatch = useDispatch();
  const authState = useSelector(selectAuthState);
  const [name, setName] = useState('');

  const handleLogin = () => {
    dispatch(setAuthState(true))
  };

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">React Localstorage Chat</h1>
        <p className="lead">
          This is a simple cross-tab communication using LocalStorage
          API and storage event presented as a chat
        </p>
        <hr className="my-4" />
        <p>
          Enter your name to begin using this application. It will not
          be sent anywhere. All communication uses localstorage API
          only
        </p>
      </div>
      <div className="form-group">
        <label htmlFor="user">Enter your name</label>
        <input
          id="user"
          type="text"
          className="form-control"
          value={name}
          onChange={handleChange}
        />
      </div>
      <button
        className="btn btn-primary"
        disabled={0 === name.length}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

export default Login
