import React, {useEffect, useState} from 'react';
import {
  useRouteMatch
} from "react-router-dom";

import Dashboard from '../dashboard/Dashboard';
import './ProfilePage.scss'
import ProfileButton from './ProfileButton';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Profile from './profile_sections/Profile';

import switch_page from './../../assets/images/switch.png'
import profile_icon from './../../assets/images/profile_icon.png'
import favorite_icon from './../../assets/images/favorite_icon.png'
import recently_viewed_icon from './../../assets/images/recently_viewed_icon.png'
import buy_icon from './../../assets/images/buy.jpeg'
import sell_icon from './../../assets/images/sell.png'
import RecentlyViewed from './RecentlyViewed';
import { useHistory } from "react-router-dom";
import FavoriteProfile from './FavoriteProfile';
function ProfilePage(props) {
    let history = useHistory();
    useEffect(() => {
        console.log(props.location.state)
    },[])    
    const [selectedIndex, setSelectedIndex] = React.useState(props.location.state.radio);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const onClickLogo = () =>{
        history.push('main')
    }

    const onClickBuy = () =>{
        history.push('buy')
    }

    const onClickSell = () =>{
        history.push('sell')
    }

    return(
        <Dashboard
        profile = {
            <ProfileButton/>
        }
        logo = {
            <div className = "Vazaar-Dashboard-Logo" onClick = {onClickLogo}>vazaar</div>
        }
        left = {
            <div>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    >
                    <img className="Vazaar-category-icon" src={profile_icon}/>
                    <div style = {{paddingRight: "10px" }}></div>
                    <ListItemText className = {selectedIndex==0?"Vazaar-List-White":"Vazaar-List-Black"} primary="Profile" />
                    </ListItemButton>
                    <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                    >
                    {/* <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon> */}
                    <img className="Vazaar-category-icon" src={favorite_icon}/>
                    <div style = {{paddingRight: "10px" }}></div>
                    <ListItemText className = {selectedIndex==1?"Vazaar-List-White":"Vazaar-List-Black"} primary="My Favorites" />
                    </ListItemButton>
                    <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    >
                    {/* <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon> */}
                    <img className="Vazaar-category-icon" src={recently_viewed_icon}/>
                    <div style = {{paddingRight: "10px" }}></div>
                    <ListItemText className = {selectedIndex==2?"Vazaar-List-White":"Vazaar-List-Black"} primary="Recently Viewed" />
                    </ListItemButton>


                    <div style = {{paddingBottom: "20px" }}></div>

                    <ListItemButton
                    selected={selectedIndex === 3}
                    onClick = {onClickBuy}
                    >
                    <img className="Vazaar-category-icon" src={buy_icon}/>
                    <div style = {{paddingRight: "10px" }}></div>
                    <ListItemText primary="Switch to Buy" />
                    </ListItemButton>


                    <ListItemButton
                    selected={selectedIndex === 4}
                    onClick = {onClickSell}
                    >
                    <img className="Vazaar-category-icon" src={sell_icon}/>
                    <div style = {{paddingRight: "10px" }}></div>
                    <ListItemText primary="Switch to Sell" />
                    </ListItemButton>

                </List>
            </div>
        }
        main = {
          <>
              {
              {  
                0:
                <div className = "Vazaar-Profile-Section-Container">
                    <Profile/>
                </div>,
                1:<FavoriteProfile/>,
                2: <RecentlyViewed/>

              }[selectedIndex]
              }
          </>
      }
      
      />
    );
}

export default ProfilePage