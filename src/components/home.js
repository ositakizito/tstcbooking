import { Link } from "react-router-dom";
import bus from "../components/images/bus.png";
import tstc from "../components/images/tstc.png";
export default function Home() {

    return (
        <>
            <div className="bookHome">
                <button>
                    <img src={bus} alt="" />
                </button>
                <div className="bookname">
                    <p className="bookr">
                        <img src={tstc} alt="" width={150}/>
                    </p>
                    <p className="bookr">
                        Book for a
                    </p>
                    <p className="bookr">
                         TRIP
                    </p>
                    <p className="bookrr">
                        Are you in?
                    </p>
                </div>
                <Link to="/login" >
                <button className="getstart">Get Started</button>
                
                </Link>
            </div>
        </>
    )
}