import React from 'react';
import './MainPage.scss'
import background from './../../assets/images/background.jpg'

function MainPage(props) {
    
    const onClickSignUp = () =>{
        props.history.push('sign-up')
    }
    const onClickSignIn = () =>{
        props.history.push('sign-in')
    }
    const onClickLogo = () =>{
        props.history.push('main')
    }
    const onClickSell = () =>{
        props.history.push('sell')
    }
    const onClickBuy = () =>{
        props.history.push('buy')
    }
  return (
    <div 
    style = 
    {{backgroundImage:`url(${background})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%'}}>
        <div className = "Vazaar-Main-Background">
            <div className = "Vazaar-Main-Navigation">
                <div className = "Vazaar-Main-Logo" style = {{"fontSize":"48px", "position":"absolute", "top":"24px", "left":"50px", "color":"#FFFFFF"}} onClick = {onClickLogo}>
                    vazaar
                </div>

                <div className = "Vazaar-Main-Signin-Container">
                    <div className = "Vazaar-Main-Signin" style = {{"fontFamily":"Roboto"}} onClick = {onClickSignIn}>
                        Login
                    </div>
                    <div className = "Vazaar-Main-Signin" style = {{"fontFamily":"Roboto"}}onClick = {onClickSignUp}>
                        Sign Up
                    </div>
                </div>
            </div>
            <div className = "Vazaar-Main-Body">

                <div className = "Vazaar-Main-Body-Title">
                Buy and sell furniture
                </div>
                <div className = "Vazaar-Main-Body-Title">
                from and to your college peers! 
                </div>

                <div style = {{"marginTop":"40px"}}>
                    <div className = "Vazaar-Main-Body-SecondTitle">
                    Vazaar provides everything you need to buy and sell,
                    </div>
                    <div className = "Vazaar-Main-Body-SecondTitle">
                    and sends notifications of matched buyers/sellers if desired.
                    </div>
                </div>

                <div style = {{"marginTop":"50px"}}>
                    <div className = "Vazaar-Main-Body-Button-Container">
                        <button className = "Vazaar-Main-Body-Button Vazaar-Buy-Button" onClick = {onClickBuy}>
                            Start Buying
                        </button>
                        <button className = "Vazaar-Main-Body-Button Vazaar-Sell-Button" onClick = {onClickSell}>
                            Start Selling
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default MainPage;
