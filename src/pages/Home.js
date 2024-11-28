import { useNavigate } from 'react-router-dom';
import logo from "../images/logo-1-1.png"
import './styles.css'

export default function Home() {

    const navigate = useNavigate();

    function hendleClick() {
        navigate('/app')
    }

    return (
        <div className='main-home'>
            <div className='header-home'>
                <h1>Aplicação</h1>
                <div className='header-div'>
                    <a href='#funcionamento'>Funcionamento</a>
                    <button className='button-start-header' onClick={hendleClick}>Teste a Aplicação</button>
                </div>
            </div>
            <div className='body-home'>
                <div className='start-home'>
                    <img src={logo} alt='Logo-IF' />
                    <p>"Aproveite o poder da IA avançada para criar perguntas e respostas personalizadas, melhorar seus estudos e acompanhar seu progresso em tempo real!"</p>
                    <button className='button-start' onClick={hendleClick}>Start Aplication</button>
                </div>
                <div className='info-home'>
                    <h2>Bem-vindo ao Sistema de Aprendizado Interativo!</h2>
                    <div className='bloco-1'>
                        <p>Nossa aplicação foi projetada para revolucionar a forma como os estudantes do IFRN – Campus Macau aprendem e fixam conteúdos. Utilizando a avançada tecnologia de Inteligência Artificial (IA) baseada na API do ChatGPT, oferecemos uma plataforma inovadora, interativa e acessível para apoiar o processo de ensino-aprendizagem.</p>
                    </div>
                    <h2 id='funcionamento'>Como funciona?</h2>
                    <div className='bloco-2'>
                        <ul className='lista-funcionamento'>
                            <li><strong>Geração de Perguntas e Análise de Respostas:</strong> A aplicação utiliza IA para criar quizzes, exercícios e questões personalizadas para diversas disciplinas. Além disso, suas respostas são analisadas automaticamente, proporcionando feedback imediato e direcionado para auxiliar na sua evolução acadêmica.</li>
                            <li><strong>Conteúdo Personalizado:</strong> Nosso sistema adapta o conteúdo de acordo com as suas necessidades, tornando o aprendizado mais eficiente e engajador.</li>
                            <li><strong>Acompanhamento do Progresso:</strong> A plataforma oferece estatísticas detalhadas sobre seu desempenho, destacando pontos fortes e áreas que precisam de mais atenção.</li>
                            <li><strong>Facilidade de Uso:</strong> Com uma interface moderna e intuitiva desenvolvida em ReactJS, o acesso ao aprendizado nunca foi tão simples.</li>
                        </ul>
                    </div>
                    <h2>Por que usar nossa aplicação?</h2>
                    <div className='bloco-3'>
                        <p>Sabemos que o modelo tradicional de ensino enfrenta desafios para acompanhar a evolução tecnológica. Por isso, nosso objetivo é tornar o aprendizado mais dinâmico, eficiente e interessante. Aqui, você pode aprender com seus erros e acertos, tornando seu estudo mais produtivo e motivador.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}