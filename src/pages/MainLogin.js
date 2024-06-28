import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { URL_VARIABLE } from "./export/ExportUrl"; 
import './css/Main.css'

const MainLogin = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        password: '',
      });
    const backImage = '/back.png';


    const handleBackClick = () => {
            navigate('/');
        };

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
          ...userData,
          [name]: value
        });
      };

    const handleLogin = async () => { 
    try {
      await axios.post( URL_VARIABLE + 'users/login', userData);
      navigate('/category')
    } catch (error) {
      alert("입력하신 정보를 다시 확인하여 주세요");
    }
  };
  
    return(
        <div className='contents-section'>
            <div className='main-square'>
            <div className="back-img" style={{ backgroundImage: `url(${backImage})` }} onClick={() => handleBackClick()} ></div>
                <p className='login-title'>로그인</p>
            <Form className='login-form-group'>
        <Form.Group className="login-form" controlId="formBasicId">
        <Form.Label className='login-text'>아이디</Form.Label>
        <Form.Control 
            className='login-input'
          type="text"   
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder="" /> 
      </Form.Group>

      <Form.Group className="login-form" controlId="formBasicPassword">
        <Form.Label className='login-text-password'>비밀번호</Form.Label>
        <Form.Control 
          className='login-input'
        type="password"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
        placeholder="" />
      </Form.Group>

      <Button variant="primary" onClick={handleLogin} className='login-request-button'>
        <span className='login-request-word'>로그인</span>
      </Button>
    </Form>
    <Link to={`/signup`}> <p className='login-signup'>계정 만들기</p></Link>
   
            </div>
        </div>
    );
};

export default MainLogin;