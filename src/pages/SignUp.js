import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL_VARIABLE } from "./export/ExportUrl"; 
import './css/SignUp.css'

const Signup = () => {
  const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        nickName:'',
        phoneNumber:'',
        email:''
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
          ...userData,
          [name]: value
        });
      };

    const handleBackClick = () => {
        navigate('/'); 
}

    const handleSignup = async () => { 
    console.log(userData)
    try {
     await axios.post( URL_VARIABLE + 'users/signUp', userData);
     navigate('/'); 
    } catch (error) {
      alert("입력하신 정보를 다시 확인하여 주세요");
    }
  };
  
  return (

    <div className='contents-section'>
        <div className="back-img" style={{ backgroundImage: `url('/back.png')` }} onClick={() => handleBackClick()} ></div>
        <div className='main-square'>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label className='signUpText'>아이디</Form.Label>
        <Form.Control 
          type="text"   
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder="아이디를 입력해 주세요" />
        <Form.Text className='signUpText'>
         아이디는 영대소문자와 숫자, 4자에서 12자까지 사용 가능합니다.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='signUpText'>비밀번호</Form.Label>
        <Form.Control 
        type="password"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
        placeholder="Password" />
        <Form.Text className='signUpText'>
         비밀번호는 반드시 영대소문자와 숫자가 포함되어야 하며, 4자에서 15자까지 사용가능합니다.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNickName">
        <Form.Label className='signUpText' >닉네임</Form.Label>
        <Form.Control 
        type="text" 
        name="nickName"
        value={userData.nickName}
        onChange={handleInputChange}
        placeholder="닉네임을 입력해 주세요" />
        <Form.Text className='signUpText'>
        닉네임은 영대소문자와 숫자, 4자에서 12자까지 사용 가능합니다.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='signUpText'>전화번호(선택)</Form.Label>
        <Form.Control 
        type="number"
        name="phoneNumber"
        value={userData.phoneNumber}
        onChange={handleInputChange}
        inputMode="numeric"
        placeholder="전화번호를 입력해 주세요"
        className="no-arrows"
         />
        <Form.Text className='signUpText'>
          -를 제외하고 입력해주세요
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='signUpText'>이메일</Form.Label>
        <Form.Control 
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="이메일을 입력해 주세요"
         />
        <Form.Text className='signUpText'>
        </Form.Text>
      </Form.Group>
     
{/* 
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" onClick={handleSignup} className='signUpButton'>
        회원가입
      </Button>
    </Form>
        </div>

 
    </div>
   
  );
}

export default Signup;