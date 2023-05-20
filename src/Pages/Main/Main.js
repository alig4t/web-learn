import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '../../Components/Layouts/MainLayout';
import Courses from '../../Components/Courses/Courses';
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';




const Main = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' exact element={<Courses />} />
                <Route path='*' element={<h1>Not founddddddddddddddddddddddddddddddddddddddd</h1>} />
            </Routes>
        </MainLayout>
    );
}

export default Main;