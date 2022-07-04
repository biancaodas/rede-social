import React from 'react';
import './style.css';

import Header from './components/header';
import Feed from './components/feed';

function Home() {
    return (
        <div>
            <div className='header'>
                <Header />
            </div>
            <div>
                <main className='feed'>
                <Feed />
                </main>
            </div>
        </div>
    );
}

export default Home;