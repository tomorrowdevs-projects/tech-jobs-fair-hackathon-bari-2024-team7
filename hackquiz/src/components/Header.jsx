import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="navbar-left"></div>
                <div className="navbar-center">
                    <h1>Il Tuo Titolo Qui</h1>
                </div>
                <div className="navbar-right">
                    <button>Nuova Partita</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
