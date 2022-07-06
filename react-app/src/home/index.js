import React from 'react';
import './style.css';

import Header from './components/header';
import Feed from './components/feed';

function Home() {
    return (
        <div>
<<<<<<< HEAD
            <div className='header'>
                <Header/>
=======
            <div>
                <Header />
            </div>
            <div>
                <main>
                <Feed />
                </main>
>>>>>>> main
            </div>
            <main className='feed'>
                <Feed/>
            </main>
        </div>
    );
}

export default Home;