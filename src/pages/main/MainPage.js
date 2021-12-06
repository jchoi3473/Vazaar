import React, {useState, useEffect, useRef} from 'react';
import './MainPage.scss'
import background from './../../assets/images/background.jpg'
import {authenticateUser} from './../../lib/api'
import { useHistory, withRouter} from "react-router-dom";

function MainPage(props) {
    const [userData, setUserData] = useState(); 
    const [signedIn, setSignedIn] = useState(false); 
    let history = useHistory();


    useEffect(() => {
        const fetchProducts = async() =>{
            if(localStorage.getItem('vazaar-jwt-token')){
                //need to call authenticate API in future
                console.log(localStorage.getItem('vazaar-jwt-token'))
                const result = await authenticateUser(localStorage.getItem('vazaar-jwt-token'))
                console.log(result)
                setUserData(JSON.parse(localStorage.getItem('vazaar-user')).data)
                setSignedIn(true)
                console.log(JSON.parse(localStorage.getItem('vazaar-user')).data)
            }
        }
        fetchProducts()
    },[])



    const onClickSignUp = () =>{
        history.push('sign-up')
    }
    const onClickSignIn = () =>{
        history.push('sign-in')
    }
    const onClickTeam = () =>{
        history.push('team')
    }
    const onClickLogo = () =>{
        history.push('main')
    }
    const onClickProfile = () =>{
        history.push('profile', {radio:0})
    }
    const onClickSell = () =>{
        if(signedIn){
            history.push('sell')
        }else{
            alert("You need to sign up to start selling!");
            history.push('sign-up')
        }
    }
    const onClickBuy = () =>{
        if(signedIn){
            history.push('buy')
        }else{
            alert("You need to sign up to start buying!");
            history.push('sign-up')
        }
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
                {
                signedIn?
                <div className = "Vazaar-Main-Signin-Container">
                    <div className = "Vazaar-Main-Signin" style = {{"fontFamily":"Roboto"}} onClick = {onClickTeam}>
                        Meet the Team
                    </div>
                    <div className = "Vazaar-Main-Signin" style = {{"fontFamily":"Roboto"}} onClick = {onClickProfile}>
                       {
                       userData.name
                       
                       }
                    </div>
                </div>:
                <div className = "Vazaar-Main-Signin-Container">
                    <div className = "Vazaar-Main-Signin" style = {{"fontFamily":"Roboto"}} onClick = {onClickTeam}>
                        Meet the Team
                    </div>
                    <div className = "Vazaar-Main-Signin" style = {{"fontFamily":"Roboto"}} onClick = {onClickSignIn}>
                        Login
                    </div>
                    <div className = "Vazaar-Main-Signin" style = {{"fontFamily":"Roboto"}}onClick = {onClickSignUp}>
                        Sign Up
                    </div>
                </div>
                }
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

export default withRouter(MainPage);
