import React, {useState} from 'react';
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

function ProfilePage(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    let { path, url } = useRouteMatch();

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return(
        <Dashboard
        profile = {
            <ProfileButton/>
        }
        left = {
            <div>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    >
                    <ListItemText className = {selectedIndex==0?"Vazaar-List-White":"Vazaar-List-Black"} primary="Profile" />
                    </ListItemButton>
                    <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                    >
                    {/* <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon> */}
                    <ListItemText className = {selectedIndex==1?"Vazaar-List-White":"Vazaar-List-Black"} primary="My Favorite" />
                    </ListItemButton>
                    <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    >
                    {/* <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon> */}
                    <ListItemText className = {selectedIndex==2?"Vazaar-List-White":"Vazaar-List-Black"} primary="Recently Viewed" />
                    </ListItemButton>
                </List>
            </div>
        }
        main = {
          <div className = "Vazaar-Profile-Section-Container">
              {
              {  
                  0: <Profile/>
              }[selectedIndex]
              }
          </div>
      }
      
      />
    );
}

export default ProfilePage