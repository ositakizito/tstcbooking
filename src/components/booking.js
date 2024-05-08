import { useState } from "react";
import axios from "axios";
import location from "../components/images/location.png"
import { useNavigate } from "react-router-dom";
import Header from "./header";



export default function Booking() {

    const destinations = {
        select: "",
        Abuja: "10,000",
        Bauchi: "7,500",
        Bayelsa: "6,000",
        Yola: "14,000",
        Enugu: "20,000",
        Osun: "30,000",
        Lagos: "9,500",
        Ibaban: "13,500",
        Yobe: "19,000",
        Port_Harcourt: "18,000",

    };

    const [selectedOption, setSelectedOption] = useState("yola");

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        // Update pay value based on the selected destination
        setValues({
            ...value,
            too: selectedValue,
            pay: destinations[selectedValue],
            // Assign pay based on selected destination
            seat: generateSeatNumber(selectedValue)
        });
    };
    const generateSeatNumber = (destination) => {
        // Generate a random seat number for the given destination
        // For simplicity, let's assume it's a random number between 1 and 18
        return Math.floor(Math.random() * 18) + 1;
    };
    const [value, setValues] = useState({
        from: 'Jalingo',
        too: '',
        fphone: '',
        pay: destinations["abuja"],
        seat: generateSeatNumber("abuja")

    })
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post('https://tstcserver.onrender.com/booking', value)
            .then(res => {
                navigate("/pay");
            })
            .catch(err => console.log(err))
    }



    const handleSeatChange = (event) => {
        const seatNumber = parseInt(event.target.value);
        if (!isNaN(seatNumber) && seatNumber >= 1 && seatNumber <= 18) {
            setValues({ ...value, seat: seatNumber });
        } else {
            setValues({ ...value, seat: '' }); // Reset seat number if invalid input
        }
    };
    return (
        <>
            <Header />
            <div className="SignUp">
                <button>
                    <img src={location} alt="" />
                </button>
                <form onSubmit={handlesubmit}>
                    <label>Location</label>
                    <input type="text" className="signInput" placeholder="From Jalingo" name="from" onChange={e => setValues({ ...value, from: e.target.value })} value="Jalingo" readOnly />
                    <label>Destination</label>
                    <select
                        value={value.too}
                        onChange={handleSelectChange}
                        className="signInput"
                    >
                        {/* Generate options dynamically based on the destinations object */}
                        {Object.keys(destinations).map(destination => (
                            <option key={destination} value={destination}>
                                {destination}
                            </option>
                        ))}
                    </select>
                    <label>Family contact</label>
                    <input type="text" className="signInput" placeholder="Family contact" name="fphone" onChange={e => setValues({ ...value, fphone: e.target.value })} />
                    <label>Pay Amount</label>
                    <input
                        type="text"
                        className="signInput"
                        placeholder="Pay Amount"
                        name="pay"
                        value={value.pay}
                        readOnly
                    />
                    <label>Seat Number</label>
                    <input
                        type="number"
                        className="signInput"
                        placeholder="Seat No 1-18"
                        value={value.seat}
                        name="seat"
                        min="1"
                        max="18"
                        onChange={handleSeatChange}
                        readOnly
                    />

                    <input type="submit" className="signInput btn" value="Pay" />

                </form>
            </div>
        </>
    )
}
