import React from 'react';
import './style.css';

import Header from './components/header';
import Feed from './components/feed';

function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <main>
                <Feed />
                </main>
            </div>
        </div>
    );
}

export default Home;