import React from 'react';
import TopNav from '../Nav/MainNav/TopNav';
import LogoSearch from './LogoSearch';

import {useLocation} from 'react-router-dom'

const MainHeader = () => {
    const loc = useLocation()
    console.log(loc);
    return (
        <div className="landing-layer">
            <div className="container">
                <TopNav />
                {loc.pathname == '/' ? <LogoSearch /> : null}
            </div>
        </div>
    );
}

export default MainHeader;