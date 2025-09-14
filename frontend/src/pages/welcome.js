import { Link } from 'react-router-dom';
import '../assets/styles/welcome.css';
import Logo from '../components/utils/Logo';

function Welcome() {
    return (
        <section className="hero-section">
            <img className="welcome-bg-img" src={require('../assets/images/bg1.jpeg')} alt="background" aria-hidden="true" />
            <div className="welcome-content beautiful-glass">
                <Logo/>
                <h2 className="welcome-title">Take Control of Your <span>Finances</span></h2>
                <h3 className="welcome-subtitle">
                    <span>MyWallet</span> helps you track your income, expenses, and savings with ease.<br/>
                    Visualize your spending, set goals, and unlock a brighter financial future.<br/>
                    <span className="highlight">Simple. Secure. Empowering.</span>
                </h3>
                <div className="welcome-actions">
                    <Link to='/auth/login'>
                        <button className="login-btn">Sign In</button>
                    </Link>
                    <Link to='/auth/register'>
                        <button className="register-btn">Get Started</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Welcome;