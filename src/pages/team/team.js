import React from 'react';
import './team.scss'
import team_background from './../../assets/images/team_background.png'
import team_icon from './../../assets/images/team_icon.png'

import isaac_pic from './../../assets/images/team_pics/isaac.png'


function Team(props) {
    
    const onClickSignUp = () =>{
        props.history.push('sign-up')
    }
    const onClickSignIn = () =>{
        props.history.push('sign-in')
    }
    const onClickTeam = () =>{
        props.history.push('team')
    }
    const onClickLogo = () =>{
        props.history.push('main')
    }

  return (
    <div style = {{backgroundImage:`url(${team_background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100%'}}>

        <div className = "Vazaar-Team-Background">

            <div className = "Vazaar-Team-Navigation">
                <div className = "Vazaar-Team-Logo" style = {{"fontSize":"48px", "position":"absolute", "top":"24px", "left":"50px", "color":"#FFFFFF"}} onClick = {onClickLogo}>
                    vazaar
                </div>

                <div className = "Vazaar-Team-Signin-Container">
                    <div className = "Vazaar-Main-Signin" style = {{"fontFamily":"Roboto"}} onClick = {onClickTeam}>
                        Meet the Team
                    </div>
                    <div className = "Vazaar-Team-Signin" style = {{"fontFamily":"Roboto"}} onClick = {onClickSignIn}>
                        Login
                    </div>
                    <div className = "Vazaar-Team-Signin" style = {{"fontFamily":"Roboto"}}onClick = {onClickSignUp}>
                        Sign Up
                    </div>
                </div>
            </div>

            <div className = "Vazaar-Team-Body">

                <div className = "Vazaar-Team-Profile-Entire-Container">

                    <div className = "Vazaar-Team-Profile-Row-Container">

                        <div className = "Vazaar-Team-Profile-Individual-Container">
                            <img className="Vazaar-Team-Icon" src={team_icon}/>
                            <div className = "Vazaar-Team-Description-Container">
                                <div className = "Vazaar-Team-Name-Text">Sunny Chung</div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">Email: </span> 
                                    <span class="Vazaar-Team-Description-Link">sunny.chung@emory.edu</span> 
                                </div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">LinkedIn: </span> 
                                    <span><a class="Vazaar-Team-Description-Link" style={{ textDecoration: 'none' }} href="https://google.com">Sunny Chung</a></span> 
                                </div>
                            </div> 
                        </div>

                        <div className = "Vazaar-Team-Profile-Individual-Container">
                            <img className="Vazaar-Team-Icon" src={team_icon}/>
                            <div className = "Vazaar-Team-Description-Container">
                                <div className = "Vazaar-Team-Name-Text">Jae Ho Choi</div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">Email: </span> 
                                    <span class="Vazaar-Team-Description-Link">jae.ho.choi@emory.edu</span> 
                                </div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">LinkedIn: </span> 
                                    <span><a class="Vazaar-Team-Description-Link" style={{ textDecoration: 'none' }} href="https://google.com">Jae Ho Choi</a></span> 
                                </div>
                            </div> 
                        </div>

                        <div className = "Vazaar-Team-Profile-Individual-Container">
                            <img className="Vazaar-Team-Icon" src={team_icon}/>
                            <div className = "Vazaar-Team-Description-Container">
                                <div className = "Vazaar-Team-Name-Text">Taeheon Kim</div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">Email: </span> 
                                    <span class="Vazaar-Team-Description-Link">taeheon.kim@emory.edu</span> 
                                </div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">LinkedIn: </span> 
                                    <span><a class="Vazaar-Team-Description-Link" style={{ textDecoration: 'none' }} href="https://google.com">Taeheon Kim</a></span> 
                                </div>
                            </div> 
                        </div>

                        <div className = "Vazaar-Team-Profile-Individual-Container">
                            <img className="Vazaar-Team-Icon" src={isaac_pic}/>
                            <div className = "Vazaar-Team-Description-Container">
                                <div className = "Vazaar-Team-Name-Text">Isaac Yoo</div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">Email: </span> 
                                    <span class="Vazaar-Team-Description-Link">isaac.yoo@emory.edu</span> 
                                </div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">LinkedIn: </span> 
                                    <span><a class="Vazaar-Team-Description-Link" style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/isaacsyoo/">Isaac Yoo</a></span> 
                                </div>
                            </div> 
                        </div>                                                

                    </div>



                    <div className = "Vazaar-Team-Profile-Row-Container">

                        <div className = "Vazaar-Team-Profile-Individual-Container">
                            <img className="Vazaar-Team-Icon" src={team_icon}/>
                            <div className = "Vazaar-Team-Description-Container">
                                <div className = "Vazaar-Team-Name-Text">Taeyeon Kim</div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">Email: </span> 
                                    <span class="Vazaar-Team-Description-Link">tae.yeon.kim@emory.edu</span> 
                                </div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">LinkedIn: </span> 
                                    <span><a class="Vazaar-Team-Description-Link" style={{ textDecoration: 'none' }} href="https://google.com">Taeyeon Kim</a></span> 
                                </div>
                            </div> 
                        </div>

                        <div className = "Vazaar-Team-Profile-Individual-Container">
                            <img className="Vazaar-Team-Icon" src={team_icon}/>
                            <div className = "Vazaar-Team-Description-Container">
                                <div className = "Vazaar-Team-Name-Text">Lis Dautaj</div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">Email: </span> 
                                    <span class="Vazaar-Team-Description-Link">ldautaj@emory.edu</span> 
                                </div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">LinkedIn: </span> 
                                    <span><a class="Vazaar-Team-Description-Link" style={{ textDecoration: 'none' }} href="https://google.com">Lis Dautaj</a></span> 
                                </div>
                            </div> 
                        </div>

                        <div className = "Vazaar-Team-Profile-Individual-Container">
                            <img className="Vazaar-Team-Icon" src={team_icon}/>
                            <div className = "Vazaar-Team-Description-Container">
                                <div className = "Vazaar-Team-Name-Text">Dheep Dalamal</div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">Email: </span> 
                                    <span class="Vazaar-Team-Description-Link">dheep.dalamal@emory.edu</span> 
                                </div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">LinkedIn: </span> 
                                    <span><a class="Vazaar-Team-Description-Link" style={{ textDecoration: 'none' }} href="https://google.com">Dheep Dalamal</a></span> 
                                </div>
                            </div> 
                        </div>   


                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Team;
