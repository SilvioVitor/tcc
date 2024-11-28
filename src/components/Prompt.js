import "./Prompt.css"
import "./Prompt-inputs.css"
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionContext } from "../context/QuestionContext";
import { CircularProgress } from "@mui/material";

export default function Prompt() {

    const { createQuestion, loading, setInput1, setInput2, setInput3, setInput4, setInput5, setInput6, setInput7, input1, input2, input3, input6, input7 } = useContext(QuestionContext)

    const navigate = useNavigate();

    function handleClick(response) {
        navigate('/question')
    }

    async function handleSubmit() {
        createQuestion().then((response) => handleClick(response));
    }

    return (
        <div id="main-forms">
            <div id="forms">
                <h2>Parametros das questões</h2>
                <input id="disciplina" type="text" className='input-prompt' value={input1} onChange={(e) => setInput1(e.target.value)} placeholder="Diciplina" required />
                <input id="tema" type="text" className='input-prompt' value={input2} onChange={(e) => setInput2(e.target.value)} placeholder="Tema específico" required />
                <input id="foco" type="text" className='input-prompt' value={input3} onChange={(e) => setInput3(e.target.value)} placeholder="Foco da questão" required />
                <div className="body-grupo-1">
                    <p className="paragrafo">Dificuldade</p>
                    <div className="grupo-1">
                        <input type="radio" name="dificuldade" className='input-prompt' value="Fácil" onChange={(e) => setInput4(e.target.value)} /> <p> Fácil </p>
                        <input type="radio" name="dificuldade" className='input-prompt' value="Médio" onChange={(e) => setInput4(e.target.value)} /> <p> Médio </p>
                        <input type="radio" name="dificuldade" className='input-prompt' value="Difícil" onChange={(e) => setInput4(e.target.value)} /> <p> Difícil </p>
                    </div>
                </div>
                <div className="body-grupo-2">
                    <p>Formato da questão</p>
                    <div className="grupo-2">
                        <input type="radio" name="tipo" className='input-prompt' value="Múltipla escolha" onChange={(e) => setInput5(e.target.value)} /> <p> Múltipla escolha </p>
                        <input type="radio" name="tipo" className='input-prompt' value="Discursiva" onChange={(e) => setInput5(e.target.value)} /> <p> Discursiva </p>
                        <input type="radio" name="tipo" className='input-prompt' value="Verdadeiro ou Falso" onChange={(e) => setInput5(e.target.value)} /> <p> Verdadeiro ou Falso </p>
                    </div>
                </div>
                <div className="grupo-3">
                    <p>Número de alternativas:</p>
                    <input
                        id="alternativas"
                        type="number"
                        className="input-prompt"
                        value={input6}
                        onChange={(e) => {
                            const value = e.target.value;
                            // Verifica se é um número entre 1 e 9
                            if (/^[1-9]$/.test(value) || value === "") {
                                setInput6(value);
                            }
                        }}
                        min="1"
                        max="9"
                        maxlength="1"
                        required
                    />
                </div>
                <div className="grupo-4">
                    <p>Limitação de palavras:</p>
                    <input
                        id="palavras"
                        type="number"
                        className="input-prompt"
                        value={input7}
                        onChange={(e) => {
                            const value = e.target.value;
                            // Limita o valor a no máximo 3 dígitos
                            if (value.length <= 3) {
                                setInput7(value);
                            }
                        }}
                        min="1"
                        max="999"
                        required
                    />
                </div>
                {loading ?
                    <div className="loading">
                        <CircularProgress size="2.5rem" color="info" />
                    </div>
                    :
                    <button type="submit" className='button-prompt' onClick={() => { handleSubmit() }} >
                        Enviar
                    </button>
                }
            </div>
        </div>
    );
}