import React, {useState} from 'react';
import './../../main/MainPage.scss'
import './../../authenticate/Authenticate.scss'


import { alpha, styled } from '@mui/material/styles';
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";
import InputBase from '@mui/material/InputBase';
import BlueButton from '../../../components/button/BlueButton';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import {resetPasswordProfile, signOut} from './../../../lib/api'
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

function ResetPasswordProfile(props) {
  let history = useHistory();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [warning, setWarning] = useState('');

  const onChangeCurrent = (e) => setCurrentPassword(e.target.value);
  const onChangeNew = (e) => setNewPassword(e.target.value);
  const onChangeConfirm = (e) => setConfirmNewPassword(e.target.value);

  const onClickSubmit =async()=>{
    if(confirmNewPassword!==newPassword){
      setWarning("New Password and Confirm Password do not match.");
      return;
    }
    const res = await resetPasswordProfile(currentPassword, newPassword, confirmNewPassword);
    if(res ==="success"){
      signOut()
      localStorage.removeItem('vazaar-jwt-token')
      localStorage.removeItem('vazaar-user')
      history.push("/main");
    }
  }


  return (
    <div >
        <div>
            <div className = "Vazaar-ResetField-Container" style = {{display: 'flex', flexDirection:'column', alignItems:'center', height:'520px'}}>
                <div className = "Vazaar-SignUp-Header-Container" style = {{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                    <div className = "Vazaar-Main-Logo" style = {{"fontSize":"36px", "color":"#7D9EB5", "paddingTop":"25px"}}>
                        vazaar
                    </div>
                    <div className = "Vazaar-Roboto-bold" style = {{"fontSize":"30px", "marginTop":"10px"}}>
                        Reset Password
                    </div>
                    <div className = "Vazaar-Roboto-normal" style = {{"fontSize":"14px", "color":"#8DAABE", "marginTop":"20px"}}>
                        Change your current password
                    </div>
                    <div className = "Vazaar-Roboto-normal" style = {{"fontSize":"12px", "color":"red", "marginTop":"5px"}}>
                        {warning}
                    </div>
                </div>
                <div className = "Vazaar-Reset-Form-Container">
                    <div className = "Vazaar-SignUp-Form-SubContainer">
                        <div className = "Vazaar-SignUp-Form-SecondTitle">
                            CURRENT PASSWORD
                        </div>
                        <FormInput type ="password" value = {currentPassword} onChange ={(e) => onChangeCurrent(e)} placeholder = "Enter Current Password" />
                    </div>        
                    <div className = "Vazaar-SignUp-Form-SubContainer">
                        <div className = "Vazaar-SignUp-Form-SecondTitle"  style = {{"marginTop":"20px"}}>
                        NEW PASSWORD
                        </div>
                        <FormInput type ="password" value = {newPassword} onChange ={(e) => onChangeNew(e)} placeholder = "Enter New Password" />
                    </div>        
                    <div className = "Vazaar-SignUp-Form-SubContainer" style = {{"marginTop":"5px"}}>
                        <div className = "Vazaar-SignUp-Form-SecondTitle">
                            CONFIRM NEW PASSWORD
                        </div>
                        <FormInput type ="password" value = {confirmNewPassword} onChange ={(e) => onChangeConfirm(e)} placeholder = "Re-Enter New Password" />
                    </div>        
                                            
                </div>
                <div className = "Vazaar-SignUp-Button-Container" style ={{"marginTop":"24px"}} onClick = {() => onClickSubmit()}>
                    <BlueButton text = "Submit" width = "417px" height = "47px"/>
                </div>
            </div>

        </div>
    </div>
  );
}

export default ResetPasswordProfile;
