import React from 'react'
import './css/Login.css';
function Form(){
    return(
        <div className="login-form">
            <div className="login-form__box">
                <input className="login-form__input" type="text" name="username" placeholder="아이디"/>
                <label className="login-form__label">아이디</label>
            </div>
            <div className="login-form__box">
                <input className="login-form__input" type="password" name="password" placeholder="비밀번호"/>
                <label className="login-form__label">비밀번호</label>
            </div>
        </div>
    )
}
function Login(){
    let main = {
        padding:'10px',
        boxSizing : 'border-box'
        
    }
    return (
        <div style={main}>
        <header>
            <h2>Login</h2>
        </header>
        <Form />
        <input className="login-btn" type="submit" value="로그인"/>
        </div>
    )
}

export default Login;