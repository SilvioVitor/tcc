import Header from '../components/Header';
import { QuestionContext } from '../context/QuestionContext';
import './styles.css'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from "@mui/material";

export default function Question() {

    const { createAnalysis, question, loading, setInput8, input8 } = useContext(QuestionContext);

    const navigate = useNavigate();

    function handleClick(analysis) {
        navigate('/analysis')
    }

    async function handleSubmit() {
        createAnalysis().then((analysis) => handleClick(analysis));
    }

    return (
        <div className='main'>
            <Header title={'Questão'} />
            <div className='main-center'>
                <p>{question}</p>
            </div>
            <div className='main-forms'>
                <div className='forms'>
                    <input type="text" className='input-response' value={input8} onChange={(e) => setInput8(e.target.value)} placeholder="Resposta" required />
                    {loading ?
                        <div className="loading-question">
                            <CircularProgress size="1.8rem" color="success" />
                        </div> 
                        : 
                        <button type="submit" className='button-response' onClick={() => handleSubmit()} >
                            Enviar
                        </button>
                    }
                </div>
            </div>
        </div>
    );
}