import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState(null); 
  const signin = async () => {
    try {
    await client.signin(credentials);
    navigate("/Kanbas/accountUser");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <h1>Signin</h1>
        {error && <div className="alert alert-danger">{error.message}</div>}
      <input placeholder="username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input placeholder="password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button onClick={signin}> Signin </button>
    </div>
  );
}
export default Signin;