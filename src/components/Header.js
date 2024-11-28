import "./Header.css"
import logo_if from "../images/logo-if-branca.png"

export default function Header ({title}) {
    return (
        <div className="header">
            <div className="header-left">
                <h4> Teste </h4>
            </div>
            <div className="header-center">
                <h3>{title}</h3>
            </div>
            <div className="header-right">
                <img src={logo_if} alt="logo do IFMC"/>
            </div>
        </div>
    );
}