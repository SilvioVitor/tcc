import "./Header.css";
import logo_if from "../images/logo-if-branca.png";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { QuestionContext } from "../context/QuestionContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header({ title }) {
    const { handleLogout, session } = useContext(QuestionContext);
    const logoRef = useRef(null); // Referência para a logo

    const handleMouseOver = () => {
        if (logoRef.current) {
            logoRef.current.style.transform = "rotate(360deg)";
        }
    };

    const handleMouseOut = () => {
        if (logoRef.current) {
            logoRef.current.style.transform = "rotate(0deg)";
        }
    };

    return (
        <div className="header">
            <div className="header-left">
                <AccountCircleIcon />
                {session ? (
                    <h4> {session.user.user_metadata.first_name} </h4>
                ) : (
                    <h4>Teste</h4>
                )}
            </div>
            <div className="header-center">
                <h3>{title}</h3>
            </div>
            <div className="header-right">
                <Link to={"/"}>
                    <button onClick={handleLogout}>LogOut</button>
                </Link>
                <Link to={"/"}>
                    <img
                        ref={logoRef}
                        src={logo_if}
                        alt="logo do IFMC"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        style={{ transition: "transform 0.5s ease" }}
                    />
                </Link>
            </div>
        </div>
    );
}
