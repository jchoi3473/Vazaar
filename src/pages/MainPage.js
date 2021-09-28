import React from 'react';
import './MainPage.scss'
import background from './../assets/images/background.jpg'

function MainPage() {
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
                <div className = "Vazaar-Main-Logo">
                    VAZAAR
                </div>

                <div className = "Vazaar-Main-Signin-Container">
                    <div className = "Vazaar-Main-Signin">
                        Login
                    </div>
                    <div className = "Vazaar-Main-Signin">
                        Sign Up
                    </div>
                </div>
            </div>
            <div className = "Vazaar-Main-Body">
                <div className = "Vazaar-Main-Body-Title">
                Turn your apartment into a home
                </div>
                <div className = "Vazaar-Main-Body-SecondTitle">
                Purchase/Sell your furnitures from/to your peers at Emory! 
                </div>
                <div className = "Vazaar-Main-Body-SecondTitle">
                We’ll provide everything you need to buy and sell, and send notifications of matched buyer/seller if you want.
                </div>
                <div className = "Vazaar-Main-Body-Button-Container">
                    <button className = "Vazaar-Main-Body-Button Vazaar-Buy-Button">
                        Start Buying
                    </button>
                    <button className = "Vazaar-Main-Body-Button Vazaar-Sell-Button">
                        Start Selling
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MainPage;
