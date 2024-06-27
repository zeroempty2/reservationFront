import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Main.css';
import MainLogin from './MainLogin';    // 로그인 페이지 컴포넌트


const Main = ({ isLoggedIn }) => {
    const navigate = useNavigate();

    const handleMemberClick = () => {
        if (isLoggedIn) {
            navigate('/memberPage'); 
        } else {
            navigate('/login');
        }
    };


    return (
        <div className='contents-section'>
            <div className='main-square'>
                <button className='non-member' >비회원 진행</button>
                <button className='member' onClick={handleMemberClick}>회원 진행</button>
            </div>
        </div>
    );
};

export default Main;