import { Link, useNavigate } from "react-router-dom";
import bus from "../components/images/bus.jpg";
import { useState } from "react";
import axios from "axios";
export default function SignUp() {

    const [value, setValues] = useState({
        first: '',
        last: '',
        email: '',
        phone: '',
        password: '',
        password1: ''

    })
    const navigate = useNavigate();
    const handlesubmit = (e)=> {
      e.preventDefault();
      
      axios.post('http://localhost:3001/users', value)
      .then(res => {
        navigate("/login");
      })
      .catch(err => console.log(err))
    }
    return (
        <>

            <div className="SignUp">
                <img src={bus} alt="" className="mg" />
                <form onSubmit={handlesubmit}>
                    <input type="text" className="signInput" placeholder="FirstName" name="first" onChange={e => setValues({ ...value, first: e.target.value })}/>
                    <input type="text" className="signInput" placeholder="LastName" name="last" onChange={e => setValues({ ...value, last: e.target.value })}/>
                    <input type="email" className="signInput" placeholder="Email" name="email" onChange={e => setValues({ ...value, email: e.target.value })}/>
                    <input type="text" className="signInput" placeholder="Phone Number" name="phone" onChange={e => setValues({ ...value, phone: e.target.value })}/>
                    <input type="password" className="signInput" placeholder="Password" name="password" onChange={e => setValues({ ...value, password: e.target.value })}/>
                    <input type="password" className="signInput" placeholder="Confirm Password" name="password1" onChange={e => setValues({ ...value, password1: e.target.value })}/>
                    <input type="submit" className="signInput btn" value="SignUp" />

                </form>
                <br></br>
                <Link to="/login" style={{ textDecoration: "none" }}> <button className="btnS"  >Login</button></Link>

            </div>
        </>
    )
}