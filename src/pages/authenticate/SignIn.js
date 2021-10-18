import React, {useState} from 'react';
import './../main/MainPage.scss'
import './Authenticate.scss'
import background from './../../assets/images/background.jpg'

import { alpha, styled } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import BlueButton from '../../components/button/BlueButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

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

function SignIn(props) {
    const [state, setState] = useState('Alabama');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const onClickSignUp = () =>{
        props.history.push('sign-up')
    }
    const onClickForgotPassword = () =>{
        props.history.push('forgot-password')
    }
    const onClickLogo = () =>{
        props.history.push('main')
    }
    const onChangeEmail = (e) =>{
        setEmail(e.target.value);
    }
    const onChangePassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleClickShowPassword = () => {
        
        setShowPassword(!showPassword)
      };
    
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
            <div className = "Vazaar-SignIn-Container">
                <div className = "Vazaar-SignUp-Header-Container">
                    <div className = "Vazaar-Main-Logo" style = {{"fontSize":"36px", "color":"#7D9EB5", "paddingTop":"25px"}}>
                        vazaar
                    </div>
                    <div className = "Vazaar-Roboto-bold" style = {{"fontSize":"30px", "marginTop":"10px"}}>
                        Sign In
                    </div>
                    <div className = "Vazaar-Roboto-normal" style = {{"fontSize":"14px", "color":"#8DAABE", "marginTop":"20px"}}>
                        Log in to your account to continue
                    </div>
                </div>
                <div className = "Vazaar-SignIn-Form-Container">
                    <div className = "Vazaar-SignUp-Form-SubContainer">
                        <div className = "Vazaar-SignUp-Form-SecondTitle">
                            EMAIL
                        </div>
                        <FormInput placeholder = "Enter Email" value = {email} onChange={e => onChangeEmail(e)}/>
                        {
                            console.log(email)
                        }
                    </div>
                    <div className = "Vazaar-SignUp-Form-SubContainer">
                        <div style = {{"display":"flex", "justify-content":"space-between"}}>
                            <div className = "Vazaar-SignUp-Form-SecondTitle" style = {{"display":"inline-block"}}>
                                PASSWORD
                            </div>
                            <div className = "Vazaar-SignUp-Form-SecondTitle" style = {{"display":"inline-block", "color":"#11A1FD", "cursor":"pointer"}} onClick = {onClickForgotPassword}>
                                Forgot Password?
                            </div>
                        </div>
                        <FormInput placeholder = "Enter Password" value = {password} onChange={e => onChangePassword(e)}
                         endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }/>
                    </div>
                    
                </div>
                <div className = "Vazaar-SignUp-Button-Container" style ={{"marginTop":"30px"}}>
                    <BlueButton text = "Log in" width = "417px" height = "47px"/>
                    <div style ={{"marginTop":"28px"}}>
                        <div className = "Vazaar-SignUp-Form-SecondTitle" style = {{"display":"inline-block", "fontSize":"14px"}}>
                            Don't have an account?
                        </div>
                        <div className = "Vazaar-Roboto-normal" style = {{"display":"inline-block", "fontSize":"14px", "color":"#11A1FD", "cursor":"pointer", "marginLeft":"5px"}} onClick ={onClickSignUp}>
                            Sign Up
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default SignIn;
