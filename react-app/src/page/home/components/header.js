import React from 'react';

function Header() {
    return (
        <header className= 'header'>
        <div className='toolbar'>
            <div>
                <a href='/'>Social Pets</a>
            </div>
            <div>
                <button>Pag inicial</button>
                <span>barra de pesquisa</span>
                <button>Msg</button>
                <span>Menu</span>
            </div>
        </div>
    </header>
    );
}


export default Header;