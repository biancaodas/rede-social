import React from 'react';
import '../style.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
// import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';


function Header() {
    return (
        <AppBar position='fixed' color='inherit'>
            <Toolbar>
            <Box>
                <a href='/'><img src='./images/logo.png' alt='logo' className='img'></img></a>
            </Box>
            <Box>
                <Input className='input' placeholder='Pesquisar'></Input>
                {/* <input className='input' placeholder='Pesquisar'></input> */}
            </Box>

            <Box className='icons'>
                <IconButton aria-label="add">
                    <AddIcon/>
                </IconButton>

                {/* <Fab className='fab' size='small' color='primary' aria-label='add'>
                    <AddIcon/>
                </Fab> */}
            <Avatar className='avatar' alt='Jhon Doe' src='/images/avatars/avatar02.png'/>
            </Box>
            </Toolbar>
        </AppBar>
    );
}


export default Header;