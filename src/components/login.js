import bus from "../components/images/bus.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProHead from "./prohead";
import axios from "axios";
export default function Login() {

  const [value, setValues] = useState({
    first: '',
    password: ''

  })
  const [error] = useState('');
  const [successMessage] = useState('');

  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();


    axios.post('https://tstcserver.onrender.com/users', value)
      .then(res => {
         navigate("/profile");
      })
      .catch(err => console.log(err))
  }
  return (
    <>
       <ProHead/>
      <div className="SignUp">
        <img src={bus} alt="" className="mg" />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <form onSubmit={handlesubmit}>
          <input type="email" className="signInput" placeholder="Email" name="email" onChange={e => setValues({ ...value, email: e.target.value })} value={value.email} required />
          <input type="password" className="signInput" placeholder="Password" name="password" onChange={e => setValues({ ...value, password: e.target.value })} value={value.password} required />
          <input type="submit" className="signInput btn" value="Login" />
        </form>
        <br></br>
        <Link to="/signup" style={{ textDecoration: "none" }}> <button className="btnS"  style={{lineHeight: "20px",borderRadius: "30px"}}>SignUp</button></Link>

      </div>
    </>
  )
}
