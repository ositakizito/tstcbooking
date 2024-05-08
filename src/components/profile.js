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
   
    // Retrieve login details from session storage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Check if user is logged in and display their details

    const handleLogout = () => {
        // Clearing login details from session storage
        localStorage.removeItem("loggedInUser");
        // Other logout logic (e.g., redirect to login page)
      };
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
                      
                        {loggedInUser ? (
                            <div>
                               <p>Welcome..</p>
                                <p>Email: {loggedInUser.email}</p>
                                {/* Display other user details */}
                            </div>
                        ) : (
                            <p>User is not logged in.</p>
                        )}
                    </div>

                </div>
                <div className="butn">
                    <Link to="/booking" style={{ textDecoration: "none", width: "100%", display: "flex" }}>
                        <button>Book</button>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none", width: "100%", display: "flex" }}>
                        <button onClick={handleLogout}>Logout</button>
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
