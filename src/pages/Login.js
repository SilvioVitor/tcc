import { useContext, useState } from "react";
import "./sing.css";
import { Link, useNavigate } from "react-router-dom";
import { QuestionContext } from "../context/QuestionContext";

export default function Login() {
    const {
        sessionLoading,
        sessionError,
        handleSignIn,
    } = useContext(QuestionContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="login-title">Login</h2>
                {sessionError && <p className="error-message">{sessionError}</p>}
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
                <button
                    onClick={() => {
                        handleSignIn(email, password);
                        navigate("/app");
                    }}
                    disabled={sessionLoading}
                    className="login-button"
                >
                    {sessionLoading ? "Entrando..." : "LOGIN"}
                </button>
                <div className="cadastro-div">
                    <p> Não tem conta?</p>
                    <Link to="/register" className="login-link">
                        Crie a sua
                    </Link>
                </div>
            </div>
        </div>
    );
}