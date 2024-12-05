import './styles.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="not-found">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Página não encontrada</p>
            <p className="not-found-description">
                A página que você está tentando acessar não existe ou foi movida.
            </p>
            <Link to="/" className="not-found-link">
                Voltar para a página inicial
            </Link>
        </div>
    );
}
