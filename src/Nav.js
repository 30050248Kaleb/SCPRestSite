import { Link } from 'react-router-dom';

function Nav()
{
    return(
        <nav>
            <h1 className='my-3 text-light'><img src='favicon.png' id="logo" alt='logo' /> SCP Foundation</h1>
            <ul className='nav bg-primary rounded'>
                <Link to="/" className="nav-item">
                    <li className="nav-link text-white">Home</li>
                </Link>
                <Link to="/SCPs" className="nav-item">
                    <li className="nav-link text-white">SCPs</li>
                </Link>
            </ul>
            <br></br>
        </nav>
    );
}

export default Nav;