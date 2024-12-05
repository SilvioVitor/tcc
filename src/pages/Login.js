
import { useContext, useState } from "react";
import styles from "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { QuestionContext } from "../context/QuestionContext";

export default function Login() {
    const {
        session,
        sessionLoading,
        sessionError,
        handleSignIn,
    } = useContext(QuestionContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <div className={styles.form}>
            <h2>Credentials</h2>
            {sessionError && <p style={{ color: "red" }}>{sessionError}</p>}
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <div >

                    <button
                        onClick={() => {handleSignIn(email, password); navigate("/app")}}
                        disabled={sessionLoading}
                    >
                        {sessionLoading ? "Logging in..." : "LOGIN"}
                    </button>
                    
                    {sessionError ? () => {} : () => {
                        
                    }}

                <Link to={"/register"}>
                    <p>Criar conta</p>
                </Link>
            </div>

        </div>
    );

    
}