import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function Header() {
    return (
        <AppBar position='fixed' color='inherit'>
            <Toolbar>
                <a href='/'><img src='./images/logo.png' alt='logo' className='img'></img></a>
                <div>
                    <input className='input' placeholder='Pesquisar'></input>
                </div>
                {/*
                <div>
                    <span>msg</span>
                    <span>menu</span>
                </div> */}
            </Toolbar>
        </AppBar>
    );
}


export default Header;