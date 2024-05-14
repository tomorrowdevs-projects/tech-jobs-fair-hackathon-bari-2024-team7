import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="navbar-left"></div>
                <div className="navbar-center">
                    <h1>Il Tuo Titolo Qui</h1>
                </div>
                <div className="navbar-right">
                    <button>
                    <Link to="/">Nuova Partita</Link>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
