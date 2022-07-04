import React from 'react';
import '../style.css';

function Header() {
    return (
        <div>
            <div>
                <a href='/'>Social Pets</a>
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