import React, {useState} from 'react';
import './../../main/MainPage.scss'
import './../../authenticate/Authenticate.scss'
import './Profile.scss'

import { alpha, styled } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import BlueButton from '../../../components/button/BlueButton';
import { deleteUser } from '../../../lib/api';
import { useHistory } from "react-router-dom";


function DeleteConfirm(props) {
  let history = useHistory();

  const onClickDelete = async() =>{
    const res = await deleteUser();
    if(res ==="success"){
      localStorage.removeItem('vazaar-jwt-token')
      localStorage.removeItem('vazaar-user')
      history.push("/main");
    }
  }

  return (
    <div>
       
        <div >
            <div className = "Vazaar-Verify-Container">
                <div className = "Vazaar-Delete-Container">
                    <div className = "Vazaar-Main-Logo" style = {{"fontSize":"36px", "color":"#7D9EB5", "paddingTop":"25px"}}>
                        vazaar
                    </div>
                    <div className = "Vazaar-Roboto-bold" style = {{"fontSize":"30px", "marginTop":"10px"}}>
                        Delete Account
                    </div>
                    <div className = "Vazaar-Roboto-normal" style = {{"fontSize":"14px", "color":"#8DAABE", "marginTop":"40px"}}>
                      Are you sure you want to delete your account?
                    </div>
                    <div className = "Vazaar-Roboto-normal" style = {{"fontSize":"14px", "color":"#8DAABE"}}>
                      If you wish to restore account in future, contact Vazaar Team.
                    </div>
                    <div style = {{display: 'flex', marginTop:'15px', width: '280px', justifyContent:'space-between'}}>
                      <div onClick = {() => onClickDelete()}>
                          <BlueButton text="Delete Account" width="120px" height="35px" />
                      </div>
                      <div onClick = {() => props.handleClose()}>
                          <BlueButton text="Cancel" width="120px" height="35px"/>
                      </div>
                    </div>
                 
                </div>
              
            </div>

        </div>
    </div>
  );
}

export default DeleteConfirm;
