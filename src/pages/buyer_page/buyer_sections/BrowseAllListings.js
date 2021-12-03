import React, {useState, useEffect} from 'react';
import Post from '../../../components/post/Post';
import {getAllListings} from './../../../lib/api'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

import './Listing.scss';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 15,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      height: '23px', 
      padding: '10px 26px 10px 12px',
      fontWeight:'500',
      color:'#589BFF',
      textAlign:'center',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 15,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

  const SelectUI = styled(Select)(({ theme }) => ({
    '& .MuiIList-root': {
        fontSize: 10,

    },
  }));

  

function BrowseAllListings(props){
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [age, setAge] = React.useState('Sorting');
    const [minPrice, setMinPrice] = React.useState(0);
    const [maxPrice, setMaxPrice] = React.useState(0);

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const handleChangeMinPrice = (event) =>{
            setMinPrice(event.target.value)
    }
    const handleChangeMaxPrice = (event) =>{
        setMaxPrice(event.target.value)
    }
    useEffect(() => {
        getAllListings().then(response => {
            setLoaded(true);
            setItems(response.items)
            console.log(response.items)
        })
        // if(localStorage.getItem('jwt-token')){
        //   getApplication(JSON.parse(localStorage.getItem('user')).uID).then(applications => 
        //     {props.setApps(applications)
        //       setAppLoaded(true)})
        //   getCompany(JSON.parse(localStorage.getItem('user')).uID).then(companies => 
        //     {props.setCompany(companies)
        //     setCompanyLoaded(true)
        //     })
        // }else{
        //   props.history.push('/');
        // }
      },[])

    return(
        <div style = {{width:'100%', height:'100%'}}>
            {
                loaded?
                <div style = {{width:'100%', height:'100%'}}>
                    <div style = {{textAlign :'left', paddingBottom:'30px'}}>
                        <FormControl className = "Vazaar-sort-dropdown">
                                <div className = "Vazaar-sort-title">
                                Sort by
                                </div>
                                {/* <InputLabel id="demo-simple-select-label">Sort</InputLabel> */}
                                <SelectUI
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                input = {<BootstrapInput placeholder ="Sort"/> }
                                onChange={handleChange}
                                displayEmpty
                                >
        
                                    <MenuItem className = "Vazaar-sort-dropdown-menu" style = {{fontSize:'14px'}} value={1}>Price: Low to High</MenuItem>
                                    <MenuItem className = "Vazaar-sort-dropdown-menu" style = {{fontSize:'14px'}} value={2}>Price: High to Low</MenuItem>
                                    <MenuItem className = "Vazaar-sort-dropdown-menu" style = {{fontSize:'14px'}} value={3}>Date: Newest to Oldest</MenuItem>
                                    <MenuItem className = "Vazaar-sort-dropdown-menu" style = {{fontSize:'14px'}} value={4}>Date: Oldest to Newest</MenuItem>

                            </SelectUI>

                        </FormControl>
                        <div style = {{paddingLeft:'50px', display:"inline-flex", alignItems:'center'}}>
                        <FormControl className = "Vazaar-sort-input">
                            <div className = "Vazaar-sort-title">
                                Minimum Price
                            </div>
                            <BootstrapInput className="no-spinner" type = "number" style = {{width : '150px'}} value = {minPrice} onChange={handleChangeMinPrice}/>
                        </FormControl>
                        <div className = "Vazaar-sort-range" >-</div>
                        <FormControl className = "Vazaar-sort-input">
                            <div className = "Vazaar-sort-title">
                                Maximum Price
                            </div>
                            <BootstrapInput className="no-spinner" type = "number" style = {{width : '150px'}} value = {maxPrice} onChange={handleChangeMaxPrice}/>
                        </FormControl>
                        <button className = "Vazaar-sort-price">Search Price</button>
                        </div>
                    </div>

                    <div className = "Vazaar-ItemListing-Container">
                    {
                        items.map((item, index) => (
                            <Post key = {index} item = {item} />
                        ))
                        
                    }
                    </div>
                </div>
                :
                <div>
                    Data Loading in Progress
                </div>
            }
            
        </div>
    );
}
export default BrowseAllListings;