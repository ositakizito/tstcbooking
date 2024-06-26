import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';
import axios from "axios";

export default function Ticket() {
    const { id } = useParams();

    const [tick, setTick] = useState([]);
    useEffect(() => {
        axios.get('https://tstcserver.onrender.com/booking/' + id).then(res => {
            setTick(res.data[0]);
        }).catch(err => console.log(err))
    })

    const pdfRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => pdfRef.current,
    });
  // Retrieve login details from session storage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    return (
        <>
            <div className="tk" ref={pdfRef} style={{ backgroundColor: "#f0f0f0" }}>
                <div className="ticket">
                    <Link to="/profile" style={{ color: "#EB1F27" }}> <div className=""><i className="fa fa-chevron-left"></i></div> </Link>
                    <div className="tick">Your Ticket</div>
                    <div className=""><i className="fa fa-share"></i></div>
                </div>
                <div className="ticketop">
                    <div className="tickimg"><i className="fa fa-user" style={{ color: "#EB1F27" }} /></div>
                    <div className="ticketname">
                        <p className="name">{loggedInUser ? (
                            <div>
                               
                                <p>{loggedInUser.email}</p>
                                {/* Display other user details */}
                            </div>
                        ) : (
                            <p>User is not logged in.</p>
                        )}</p>
                        <p className="pass">Passenger</p>
                    </div>
                </div>
                <div className="ticket2">
                    <div className="tck">
                        <div className="ticket3">
                            <div className="tickfrm">From</div>
                            <div className="tickjal">{tick.userfrom}</div>
                        </div>
                        <div className="tickline2"></div>
                        <div className="tickcirle"><i className="fa fa-car" /></div>
                        <div className="tickline"></div>
                        <div className="ticket3">
                            <div className="tickfrm">To</div>
                            <div className="tickjal">{tick.userto}</div>
                        </div>
                    </div>
                    <div className="ticketID">
                        <div className="ticketdate">
                            <i className="fa fa-calendar" />

                            <p id="dat">02/04/2024</p>
                        </div>
                        <div className="ticketdate">
                            <i className="fa fa-clock" />
                            <p>04:45PM</p>
                        </div>
                    </div>
                    <div className="ticketlist">
                        <div className="tickseat">
                            <div className="tick1">Ticket ID</div>
                            <div className="tick2">000{tick.TicketID}</div>
                        </div>

                        <div className="tickseat">
                            <div className="tick1">Seat No</div>
                            <div className="tick2">00{tick.seatno}</div>
                        </div>
                    </div>

                    <div className="ticketlist">
                        <div className="tickseat">
                            <div className="tick1">Payment successful</div>
                            <div className="tick2">{tick.payment}</div>
                        </div>
                    </div>
                    <div className="ticketlist">
                        <div className="tickseat">
                            <div className="tick1">Departure Time</div>
                            <div className="tick2">7:30 AM</div>
                        </div>
                    </div>
                    <div className="ticketlist">

                        <p style={{ fontWeight: 800, marginTop: '10px' }}>TSTC Address</p>
                    </div>
                    <div className="ticketlist">

                        <p>Tstc Office, Airstrip Mayo-Dassa Opposite Baptist Academic, Jalingo Taraba State</p>
                    </div>
                    <div className="ticketlist">
                        <div className="tickseat tck">
                            <button className="tick1btn " onClick={handlePrint}>Download ticket</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
