import React, { useState } from 'react';
import {Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useLocation,  useNavigate  } from 'react-router-dom';
import { URL_VARIABLE } from "./export/ExportUrl"; 
import './css/Category.css';

const Category = () => {
    const navigate = useNavigate();
    const exercise = '/exercise.png'
    const other = '/others.png'
    const rest = '/rest.png'
    const work = '/work.png'
    const backImage = '/back.png';

    
    const handleBackClick = () => {
        navigate(-1);
    };

    const navigateCategoryItem = (category) => {
        navigate(`/items/${category}`);
    }


    return(
        <div className='contents-section'>
            <p className='category-title'>카테고리 선택</p>
            <div className="back-img" style={{ backgroundImage: `url(${backImage})` }} onClick={() => handleBackClick()} ></div>
            <div className="horizontal-line"></div>
            <div className="vertical-line"></div>
            <div className='main-square'>
                <div className='div-top'>
                    <div className='div-top-left'>
                        <div className="exercise-img" style={{ backgroundImage: `url(${exercise})` }} onClick={() => navigateCategoryItem('Exercise')}></div>
                        <p className="exercise-word">운동</p>
                    </div>

                    <div className='div-top-right'>
                        <div className="rest-img" style={{ backgroundImage: `url(${rest})` }}  onClick={() => navigateCategoryItem('Leisure')}></div>
                        <p className="rest-word">여가</p>
                    </div>
                </div>
                <div className='div-bottom'>
                    <div className='div-bottom-left'>
                        <div className="work-img" style={{ backgroundImage: `url(${work})` }}  onClick={() => navigateCategoryItem('Work')}></div>
                        <p className="work-word">사무</p>
                    </div>

                    <div className='div-bottom-right'>
                        <div className="other-img" style={{ backgroundImage: `url(${other})` }} onClick={() => navigateCategoryItem('Etc')}></div>
                        <p className="other-word">기타</p>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default Category;