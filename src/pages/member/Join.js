import React from 'react';
import './Join.css'

const Join = () => {
    return (
        <div id='Join'>
            <p id='Joinheader'>회원가입</p>
            <form>
            <div id='Jointop'>
                <div id='Joinimg'>
                    <img src='images/awcafe.png' alt=''/>
                    <p>회원정보를 입력해 주세요.</p>
                </div>
                <div id='Jointopinput'>
                    <input type='text' placeholder='아아디'/>
                </div>
                <div id='Jointopinput'>
                    <input type='password' placeholder='비밀번호'/>
                </div>
                <div id='Jointopinput'>
                    <input type='password' placeholder='비밀번호확인'/>
                </div>
            </div>
            <div id='Joinbotton'>
                <div id='Joinname'>
                    <p>이름<label>(필수)</label></p>
                    <input type='text' placeholder='이름'/>
                </div>
                <div id='Jointopinput' className='Joinnickname'>
                    <p>별명<label>(필수)</label></p>
                    <input type='text' placeholder='Nickname'/>
                </div>
                <div id='Jointopinput' className='Joinbd'>
                    <p>생년월일<label>(필수)</label></p>
                    <div id='bd'>
                        <select id='year'>
                            <option>1996년</option>
                            <option>1997년</option>
                            <option>1998년</option>
                            <option>1999년</option>
                            <option>2000년</option>
                            <option>2001년</option>
                            <option>2002년</option>
                            <option>2003년</option>
                            <option>2004년</option>
                            <option>2005년</option>
                            <option>2006년</option>
                            <option>2007년</option>
                        </select>
                        <select id='month'>
                            <option>1월</option>
                            <option>2월</option>
                            <option>3월</option>
                            <option>4월</option>
                            <option>5월</option>
                            <option>6월</option>
                            <option>7월</option>
                            <option>8월</option>
                            <option>9월</option>
                            <option>10월</option>
                            <option>11월</option>
                            <option>12월</option>
                        </select>
                        <select id='day'>
                            <option>1일</option>
                            <option>2일</option>
                            <option>3일</option>
                            <option>4일</option>
                            <option>5일</option>
                            <option>6일</option>
                            <option>7일</option>
                            <option>8일</option>
                            <option>9일</option>
                            <option>10일</option>
                            <option>11일</option>
                            <option>12일</option>
                        </select>
                        <select id='yny'>
                            <option>양</option>
                            <option>음</option>
                        </select>
                    </div>
                    <span>회원가입완료후AW카드를등록하시면생일무료음료쿠폰이발생됩니다.</span>
                </div>
                <div id='Jointopinput' className='phone'>
                    <div>
                        <p>휴대폰번호<label>(필수)</label></p>
                        <input className='phoneinput' type='text' placeholder='휴대폰번호'/>
                    </div>
                    <input type='checkbox'/>
                    <span>SMS를통한이벤트및신규매장정보수신에동의합니다.[선택]</span>
                </div>
                <div id='Jointopinput'className='email'>
                    <div>
                        <p>메일<label>(필수)</label></p>
                        <input className='emailinput' type='text' placeholder='E-mail을 입력하세요.'/>
                    </div>
                    <input type='checkbox'/>
                    <span>이메일을통한이벤트및신규매장정보수신에동의합니다.[선택]</span>
                </div>
            </div>
            <button id='Joinfooter'>가입하기</button>
            </form>
        </div>

    );
};

export default Join;