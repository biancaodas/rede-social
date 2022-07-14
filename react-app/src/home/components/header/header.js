import React from 'react';
import '../../../home/style.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';


function Header() {
    return (
        <AppBar position='fixed' color='default' >
            <Toolbar>
            <Box>
                <a href='/'><img src='./images/logo.png' alt='logo' className='img'></img></a>
            </Box>
            <Box>
                <Input className='input' placeholder='Pesquisar'></Input>
            </Box>

            <Box className='icons'>
                <IconButton aria-label="add"  color='secondary' href='/'>
                <AddIcon/>
                </IconButton>
            <Avatar className='avatar' alt='Jhon Doe' src='/images/avatars/avatar02.png'/>
            </Box>
            </Toolbar>
        </AppBar>
    );
}


export default Header;