import React, {useState,useEffect} from 'react';
import Dashboard from '../dashboard/Dashboard';
import './ProfilePage.scss'
import Avatar from '@mui/material/Avatar';
import {signOut} from './../../lib/api'
import { useHistory, withRouter} from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { SvgIcon } from '@mui/material';

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
  let history = useHistory();

  const onClickSignIn = () => {
    history.push('/profile', {radio:0});
  };
  const onClickFavorite = () =>{
    history.push('/profile', {radio:1});
  }
  const onClickLogOut = () =>{
    signOut()
    localStorage.removeItem('vazaar-jwt-token')
    localStorage.removeItem('vazaar-user')
    history.push("/main", {radio:0});
  }
    return(
      <div style = {{display:"flex", alignContent:'center'}}>
      <SvgIcon component={FavoriteBorderIcon} onClick = {()=>onClickFavorite()} style = {{color: '#E9545D', fontSize: '40px', marginRight:'15px', height:'100%', cursor: 'pointer'}} />
      <div className = "Vazaar-Profile-Container">
      {            JSON.parse(localStorage.getItem('vazaar-user'))?
            <>
            <div className = "Vazaar-Profile-subContainer">
            {/* <SvgIcon  className = "Vazaar-Heart" component={FavoriteIcon} style = {{color: '#E9545D', fontSize: '55px'}} /> */}
              <Avatar {...stringAvatar(JSON.parse(localStorage.getItem('vazaar-user')).data.name)} />
              <div className = "Vazaar-Profile-Name" style = {{marginLeft:"15px", display:'flex', alignItems:'center'}} >
                  {JSON.parse(localStorage.getItem('vazaar-user')).data.name}
              </div>
            </div>
            <div className = "Vazaar-Profile-subMenu">
              <div className = "Vazaar-Profile-subMenu-Entity" onClick = {onClickSignIn}>
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
        </div>
    );
}
export default  withRouter(ProfileButton);
