import React from 'react';
import '../style.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';


function Header() {
    return (
        <AppBar position='fixed' color='inherit'>
            <Toolbar>
                <a href='/'><img src='./images/logo.png' alt='logo' className='img'></img></a>
            <Box>
                <input className='input' placeholder='Pesquisar'></input>
            </Box>

            <Box className='icons'>
                <Fab className='fab' size='small' color='primary' aria-label='add'>
                    <AddIcon/>
                </Fab>
            <Avatar className='avatar' alt='Jhon Doe' src='/'/>
            </Box>
            </Toolbar>
        </AppBar>
    );
}


export default Header;