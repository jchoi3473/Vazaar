import React, {useState,useEffect} from 'react';
import Dashboard from '../dashboard/Dashboard';
import './ProfilePage.scss'
import Avatar from '@mui/material/Avatar';
import {withRouter} from "react-router-dom"
import {signOut} from './../../lib/api'

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  var children;
  console.log(name.split(' '))
  if (name.split(' ').length>1){
    children = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
  }else{
    children = `${name.split(' ')[0][0]}`
  }
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: children,
  };
}

function ProfileButton(props) {
  const onClickProfile = () => {
    props.history.push("/profile");
  };
  const onClickLogOut = () =>{
    signOut()
    localStorage.removeItem('vazaar-jwt-token')
    localStorage.removeItem('vazaar-user')
    props.history.push("/main");
  }
    return(
      <div className = "Vazaar-Profile-Container">
      {            JSON.parse(localStorage.getItem('vazaar-user'))?
            <>
            <div className = "Vazaar-Profile-subContainer">
              <Avatar {...stringAvatar(JSON.parse(localStorage.getItem('vazaar-user')).data.name)} />
              <div className = "Vazaar-Profile-Name" style = {{marginLeft:"15px", display:'flex', alignItems:'center'}} >
                  {JSON.parse(localStorage.getItem('vazaar-user')).data.name}
              </div>
            </div>
            <div className = "Vazaar-Profile-subMenu">
              <div className = "Vazaar-Profile-subMenu-Entity" onClick = {onClickProfile}>
                Profile
              </div>
              <div className = "Vazaar-Profile-subMenu-Entity" onClick = {onClickLogOut}>
                Log Out
              </div>
            </div>
            </>:
            <></>
      }
        </div>
    );
}
export default  withRouter(ProfileButton);
