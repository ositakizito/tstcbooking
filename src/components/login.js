import bus from "../components/images/bus.jpg";
import { Link,  useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Login() {
    
    const [value, setValues] = useState({
        email: '',
        password: ''

    })
    const navigate = useNavigate();
    const handlesubmit = (e)=> {
      e.preventDefault();
      
      axios.post('https://tstcserver.onrender.com/users', value)
      .then(res => {
        navigate("/profile");
      })
      .catch(err => console.log(err))
    }

    return (
        <>
            <div className="SignUp">
                    <img src={bus} alt="" className="mg"/>
                    <form onSubmit={handlesubmit}>
                    <input type="email" className="signInput" placeholder="email" name="email" onChange={e => setValues({ ...value, email: e.target.value })}/>
                        <input type="password" className="signInput" placeholder="Password" name="password" onChange={e => setValues({ ...value, password: e.target.value })}/>
                        <input type="submit" className="signInput btn" value="Login" />
                    </form>
                        <br></br>
                         <Link to="/signup" style={{textDecoration: "none"}}> <button className="btnS"  >SignUp</button></Link>
                    
                </div>
        </>
    )
}
