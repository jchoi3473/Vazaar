import React, {useState} from 'react';
import Dashboard from '../dashboard/Dashboard';
import './Profile.scss'
import Avatar from '@mui/material/Avatar';
import ProfileButton from './ProfileButton';
import { alpha, styled } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import BlueButton from '../../components/button/BlueButton';

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
    width: "65%",
    "& .MuiOutlinedInput-root":{
        width: "100%",

    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    //   border: "1px solid #ced4da",
      fontSize: 14,
      maxWidth: "430px",
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
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };


    const [state, setState] = useState("Georgia"); //replace with REAL USER information
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [password, setPassword] = useState("");
  
    const onChangeName = (e) => {
      setName(e.target.value);
    };
    const onChangeEmail = (e) => {
      setEmail(e.target.value);
    };
    const onChangeAddress = (e) => {
      setAddress(e.target.value);
    };
    const onChangeCity = (e) => {
      setCity(e.target.value);
    };
    const onChangeZipcode = (e) => {
      setZipcode(e.target.value);
    };
    const onChangePassword = (e) => {
      setPassword(e.target.value);
    };
  
    const handleStateChange = (event) => {
      setState(event.target.value);
    };

    const onClickLogo = () => {
      props.history.push("main");
    };

    const onClickCancel = () => {
      props.history.push("profile");
    };

    const onClickModifyProfile = async () => {
      console.log("Modify Profile");
      await Profile(
        name,
        email,
        address,
        city,
        zipcode,
        password,
      );
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
                  <div style = {{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                      <Avatar className = "Vazaar-Avatar" {...stringAvatar('Jae Ho Choi')} />
                      <div className = "Vazaar-Profile-Name" style = {{fontSize:"20px", marginTop:"15px"}}>
                          Jae Ho Choi
                      </div>
                  </div>
                
          {/* <div
            className="Vazaar-Profile-Button-Container"
          >
            <div onClick={(e) => onClickModifyProfile()}>
              <BlueButton text="Save" width="150px" height="47px" />
            </div>

            <div style = {{paddingTop: "10px" }}></div>

            <div onClick={(e) => onClickCancel()}>
              <BlueButton text="Cancel" width="150px" height="47px" />
            </div>
            </div> */}



              <div style = {{width: "50%", height:"60%", display: "flex", justifyContent:"space-evenly", flexDirection:"column"}}>
                  <div>
            <div className="Vazaar-Profile-Form-Container">
              <div className="Vazaar-Profile-Form-SubContainer">
                <div className="Vazaar-Profile-Form-SecondTitle">NAME</div>
                <FormInput
                  placeholder="Jae Ho Choi" //replace with REAL USER information
                  value={name}
                  onChange={(e) => onChangeName(e)}
                />
              </div>
              <div className="Vazaar-Profile-Form-SubContainer">
              <div className="Vazaar-Profile-Form-SecondTitle">EMAIL</div>
              <FormInput
                placeholder="cdooley@emory.edu" //replace with REAL USER information
                value={email}
                onChange={(e) => onChangeEmail(e)}
              />
            <div className="Vazaar-Profile-Form-SubContainer">
              <div className="Vazaar-Profile-Form-SecondTitle">PASSWORD</div>
              <FormInput
                placeholder="Modify Password"
                value={password}
                onChange={(e) => onChangePassword(e)}
              />
            </div>
            <div className="Vazaar-Profile-Form-SubContainer">
              <div className="Vazaar-Profile-Form-SecondTitle">ADDRESS</div>
              <FormInput
                placeholder="201 Dowman Dr." //replace with REAL USER information
                value={address}
                onChange={(e) => onChangeAddress(e)}
              />
            </div>
            <div className="Vazaar-Profile-Form-SubContainer">
              <div className="Vazaar-Profile-Form-SecondTitle">CITY</div>
              <FormInput
                placeholder="Atlanta" //replace with REAL USER information
                value={city}
                onChange={(e) => onChangeCity(e)}
              />
            </div>
            </div>
            <div className="Vazaar-Profile-Form-SubContainer">
              <div className="Vazaar-Profile-Form-SecondTitle">STATE</div>
              <FormTextField
                style={{
                  textAlign: "left",
                }}
                value={state}
                placeholder="Georgia" //replace with REAL USER information
                select
                onChange={handleStateChange}
                rows={5}
                SelectProps={{
                  MenuProps: { PaperProps: { sx: { maxHeight: 250 } } },
                }}
              >
                {states.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </FormTextField>
            </div>
            <div className="Vazaar-Profile-Form-SubContainer">
              <div className="Vazaar-Profile-Form-SecondTitle">ZIP Code</div>
              <FormInput
                placeholder="30322" //replace with REAL USER information
                value={zipcode}
                onChange={(e) => onChangeZipcode(e)}
              />
            </div>
          </div>

          </div>

          <div style = {{paddingTop: "20px" }}></div>

          <div
            className="Vazaar-Profile-Button-Container"
            style = {{display:"flex", flexDirection:"row", paddingLeft: "0px"}}
          >
            <div onClick={(e) => onClickModifyProfile()}>
              <BlueButton text="Save" width="150px" height="47px" />
              </div>

              <div style = {{paddingRight: "20px" }}></div>

            <div onClick={(e) => onClickCancel()}>
              <BlueButton text="Cancel" width="150px" height="47px" />
                        
              </div>
              </div>
              </div>
            </div>              
          }
        />
    );
}

export default Profile;

const states = [
  {
    value: "Alabama",
    label: "AL",
  },
  {
    value: "Alaska",
    label: "AK",
  },
  {
    value: "American Samoa",
    label: "AS",
  },
  {
    value: "Arizona",
    label: "AZ",
  },
  {
    value: "Arkansas",
    label: "AR",
  },
  {
    value: "California",
    label: "CA",
  },
  {
    value: "Colorado",
    label: "CO",
  },
  {
    value: "Connecticut",
    label: "CT",
  },
  {
    value: "Delaware",
    label: "DE",
  },
  {
    value: "District Of Columbia",
    label: "DC",
  },
  {
    value: "Federated States Of Micronesia",
    label: "FM",
  },
  {
    value: "Florida",
    label: "FL",
  },
  {
    value: "Georgia",
    label: "GA",
  },
  {
    value: "Guam",
    label: "GU",
  },
  {
    value: "Hawaii",
    label: "HI",
  },
  {
    value: "Idaho",
    label: "ID",
  },
  {
    value: "Illinois",
    label: "IL",
  },
  {
    value: "Indiana",
    label: "IN",
  },
  {
    value: "Iowa",
    label: "IA",
  },
  {
    value: "Kansas",
    label: "KS",
  },
  {
    value: "Kentucky",
    label: "KY",
  },
  {
    value: "Louisiana",
    label: "LA",
  },
  {
    value: "Maine",
    label: "ME",
  },
  {
    value: "Marshall Islands",
    label: "MH",
  },
  {
    value: "Maryland",
    label: "MD",
  },
  {
    value: "Massachusetts",
    label: "MA",
  },
  {
    value: "Michigan",
    label: "MI",
  },
  {
    value: "Minnesota",
    label: "MN",
  },
  {
    value: "Mississippi",
    label: "MS",
  },
  {
    value: "Missouri",
    label: "MO",
  },
  {
    value: "Montana",
    label: "MT",
  },
  {
    value: "Nebraska",
    label: "NE",
  },
  {
    value: "Nevada",
    label: "NV",
  },
  {
    value: "New Hampshire",
    label: "NH",
  },
  {
    value: "New Jersey",
    label: "NJ",
  },
  {
    value: "New Mexico",
    label: "NM",
  },
  {
    value: "New York",
    label: "NY",
  },
  {
    value: "North Carolina",
    label: "NC",
  },
  {
    value: "North Dakota",
    label: "ND",
  },
  {
    value: "Northern Mariana Islands",
    label: "MP",
  },
  {
    value: "Ohio",
    label: "OH",
  },
  {
    value: "Oklahoma",
    label: "OK",
  },
  {
    value: "Oregon",
    label: "OR",
  },
  {
    value: "Palau",
    label: "PW",
  },
  {
    value: "Pennsylvania",
    label: "PA",
  },
  {
    value: "Puerto Rico",
    label: "PR",
  },
  {
    value: "Rhode Island",
    label: "RI",
  },
  {
    value: "South Carolina",
    label: "SC",
  },
  {
    value: "South Dakota",
    label: "SD",
  },
  {
    value: "Tennessee",
    label: "TN",
  },
  {
    value: "Texas",
    label: "TX",
  },
  {
    value: "Utah",
    label: "UT",
  },
  {
    value: "Vermont",
    label: "VT",
  },
  {
    value: "Virgin Islands",
    label: "VI",
  },
  {
    value: "Virginia",
    label: "VA",
  },
  {
    value: "Washington",
    label: "WA",
  },
  {
    value: "West Virginia",
    label: "WV",
  },
  {
    value: "Wisconsin",
    label: "WI",
  },
  {
    value: "Wyoming",
    label: "WY",
  },
];

