import React, {useState} from 'react';
import Dashboard from '../dashboard/Dashboard';
import './Profile.scss'
import Avatar from '@mui/material/Avatar';
import ProfileButton from './ProfileButton';
import { alpha, styled } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
const FormInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    display: "block",
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      border: "1px solid #ced4da",
      fontSize: 14,
    //   width: "393px",
      height: "18px",
      padding: "10px 12px",
      width: "60%",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: ["Roboto"].join(","),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  
  const FormTextField = styled(TextField)(({ theme }) => ({
    width: "100%",
    "label + &": {
      marginTop: theme.spacing(3),
    },
    display: "block",
    width: "100%",
    "& .MuiOutlinedInput-root":{
        width: "100%",

    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    //   border: "1px solid #ced4da",
      fontSize: 14,
      maxWidth: "373px",
      width: "100%",
      height: "18px",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: ["Roboto"].join(","),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

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
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function Profile(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
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
                    <div style = {{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <Avatar className = "Vazaar-Avatar" {...stringAvatar('Jae Ho Choi')} />
                        <div className = "Vazaar-Profile-Name" style = {{fontSize:"20px", marginTop:"15px"}}>
                            Jae Ho Choi
                        </div>
                    </div>
                <div style = {{width: "50%", height:"60%", display: "flex", justifyContent:"space-evenly", flexDirection:"column"}}>
                    <div>
                        <div className="Vazaar-SellItem-Form-SecondTitle">EMAIL</div>
                        <FormInput
                            // value={name}
                            // onChange={(e) => onChangeName(e)}
                        />
                    </div>    
                    <div>
                        <div className="Vazaar-SellItem-Form-SecondTitle">EMAIL</div>
                        <FormInput
                            // value={name}
                            // onChange={(e) => onChangeName(e)}
                        />
                    </div>    
                    <div>
                        <div className="Vazaar-SellItem-Form-SecondTitle">EMAIL</div>
                        <FormInput
                            // value={name}
                            // onChange={(e) => onChangeName(e)}
                        />
                    </div>    
                    <div>
                        <div className="Vazaar-SellItem-Form-SecondTitle">EMAIL</div>
                        <FormInput
                            // value={name}
                            // onChange={(e) => onChangeName(e)}
                        />
                    </div>    
                    <div>
                        <div className="Vazaar-SellItem-Form-SecondTitle">EMAIL</div>
                        <FormInput
                            // value={name}
                            // onChange={(e) => onChangeName(e)}
                        />
                    </div>    
                    <div>
                        <div className="Vazaar-SellItem-Form-SecondTitle">EMAIL</div>
                        <FormInput
                            // value={name}
                            // onChange={(e) => onChangeName(e)}
                        />
                    </div>    
                    <div>
                        <div className="Vazaar-SellItem-Form-SecondTitle">EMAIL</div>
                        <FormInput
                            // value={name}
                            // onChange={(e) => onChangeName(e)}
                        />
                    </div>    
                </div>
                
                
                </div>
        }
        />
    );
}
export default  Profile;
