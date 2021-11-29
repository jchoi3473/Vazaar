import React from 'react';
import './error404.scss'
import background from './../../assets/images/error404.JPG'

function MainPage(props) {
    
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
        <div className = "Vazaar-Error-Background">
            <div className = "Vazaar-Error-Logo" style = {{"fontSize":"48px", "position":"absolute", "top":"24px", "left":"50px", "color":"#FFFFFF"}} onClick = {onClickLogo}>
                vazaar
            </div>

            <div className = "Vazaar-Error-Body">
                <div className = "Vazaar-Error-Body-Title">
                Error 404: Oops!
                </div>
                <div className = "Vazaar-Error-Body-Title">
                Looks like there's nothing here.
                </div>


                <div style = {{"marginTop":"30px"}}>
                    <div className = "Vazaar-Error-Body-SecondTitle">
                    The page you are looking for does not exist or may have been removed.
                    </div>
                </div>
                <div className = "Vazaar-Error-Body-Button-Container">
                    <button className = "Vazaar-Error-Body-Button Vazaar-Buy-Button" onClick = {onClickBuy}>
                        Back to Buy
                    </button>
                    <button className = "Vazaar-Error-Body-Button Vazaar-Sell-Button" onClick = {onClickSell}>
                        Back to Sell
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MainPage;
