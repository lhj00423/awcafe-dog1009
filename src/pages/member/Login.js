import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div id='background5'>
            <div id='login'>
                <h2>로그인</h2>
                <div className='login'>
                    <p className='welcome'><span>Welcome!</span> AW KOREA에 오신 것을 환영합니다.</p>
                    <input type="text" className='id' placeholder='아이디를 입력해 주세요.'/>
                    <input type="password"  className='password' placeholder='비밀번호를 입력해 주세요.'/>
                    <p className='idcheck'>
                        <input type="checkbox" className='checkbox'/>
                        <p>아이디 저장</p>
                    </p>
                    <p className='login1'>로그인</p>
                    <p className='logintext'>
                        * 타 사이트와 비밀번호를 동일하게 사용할 경우 도용의 위험이 있으므로, 정기적인 비밀번호 변경을 해주시길 바랍니다.<br/>
                        * AW KOREA의 공식 홈페이지는 Internet Explorer 9.0 이상, Chrome, Firefox, Safari 브라우저에 최적화 되어있습니다.
                    </p>
                    <ul>
                        <li><Link to ='/join'>회원가입</Link></li>
                        <li>아이디 찾기</li>
                        <li>비밀번호 찾기</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Login;