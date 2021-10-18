
import React, {useState} from 'react';
import {
    useRouteMatch
  } from "react-router-dom";


import './SellerPage.scss'
import Dashboard from '../dashboard/Dashboard';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import SoldListings from './seller_sections/SoldListings'
function SellerPage(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    let { path, url } = useRouteMatch();

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return(
    <Dashboard 
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
            <ListItemText className = {selectedIndex==0?"Vazaar-List-White":"Vazaar-List-Black"} primary="All Listings" />
            </ListItemButton>
            <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            >
            {/* <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon> */}
            <ListItemText className = {selectedIndex==1?"Vazaar-List-White":"Vazaar-List-Black"} primary="Sold Listings" />
            </ListItemButton>
            <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            >
            <ListItemText className = {selectedIndex==2?"Vazaar-List-White":"Vazaar-List-Black"} primary="Unsold Listings" />
            </ListItemButton>
            <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
            >
            <ListItemText className = {selectedIndex==3?"Vazaar-List-White":"Vazaar-List-Black"} primary="FAQ" />
            </ListItemButton>
        </List>
                    </div>
            }
            main = {
                <>
                    {
                    {  
                        0: <div></div>,
                        1: <SoldListings/>,
                    }[selectedIndex]
                    }
                </>
            }
            
            />
    );
}

export default SellerPage