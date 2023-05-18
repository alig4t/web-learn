import React from 'react';

import Footer from '../Footer/Footer';
import MainNav from '../Nav/MainNav/MainNav';
import MainHeader from '../Header/MainHeader';

const MainLayout = (props) => {
    return (
        <>
            <MainHeader />
            <MainNav />
                {props.children}
            <Footer />
        </>
    );
}

export default MainLayout;