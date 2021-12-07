import React, {useEffect, useState} from "react";
import Modal from '@mui/material/Modal';

import Item from '../../item/Item'
import './buyer_dashboard.scss';
import NoImage from './../../../assets/images/no_image.png';
import BlueButton from "../../../components/button/BlueButton";
import { useHistory } from "react-router-dom";
import {withRouter} from'react-router-dom'
import EmptyBox from './../../../assets/images/empty_box.png'
function Buyer_Dashboard(props){
    const [recentItems, setRecentItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])
    const [open, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let history = useHistory();

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('vazaar-recently-viewed'))){
            setRecentItems(JSON.parse(localStorage.getItem('vazaar-recently-viewed')).recentlyViewed)
        }
        if(JSON.parse(localStorage.getItem('vazaar-user')).data.favorite){
            setFavoriteItems(JSON.parse(localStorage.getItem('vazaar-user')).data.favorite)
        }


    }, [])
    const onClickImage = (item) =>{
        setCurrentItem(item)
        handleOpen()
    }
    
    const onClickView = () =>{
        history.push('profile', {radio:2})
    }
    const onClickViewFav = () =>{
        history.push('profile', {radio:1})
    }
    return(
        <div style = {{height: '100%', paddingRight:'50px'}}>

            {/* <div style = {{paddingBottom: "20px"}}></div> */}

            <div style = {{height: '100%', display: 'flex', width:'100%', justifyContent:'space-between'}}>
                <div style = {{width: '45%'}}>
                <div className = "Vazaar-Buyer-Header" style = {{textAlign : "left"}}>
                        Recently Viewed
                    </div>
                    <div className = "Vazaar-Buyer-Recently-Viewed-Container">
                        <div className = "Vazaar-Buyer-Second-Header" style = {{textAlign : "left"}}>
                            Recently Viewed Listings
                        </div>
                        {
                        recentItems.length>0?
                        <div style = {{width:'100%', height:'100%'}}>
                            <div style = {{width:'100%', height:'85%', overflowY:'scroll', display:'flex', flexWrap:'wrap'}}>
                                {recentItems.map((item, index) =>(
                                    <img onClick = {()=>onClickImage(item)} style ={{marginLeft:'20px', cursor:'pointer'}} width = '200' height = '200' src = {"https://vazaar.herokuapp.com/img/items/"+item.imageCover}  alt = ""/>
                                ))
                                }             
                            </div>
                            <div style = {{paddingLeft: "65%"}}>
                                <div className = "Vazaar-Dashboard-ViewMore" onClick = {() => onClickView()}>
                                    <BlueButton text="View More" width="120px" height="47px" />       
                                </div>                                 
                            </div>        
                        </div>
                        :
                        <div style ={{position:'relative', top:'30%'}}>
                            <img  src={EmptyBox} alt = "Empty" style ={{height:'200px', width:'200px'}}/>
                            <div style = {{fontSize:'20px', fontFamily:'Roboto', color:'#7D9EB5', marginTop:'10px'}}>
                            You didn't view any items recently.
                            </div>
                        </div>
                        }
                        
                    </div>
                </div>
                <div style = {{width: '45%'}}>
                <div className = "Vazaar-Buyer-Header" style = {{textAlign : "left"}}>
                        Ready to contact the seller?
                    </div>
                    <div className = "Vazaar-Buyer-Recently-Viewed-Container">
                        <div className = "Vazaar-Buyer-Second-Header" style = {{textAlign : "left"}}>
                            Your Saved Listings
                        </div>
                        {
                        favoriteItems.length>0?
                        <div style = {{width:'100%', height:'100%'}}>
                            <div style = {{width:'100%', height:'95%', overflowY:'scroll', display:'flex', flexWrap:'wrap'}}>
                                {favoriteItems.map((item, index) =>(
                                    <img onClick = {()=>onClickImage(item)} style ={{marginLeft:'20px', cursor:'pointer'}} width = '200' height = '200' src = {"https://vazaar.herokuapp.com/img/items/"+item.imageCover}  alt = ""/>
                                ))
                                }             
                            </div>
                            <div className = "Vazaar-Dashboard-ViewMore" onClick = {() => onClickViewFav()}>
                                <BlueButton text="View More" width="120px" height="47px" />                                
                            </div>        
                        </div>
                        :
                        <div style ={{position:'relative', top:'30%'}}>
                            <img  src={EmptyBox} alt = "Empty" style ={{height:'200px', width:'200px'}}/>
                            <div style = {{fontSize:'20px', fontFamily:'Roboto', color:'#7D9EB5', marginTop:'10px'}}>
                            You don't have any favorite items.
                            </div>
                        </div>
                        }
                    </div>
                </div>
                
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{
                    timeout: 500,
                }}
                closeAfterTransition
            >
                <Item item = {currentItem} handleClose = {handleClose} />
            </Modal>
        </div>
    )
}
export default withRouter(Buyer_Dashboard);