import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Pay() {
    const [proofImage, setProofImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProofImage(file);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Create form data object
        const formData = new FormData();
        formData.append('proofImage', proofImage);

        // You can append other form data fields here if needed

        // Send form data to server
        axios.post('http://localhost:3001/upload', formData)
            .then(res => {
                console.log("Image uploaded successfully!");
                // Add any additional handling after successful image upload
            })
            .catch(err => {
                console.error("Error uploading image:", err);
                // Add error handling here
            });
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
