import { Link } from "react-router-dom";

export default function ProHead() {

    return (
        <>
            <div className="bck">
                <Link to="/booking" style={{textDecoration: "none",fontSize: "18px"}}>

                    <div className="bck bk"><i className="fa fa-chevron-left"></i></div>
                </Link>
            </div>
        </>
    )
}