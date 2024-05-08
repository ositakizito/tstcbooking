import { Link, useNavigate } from "react-router-dom";
import bus from "../components/images/bus.png";
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
  // const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(value);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {

      axios.post('https://tstcserver.onrender.com/users', value)
        .then(res => {
          navigate("/login");
        })
        .catch(err => console.log(err))
    }

  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateFormData = (data) => {
    const errors = {};
    if (!data.first.trim()) {
      errors.first = 'FirstName is required';
    }
    if (!data.last.trim()) {
      errors.last = 'LastName is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (!data.phone.trim()) {
      errors.phone = 'phone number is required';
    }
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (data.password !== data.Password1) {
      errors.password1 = 'Passwords do not match';
    }
    return errors;
  };

  return (
    <>

      <div className="SignUp">
        <img src={bus} alt="" className="mg" />
        <form onSubmit={handlesubmit}>

          {errors.first && <span>{errors.first}</span>}
          <input type="text" className="signInput" placeholder="FirstName" name="first" onChange={handleChange} value={value.first} />
          {errors.last && <span>{errors.last}</span>}
          <input type="text" className="signInput" placeholder="LastName" name="last" onChange={handleChange} value={value.last} />
          {errors.email && <span>{errors.email}</span>}
          <input type="email" className="signInput" placeholder="Email" name="email" onChange={handleChange} value={value.email} />
          {errors.phone && <span>{errors.phone}</span>}
          <input type="text" className="signInput" placeholder="Phone Number" name="phone" onChange={handleChange} value={value.phone} />
          {errors.password && <span>{errors.password}</span>}
          <input type="password" className="signInput" placeholder="Password" name="password" onChange={handleChange} value={value.password} />
          <input type="password" className="signInput" placeholder="Confirm Password" name="password1" onChange={handleChange} value={value.password1} />
          <input type="submit" className="signInput btn" value="SignUp" />

        </form>
        <br></br>
        <Link to="/login" style={{ textDecoration: "none" }}> <button className="btnS"  style={{lineHeight: "20px",borderRadius: "30px"}}>Login</button></Link>

      </div>
    </>
  )
}