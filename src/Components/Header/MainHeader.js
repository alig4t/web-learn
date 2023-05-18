import React from 'react';
import TopNav from '../Nav/MainNav/TopNav';
import Header from './Header';

const MainHeader = () => {
    return (
        <div className="landing-layer">
            <div className="container">
                <TopNav />
                <Header />
            </div>
        </div>
    );
}

export default MainHeader;