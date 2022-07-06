import React from 'react';
import '../style.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import postCard from './postCard';

function Feed() {
    return (
        <main>
            <Container maxWidth='lg'>
                <Box display='flex'>
                    <postCard/>
                </Box>
            </Container>
        </main>
    )
}

export default Feed;