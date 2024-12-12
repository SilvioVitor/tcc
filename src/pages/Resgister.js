import { useContext, useState } from "react";
import "./sing.css";
import { Link } from "react-router-dom";
import { QuestionContext } from "../context/QuestionContext";

export default function Register() {
    const {
        sessionLoading,
        sessionError,
        handleSignUp,
    } = useContext(QuestionContext);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="register-container">
            <div className="register-form">
                <h2 className="register-title">Registro</h2>
                {sessionError && <p className="error-message">{sessionError}</p>}
                <input
                    type="text"
                    placeholder="Usuário"
                    value={userName}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value.length <= 25) {
                            setUserName(value); // Atualiza o estado apenas se tiver 25 caracteres ou menos
                        }
                    }}
                    className="register-input"
                />

                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="register-input"
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="register-input"
                />
                <button
                    onClick={() => handleSignUp(userName, email, password)}
                    disabled={sessionLoading}
                    className="register-button"
                >
                    {sessionLoading ? "Cadastrando..." : "REGISTRAR"}
                </button>
                <div className="cadastro-div">
                    <p>Já tem uma conta?</p>
                    <Link to="/login" className="register-link">
                        Faça login
                    </Link>
                </div>
            </div>
        </div>
    );
}