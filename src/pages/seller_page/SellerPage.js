
import React, {useState} from 'react';
import {
    useRouteMatch
  } from "react-router-dom";


import './SellerPage.scss'
import Dashboard from '../dashboard/Dashboard';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ProfileButton from '../profile/ProfileButton';

import SoldListings from './seller_sections/SoldListings'
import SellItem from './seller_sections/SellItem';
import FAQ from '../FAQ/FAQ'

function SellerPage(props) {
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
                    {/* <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon> */}
                    <ListItemText className = {selectedIndex==0?"Vazaar-List-White":"Vazaar-List-Black"} primary="Sell Item" />
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
                    <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                    ></ListItemButton>
                    </List>
                </div>
            }
            main = {
                <div className = "Vazaar-Seller-Section-Container">
                    {
                    {  
                        0: <SellItem/>,
                        1: <SoldListings/>,
                        3: <FAQ/>
                    }[selectedIndex]
                    }
                </div>
            }
            
            />
    );
}

export default SellerPage