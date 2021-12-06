import React, {useState} from 'react';
import './../main/MainPage.scss'
import './Authenticate.scss'
import background from './../../assets/images/background.jpg'

import { alpha, styled } from '@mui/material/styles';
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";
import InputBase from '@mui/material/InputBase';
import BlueButton from '../../components/button/BlueButton';
import { useEffect } from 'react';
import {resetPasswordAPI} from './../../lib/api'

//Custom Material UI input
const FormInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    'display':"block",
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 14,
      width: '393px',
      height: '18px',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        'Roboto',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ResetPasswordField(props) {
    let query = useQuery();

    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const onClickSignUp = () =>{
    //     props.history.push('signup')
    // }
    const onClickLogo = () =>{
        props.history.push('main')
    }


  const onChangeToken =(e) =>{
    setToken(e.target.value)
  }
  const onChangeNewPassword =(e) =>{
    setNewPassword(e.target.value)
  }
  const onChangeConfirmPassword =(e) =>{
    setConfirmPassword(e.target.value)
  }
  
  const onClickSubmit = async() =>{
    const res = await resetPasswordAPI(token, {
      password: newPassword,
      passwordConfirm: confirmPassword
    })
    if(res==="success"){
      alert("Password reset successful. Please log in with new password.")
      props.history.push('sign-in')
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
        <div className = "Vazaar-Main-Navigation">
            <div className = "Vazaar-Main-Logo" style = {{"fontSize":"48px", "position":"absolute", "top":"24px", "left":"50px", "color":"#FFFFFF"}} onClick = {onClickLogo}>
                vazaar
            </div>
        </div>
        <div className = "Vazaar-Main-Background">
            <div className = "Vazaar-ResetField-Container">
                <div className = "Vazaar-SignUp-Header-Container">
                    <div className = "Vazaar-Main-Logo" style = {{"fontSize":"36px", "color":"#7D9EB5", "paddingTop":"25px"}}>
                        vazaar
                    </div>
                    <div className = "Vazaar-Roboto-bold" style = {{"fontSize":"30px", "marginTop":"10px"}}>
                        New Password
                    </div>
                    <div className = "Vazaar-Roboto-normal" style = {{"fontSize":"14px", "color":"#8DAABE", "marginTop":"20px"}}>
                        Please input the token from your email
                    </div>
                </div>
                <div className = "Vazaar-Reset-Form-Container">
                <div className = "Vazaar-SignUp-Form-SubContainer">
                        <div className = "Vazaar-SignUp-Form-SecondTitle">
                            TOKEN
                        </div>
                        <FormInput value = {token} onChange = {(e)=>onChangeToken(e)} placeholder = "Enter Token" />
                    </div>      
                    <div className = "Vazaar-SignUp-Form-SubContainer">
                        <div className = "Vazaar-SignUp-Form-SecondTitle" style = {{"marginTop":"20px"}}>
                            NEW PASSWORD
                        </div>
                        <FormInput type='password' value = {newPassword} onChange = {(e)=>onChangeNewPassword(e)} placeholder = "Enter New Password" />
                    </div>        
                    <div className = "Vazaar-SignUp-Form-SubContainer">
                        <div className = "Vazaar-SignUp-Form-SecondTitle"  style = {{"marginTop":"20px"}}>
                            CONFIRM NEW PASSWORD
                        </div>
                        <FormInput type='password' value = {confirmPassword} onChange = {(e)=>onChangeConfirmPassword(e)} placeholder = "Re-enter New Password" />
                    </div>                                
                </div>
                <div className = "Vazaar-SignUp-Button-Container" style ={{"marginTop":"24px"}} onClick ={()=>onClickSubmit()}>
                    <BlueButton text = "Submit" width = "417px" height = "47px"/>
                </div>
            </div>

        </div>
    </div>
  );
}

export default ResetPasswordField;
