import { useState } from "react";
import axios from "axios";
import location from "../components/images/location.png"

import { useNavigate} from "react-router-dom";
import Header from "./header";

export default function Booking() {
    

    const [value, setValues] = useState({
        from: '',
        too: '',
        fphone: '',
        pay: '',
        seat: ''

    })
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();

        axios.post('https://tstcserver.onrender.com/booking/', value)
            .then(res => {
                navigate("/pay");
            })
            .catch(err => console.log(err))
    }
    return (
        <>
        <Header/>
            <div className="SignUp">
                <button>
                    <img src={location} alt="" />
                </button>
                <form onSubmit={handlesubmit}>
                    <input type="text" className="signInput" placeholder="From Jalingo" name="from" onChange={e => setValues({ ...value, from: e.target.value })}/>
                    <input type="text" className="signInput" placeholder="To Destination" name="too" onChange={e => setValues({ ...value, too: e.target.value })}/>
                    <input type="text" className="signInput" placeholder="Family phone number" name="fphone" onChange={e => setValues({ ...value, fphone: e.target.value })}/>
                    <input type="text" className="signInput" placeholder="Pay Amount" name="pay" onChange={e => setValues({ ...value, pay: e.target.value })}/>
                    <input type="text" className="signInput" placeholder="Seat No 1-14" name="seat" onChange={e => setValues({ ...value, seat: e.target.value })}/>
                    <input type="submit" className="signInput btn" value="Pay" />

                </form>
            </div>
        </>
    )
}
