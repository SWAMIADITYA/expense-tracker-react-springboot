
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import '../../assets/styles/sidebar.css';
import SideBarLinks from './sideBarLinks';
import { useState } from 'react';
import AuthVerify from '../../services/auth.verify';
import Logo from '../utils/Logo';

function Sidebar({ activeNavId }) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const navigate = useNavigate();
    const currentUser = AuthService.getCurrentUser();

    const logout = () => {
        AuthService.logout_req();
        navigate('/');
        window.location.reload();
    };

    // Determine primary role (admin > user)
    const primaryRole = currentUser?.roles.includes('ROLE_ADMIN')
        ? 'ROLE_ADMIN'
        : 'ROLE_USER';

    const filteredLinks = SideBarLinks.filter(link => link.role === primaryRole);

    return (
        <div className={isSideBarOpen ? "side-bar open" : "side-bar"}>
            <div style={{ padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Logo />
                <span onClick={() => setIsSideBarOpen(false)} className='mobile'>
                    <i className="fa fa-times" aria-hidden='true'></i>
                </span>
                <span onClick={() => setIsSideBarOpen(true)} className='mobile menu'>
                    <i className="fa fa-bars" aria-hidden='true'></i>
                </span>
            </div>

            <div className="sidebar-scroll">
                <ul>
                    {filteredLinks.map(link => (
                        <Link key={link.id} className='nav-link' to={link.to}>
                            <li className={activeNavId === link.id ? "active" : ""}>
                                <i className={link.icon} aria-hidden='true'></i> {link.name}
                            </li>
                        </Link>
                    ))}
                    <li onClick={logout} className="nav-link" style={{ cursor: 'pointer' }}>
                        <i className="fa fa-sign-out" aria-hidden="true"></i> Log out
                    </li>
                </ul>
            </div>

            <AuthVerify logOut={logout} />
        </div>
    );
}

export default Sidebar;
