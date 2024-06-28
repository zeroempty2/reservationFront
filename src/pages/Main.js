import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Main.css';



const Main = ({ isLoggedIn }) => {
    const navigate = useNavigate();

    const handleMemberClick = () => {
        if (isLoggedIn) {
            navigate('/category'); 
        } else {
            navigate('/login');
        }
    };

    const handleNonMemberClick = () => {
            navigate('/category'); 
    }


    return (
        <div className='contents-section'>
            <div className='main-square'>
                <button className='non-member' onClick={handleNonMemberClick}>비회원 진행</button>
                <button className='member' onClick={handleMemberClick}>회원 진행</button>
            </div>
        </div>
    );
};

export default Main;