import { Link } from "react-router-dom";

export default function Header() {

    return (
        <>
            <div className="bck">
                <Link to="/profile" style={{textDecoration: "none",fontSize: "18px"}}>

                    <div className="bck bk"><i className="fa fa-chevron-left"></i></div>
                </Link>
            </div>
        </>
    )
}