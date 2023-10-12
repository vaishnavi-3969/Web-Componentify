import React from 'react';
import {useNavigate} from 'react-router-dom';
import './BottomNavBar.css';
const BottomNav = (props) => {
    const navigate= useNavigate();
    const backUrl=props.backUrl;
    const nextUrl=props.nextUrl;
    const backname=props.backName;
    const nextname=props.nextName;
    function Func1(){
        navigate(backUrl);
    }
    function Func2(){
            navigate(nextUrl)
    }
    if(backUrl ==' ' )
        return(
            <div className='bottomNav'>
                <div style={{width:'34px',height:'40px',padding:'6px 16px'}}></div>
                <button className='bottomNavItem2' onClick={Func2}>{nextname}</button>
            </div>
            )
    if(nextUrl ==' ')
            return(
                <div className='bottomNav'>
                    <button className='bottomNavItem1' onClick={Func1}>{backname}</button>
                    <div style={{width:'34px',height:'40px',padding:'6px 16px'}}></div>
                </div>
                )
  return (
    <div className='bottomNav'>
            <button className='bottomNavItem1' onClick={Func1}>{backname}</button>
            <button className='bottomNavItem2' onClick={Func2}>{nextname}</button>
    </div>
  )
}

export default BottomNav