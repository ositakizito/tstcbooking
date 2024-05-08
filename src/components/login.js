import bus from "../components/images/bus.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ProHead from "./prohead";
export default function Login() {

  const [value, setValues] = useState({
    email: '',
    password: ''

  })
  const [error, setError] = useState('');
  const [successMessage] = useState('');
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted

    axios
      .post("https://tstcserver.onrender.com/users", value)
      .then((res) => {
        localStorage.setItem("loggedInUser", JSON.stringify(value));
        navigate("/profile");
      })
      .catch((err) => {
        setError("An error occurred. Please try again.");
      })
      .finally(() => {
        setLoading(false); // Set loading to false regardless of success or failure
      });
  }


  return (
    <>
      <ProHead />
      <div className="SignUp">
        <img src={bus} alt="" className="mg" style={{ height: "150px" }} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <form onSubmit={handlesubmit}>
          <input type="email" className="signInput" placeholder="Email" name="email" onChange={e => setValues({ ...value, email: e.target.value })} value={value.email} required />
          <input type="password" className="signInput" placeholder="Password" name="password" onChange={e => setValues({ ...value, password: e.target.value })} value={value.password} required />
          <input type="submit" className="signInput btn"
            value={loading ? "Logging in..." : "Login"}
            disabled={loading}
          />
        </form>
       
        <Link to="/signup" style={{ textDecoration: "none" }}> <button className="btnS" style={{ lineHeight: "20px", borderRadius: "30px" }}>SignUp</button></Link>

      </div>
    </>
  )
}
