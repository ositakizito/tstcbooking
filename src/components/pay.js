import { Link } from "react-router-dom";

export default function Pay() {

    return (
        <>
        <div className="tk">

       
            <div className="ticket">
                <Link to="/booking" style={{ color: "#EB1F27" }}> <div className=""><i className="fa fa-chevron-left"></i></div> </Link>
                <div className="tick">Payment</div>
                <div className=""><i className="fa fa-share"></i></div>
            </div>

            <div className="ticket2">




                <div className="ticketlist">
                    <div className="tickseat each">
                        <div className="tick1">Pay to this Account details</div>
                        <div className="tick2">07016361129</div>
                        <div className="tick">TSTC jalingo</div>
                        <div className="tick2">Opay Microfinance Bank</div>
                    </div>
                </div>
                <div className="ticketlist1">
                    <form>


                        <p>Send proof of Payment</p>
                        <input type="file" className="ticketprice" />
                        <div className="ticketlist" >
                            <Link to="#" style={{ textDecoration: "none" }}>
                                <div className="tickseat tck">
                                    <div className="tick1 ">SEND</div>
                                </div>
                            </Link>
                            <Link to="/profile" style={{ textDecoration: "none" }}>
                                <div className="tickseat tck">
                                    <div className="tick1 ">Dashboard</div>
                                </div>
                            </Link>
                        </div>
                    </form>
                </div>

            </div>
            </div>
        </>
    )
}