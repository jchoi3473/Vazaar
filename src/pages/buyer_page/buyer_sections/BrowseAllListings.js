import React, {useState, useEffect} from 'react';
import Post from '../../../components/post/Post';
import {getAllListings} from './../../../lib/api'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import ReactPaginate from 'react-paginate'; 
import axios from 'axios';
import Vazaar from './../../../assets/images/vazaar.png'
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
    const [sortingOption, setSortingOption] = React.useState(0);
    const [minPrice, setMinPrice] = React.useState(0);
    const [maxPrice, setMaxPrice] = React.useState(0);
    const [totalNumPages, setTotalNumPages] = React.useState(0);
    const [currentPage, setcurrentPage] = useState(0); 
    const [sortString, setSortString] = useState('')
    const [searchText, setSearchText] = useState('')

    const onClickReset = () =>{
        setLoaded(false)
        setMinPrice(0)
        setMaxPrice(0)
        setSortingOption(0)
        setSortString('')
        getAllListings(props.type, 1, 20, '', 0, 0, searchText).then(response => {
            setLoaded(true);
            console.log(response.data)
            setTotalNumPages(response.totalPageNumber)
            setItems(response.data.doc)
        })
    }
    const handlePageChange = (selectedObject) => {
        setcurrentPage(selectedObject.selected);
        var myDiv = document.getElementById('Vazaar-Container-Div');
        myDiv.scrollTop = 0;


        // setLoaded(false);
        const data = getAllListings(props.type, selectedObject.selected+1, 20, sortString, minPrice, maxPrice, searchText).then(response => {
            // setLoaded(true);
            setTotalNumPages(response.totalPageNumber)
            console.log(response)
            setItems(response.data.doc)
        })

        // handleFetch()
        

		// handleFetch();
	};

    const onClickSearch = () =>{
        const data = getAllListings(props.type, 1, 20, sortString, minPrice, maxPrice, searchText).then(response => {
            // setLoaded(true);
            setTotalNumPages(response.totalPageNumber)
            console.log(response)
            setItems(response.data.doc)
        })
    }

    const onClickSearchPrice = (event) =>{
        if(maxPrice <= minPrice){
            alert("Please insert correct price range.")
            setMinPrice(0)
            setMaxPrice(0)
            onClickReset()
            return
        }
        const data = getAllListings(props.type, 1, 20, sortString, minPrice, maxPrice, searchText).then(response => {
            // setLoaded(true);
            setTotalNumPages(response.totalPageNumber)
            console.log(response)
            setItems(response.data.doc)
        })
    }
    const handleChange = (event) => {
        setSortingOption(event.target.value);
        var tempSortString = ""
        switch (event.target.value) {
            case 1:
                tempSortString = "price"
                break;
            case 2:
                tempSortString = "-price"
                break;
            case 3:
                tempSortString = "-createdAt"
                break;
            case 4:
                tempSortString = "createdAt"
                break;
            default:
              return null
        }
        setSortString(tempSortString)
        const data = getAllListings(props.type, 1, 20, tempSortString, minPrice, maxPrice, searchText).then(response => {
            // setLoaded(true);
            setTotalNumPages(response.totalPageNumber)
            console.log(response)
            setItems(response.data.doc)
        })
    };

    const handleChangeMinPrice = (event) =>{
        setMinPrice(event.target.value)
    }
    const handleChangeMaxPrice = (event) =>{
        setMaxPrice(event.target.value)
    }
    useEffect(() => {
        getAllListings(props.type, 1, 20, sortString, minPrice, maxPrice, searchText).then(response => {
            setLoaded(true);
            setTotalNumPages(response.totalPageNumber)
            setItems(response.data.doc)
        })
      },[])


    const onChangeSearchText = (e) =>{
        setSearchText(e.target.value);
    }
    const handleKeyDown = (event) =>{
        if (event.key === 'Enter') {
            onClickSearch()
        }
    }
    return(
        <div style = {{width:'100%', height:'100%'}}>
            {
                loaded?
                <div style = {{width:'100%', height:'100%'}}>
                        <div className ="Vazaar-Top-Search-Container">
                            <input className ="Vazaar-Top-Search" value = {searchText} onChange = {(e) => onChangeSearchText(e)} placeholder = "Search for an item here" onKeyDown={handleKeyDown}/>
                            <buttom className ="Vazaar-Top-Search-Button" onClick = {()=>onClickSearch()}>Search</buttom>
                        </div>
                        <div style = {{textAlign :'left', paddingBottom:'30px'}}>
                        <FormControl className = "Vazaar-sort-dropdown">
                                <div className = "Vazaar-sort-title">
                                Sort by
                                </div>
                                {/* <InputLabel id="demo-simple-select-label">Sort</InputLabel> */}
                                <SelectUI
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sortingOption}
                                label="Sort"
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
                        <button className = "Vazaar-sort-price" onClick = {(e) => onClickSearchPrice(e)}>Search Price</button>
                        <button className = "Vazaar-sort-price" onClick = {() => onClickReset()}>Reset</button>
                        </div>
                    </div>
                        <div id = "Vazaar-Container-Div"style = {{width:'100%', height:'calc(100% - 80px)', overflowY:'scroll'}}>
                            <div className = "Vazaar-ItemListing-Container">
                                {
                                    items.map((item, index) => (
                                        <Post key = {index} item = {item} />
                                    ))
                                    
                                }
                            </div>
                            <div className = "Vazaar-Pagination">
                                <ReactPaginate
                                    pageCount={totalNumPages}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageChange}
                                    containerClassName={'container'}
                                    previousLinkClassName={'page'}
                                    breakClassName={'page'}
                                    nextLinkClassName={'page'}
                                    pageClassName={'page'}
                                    disabledClassNae={'disabled'}
                                    activeClassName={'active'}
                                />
                            </div>
                    </div>

                </div>
                :
                <div>
                    <img  src={Vazaar} alt = "Data Loading" style ={{height:'200px', width:'200px'}}/>
                    <div style = {{fontSize:'40px', fontFamily:'Roboto', color:'#7D9EB5', marginTop:'10px'}}>
                        Ready to Vazaar?
                    </div>
                </div>
            }
            
        </div>
    );
}
export default BrowseAllListings;