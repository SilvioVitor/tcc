import "./Header.css"
import logo_if from "../images/logo-if-branca.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";

export default function Header ({title}) {

    const { handleLogout, session } = useContext(QuestionContext);

    return (
        <div className="header">
            <div className="header-left">
                {session ? 
                <h4> {session.user.email} </h4>
             :
            <h4>Teste</h4> }
                
            </div>
            <div className="header-center">
                <h3>{title}</h3>
            </div>
            <div className="header-right">
                
                <Link to={"/"}>
                    <img src={logo_if} alt="logo do IFMC"/> 
                </Link>
                <button onClick={handleLogout}>LogOut</button>
            </div>
        </div>
    );
}