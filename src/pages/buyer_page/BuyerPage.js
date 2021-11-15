
import React, {useState} from 'react';
import {
    useRouteMatch
  } from "react-router-dom";


import './BuyerPage.scss'
import Dashboard from '../dashboard/Dashboard';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ProfileButton from '../profile/ProfileButton';
import BrowseAllListings from './buyer_sections/BrowseAllListings'
import SellItem from './buyer_sections/SellItem';
import HomePage from './buyer_sections/HomePage'
function BuyerPage(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
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
            {/* <ListItemIcon>
                <InboxIcon />
            </ListItemIcon> */}
            <ListItemText className = {selectedIndex==0?"Vazaar-List-White":"Vazaar-List-Black"} primary="Home Page" />
            </ListItemButton>
            <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            >
            {/* <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon> */}
            <ListItemText className = {selectedIndex==1?"Vazaar-List-White":"Vazaar-List-Black"} primary="Browse All" />
            </ListItemButton>
            <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            >
            <ListItemText className = {selectedIndex==2?"Vazaar-List-White":"Vazaar-List-Black"} primary="Living Room" />
            </ListItemButton>
            <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
            >
            <ListItemText className = {selectedIndex==3?"Vazaar-List-White":"Vazaar-List-Black"} primary="Kitchen" />
            </ListItemButton>
            <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
            >
            <ListItemText className = {selectedIndex==4?"Vazaar-List-White":"Vazaar-List-Black"} primary="Bedroom" />
            </ListItemButton>
            <ListItemButton
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
            >
            <ListItemText className = {selectedIndex==5?"Vazaar-List-White":"Vazaar-List-Black"} primary="FAQ" />
            </ListItemButton>
        </List>
                    </div>
            }
            main = {
                <div className = "Vazaar-Seller-Section-Container">
                    {
                    {  
                        0: <HomePage/>,
                        1: <BrowseAllListings/>,
                    }[selectedIndex]
                    }
                </div>
            }
            
            />
    );
}

export default BuyerPage