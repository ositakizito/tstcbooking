import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";
export default function Pay() {
    
    const navigate = useNavigate();
    const [isImageUploaded, setIsImageUploaded] = useState(false);

    const handleImageChange = (e) => {
        // Check if a file is selected
        if (e.target.files.length > 0) {
            setIsImageUploaded(false); // Reset to false when a new image is selected
        }
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Here you can add code to handle form submission
        // For now, let's just set isImageUploaded to true
        setIsImageUploaded(true);
        setTimeout(() => {
            navigate("/profile");
        }, 2000);
    };

    return (
        <>
            <div className="tk">
                <div className="ticket">
                    <Link to="/booking" style={{ color: "#EB1F27" }}>
                        <div className=""><i className="fa fa-chevron-left"></i></div>
                    </Link>
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

                        <form onSubmit={handleFormSubmit}>
                            <p>Send proof of Payment</p>
                            <input type="file" className="ticketprice" onChange={handleImageChange} />
                            {isImageUploaded && <p>Image uploaded successfully!</p>}
                            <div className="ticketlist">
                                <button type="submit" className="tickseat tck">
                                    <div className="tick1">SEND</div>
                                </button>
                                <Link to="/profile" style={{ textDecoration: "none" }}>
                                    <div className="tickseat tck">
                                        <div className="tick1">Dashboard</div>
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
