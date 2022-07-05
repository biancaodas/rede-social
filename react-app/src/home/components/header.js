import React from 'react';
import '../style.css';

function Header() {
    return (
        <div className='header'>
            <div>
                <img className='img' src='./images/logo.png' alt='logo'></img>
            </div>
            <div>
                <button>Pagina inicial</button>
                <input type='text' placeholder='Pesquisar'></input>
                <button>Msg</button>
                <button>Menu</button>
            </div>
        </div>
    );
}


export default Header;