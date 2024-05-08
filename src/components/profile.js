import { Link } from "react-router-dom";
import axios from "axios";
import tstc from "../components/images/tstc.png"
import { useEffect, useState } from "react";
import ProHead from "./prohead";
export default function Profile() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://tstcserver.onrender.com/")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    const [userData, setUserData] = useState({
        firstname: "John Doe", email: "Johndeo@gmail.com"
    });
    useEffect(() => {
        axios.get("https://tstcserver.onrender.com/profile")
            .then(res => setUserData(res.data))
            .catch(err => console.log(err))
    }, []);
    return (
        <>

            <ProHead />
            <div className="booking">
                <button>
                    <img src={tstc} className="mg" alt="" />
                </button>
                <div className="list">

                    <div className="list">
                        <div style={{ textAlign: "center", padding: "10px" }}>DASHBOARD</div>
                        <div className="">Email: JohnDoe@gmail.com</div>
                        <div className="">Name:  John Deo</div>

                        {/* Display other user data as needed */}
                    </div>

                </div>
                <div className="butn">
                    <Link to="/booking" style={{ textDecoration: "none", width: "100%", display: "flex" }}>
                        <button>Book</button>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none", width: "100%", display: "flex" }}>
                        <button>Logout</button>
                    </Link>

                </div>
                <div className="bookk">
                    <div className="bok">Booked</div>
                    <div className="bok">Ticket</div>
                </div>

                <div className="books">


                    <table>
                        <thead>
                            <th></th>
                            <th></th>
                        </thead>
                        <tbody>
                            {data.map((ticket, index) => {
                                return <tr key={index}>
                                    <td>{ticket.TicketID}</td>
                                    <td><Link style={{ textDecoration: "none" }} to={`/ticket/${ticket.TicketID}`}>Ticket</Link></td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}