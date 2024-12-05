import { useContext, useState } from "react";
import styles from "./styles.css";
import { Link } from "react-router-dom";
import { QuestionContext } from "../context/QuestionContext";

export default function Register() {
    const {
        session,
        sessionLoading,
        sessionError,
        handleSignUp,
    } = useContext(QuestionContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <div className={styles.actions}>
                <Link to={"/app"}>
                    <button
                        onClick={() => handleSignUp(email, password)}
                        disabled={sessionLoading}
                    >
                        {sessionLoading ? "Signing up..." : "SIGN UP"}
                    </button>
                </Link>

            </div>

        </div>
    );

    
}