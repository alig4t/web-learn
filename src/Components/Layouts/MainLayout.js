import React from 'react';

import Footer from '../Footer/Footer';
import MainNav from '../Nav/MainNav/MainNav';
import MainHeader from '../Header/MainHeader';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const MainLayout = (props) => {
    return (
        <>
            <MainHeader />
            <MainNav />
            {props.children}
            <Footer />
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default MainLayout;