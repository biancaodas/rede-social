import React from 'react';
import Header from './components/header';
import './style.css';

function Home() {
    return (
        <div>
            <Header />
            <main className='main'>
                <div className='feed'>
                    feed
                </div>
            </main>
        </div>
    );
}

export default Home;