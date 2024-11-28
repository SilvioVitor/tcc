import Header from '../components/Header';
import './styles.css';
import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionContext';
import { Link, useNavigate } from 'react-router-dom';
import { CircularProgress } from "@mui/material";

export default function Analysis() {
    const { analysis, createQuestion, loading, setInput8} = useContext(QuestionContext);

    const navigate = useNavigate();

    function handleClick() {
        navigate('/question')
    }

    async function handleSubmit() {
        setInput8("")
        createQuestion().then((response) => handleClick(response));
    }

    async function handleReset() {
        setInput8("")
    }

    return (
        <section>
            <Header title={'Análise'} />
            <div className='main-analysis'>

                <div className='main-center'>
                    <p>{analysis}</p>
                </div>
                
                <div className='decision'>
                    {loading ?
                        <div className="loading-analysis">
                            <CircularProgress size="3rem" color="info" />
                        </div>
                        : 
                        <div>
                            <button onClick={handleSubmit}>
                                Nova pergunta
                            </button>
                            <Link to={"/app"}>
                                <button onClick={handleReset}>
                                    Outro parametro
                                </button>
                            </Link>
                        </div>
                    }
                </div>
            </div >
        </section>
    );
}
