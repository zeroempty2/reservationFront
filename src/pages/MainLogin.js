import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { URL_VARIABLE } from "./export/ExportUrl"; 
import './css/Main.css'

const MainLogin = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
          ...userData,
          [name]: value
        });
      };

    const handleLogin = async () => { 
    console.log(userData)
    try {
      const response = await axios.post( URL_VARIABLE + 'users/signUp', userData);
      window.location.href = '/'; 
    } catch (error) {
      alert("입력하신 정보를 다시 확인하여 주세요");
    }
  };
  
    return(
        <div className='contents-section'>
            <div className='main-square'>
                <p className='login-title'>로그인</p>
            <Form>
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
        로그인
      </Button>
    </Form>
            </div>
        </div>
    );
};

export default MainLogin;