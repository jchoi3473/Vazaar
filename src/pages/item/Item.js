import React, {useState, useEffect} from 'react';
import './Item.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { SvgIcon } from '@mui/material';
import Moment from 'moment';
import { Checkbox } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import {undoFavorite, doFavorite, authenticateUser} from './../../lib/api'


function Item(props){
    const [checked, setChecked] = useState(false);
    const [hoverHeart, setHoverHeart] = useState(false);
    const [image, setImage] = useState([])
    const [isFavorite, setIsFavorite] = useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const containsObject = (obj, list) => {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].id === obj.id) {
                return true;
            }
        }
        return false;
    }
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('vazaar-recently-viewed'))){
            var tempRecentlyViewed = JSON.parse(localStorage.getItem('vazaar-recently-viewed'))
            if(!containsObject(props.item, tempRecentlyViewed.recentlyViewed)){
                tempRecentlyViewed.recentlyViewed.unshift(props.item)
                localStorage.setItem('vazaar-recently-viewed', JSON.stringify(tempRecentlyViewed))
            }
        }else{
            localStorage.setItem('vazaar-recently-viewed', JSON.stringify({recentlyViewed: [props.item]}))
        }
        
        
        if(JSON.parse(localStorage.getItem('vazaar-user')).data){
            console.log(props.item)
            const jsonFav = JSON.parse(localStorage.getItem('vazaar-user')).data.favorite
            for(var i=0;i<jsonFav.length;i++){
                if(props.item.id === jsonFav[i].id){
                    setIsFavorite(true)
                }
            }
        }      
        let tempImages = [
        {
            original: "https://vazaar.herokuapp.com/img/items/"+props.item.imageCover,
            thumbnail: "https://vazaar.herokuapp.com/img/items/"+props.item.imageCover
        }
        ]
        for(var i=0;i<props.item.images.length;i++){
            tempImages.push({
                original :  "https://vazaar.herokuapp.com/img/items/"+props.item.images[i],
                thumbnail :  "https://vazaar.herokuapp.com/img/items/"+props.item.images[i],
            })
        }
        setImage(tempImages)
    },[])
    const onClickHeart = async() =>{
        var res = ""
        if(isFavorite){
            res = await undoFavorite(props.item.id)
            const result = await authenticateUser(localStorage.getItem('vazaar-jwt-token'))
            if(res === "success"){
                setIsFavorite(false)
            }
            console.log(props.item.id)
            //undo Favorite
        }else{
            //do Favorite
            res = await doFavorite(props.item.id)
            const result = await authenticateUser(localStorage.getItem('vazaar-jwt-token'))
            console.log(res)
            if(res === "success"){
                console.log("triggered success")
                setIsFavorite(true)
            }
        }
    }

    return(
        <div className = "Vazaar-Item-Container">
            <div className = "Vazaar-Item-Left">
                <div className = "Vazaar-Item-Picture-Container" style = {{height: '60%'}}>
                <div className = "Vazaar-Item-Description-Title">
                        Images
                </div>
                <div style = {{width:'600px', height:'300px'}}>
                    <ImageGallery  items={image} originalHeight="600" originalWidth="500"/>
                </div>
                </div>
                <div className = "Vazaar-Item-Description-Container" style = {{height: '40%'}}>
                    <div className = "Vazaar-Item-Description-Title">
                        Description
                    </div>
                    <div className = "Vazaar-Item-Description-body">
                        {props.item.description}
                    </div>
                </div>
            
            </div>
            <div className = "Vazaar-Item-Right">
                <div style = {{display: 'flex', alignItems: 'center', height: '8rem'}}>
                    <div className = "Vazaar-Item-Title">
                        {props.item.name}
                    </div>
                    <div>
                        {
                            isFavorite?
                                <SvgIcon  component={FavoriteIcon} style = {{color: '#E9545D', fontSize: '55px', cursor:'pointer'}} onClick={()=>onClickHeart()}/>:
                                <SvgIcon  component={FavoriteBorderIcon} style = {{color: '#E9545D', fontSize: '55px', cursor:'pointer'}} onClick={()=>onClickHeart()}/>
                        }
                    </div>
                    {/* <div>
                        {props.item.name}
                    </div> */}
                </div>
                <div style = {{height: '45%', display: 'flex', flexDirection:'column', justifyContent:"space-evenly"}}>
                    <div style = {{display:'flex'}}>
                        <div className = "Vazaar-Item-Description-body" style = {{fontWeight: 'bold', marginRight:"5px"}}>
                            {"Price: "}
                        </div>
                        <div className = "Vazaar-Item-Description-body" style = {{color: '#2A783B'}}>
                            ${props.item.price}
                        </div>
                    </div>
                    <div style = {{display:'flex'}}>
                     <div className = "Vazaar-Item-Description-body" style = {{fontWeight: 'bold', marginRight:"5px"}}>
                            Category: 
                        </div>
                        <div className = "Vazaar-Item-Description-body">
                            Bedroom
                        </div>
                    </div>
                    <div style = {{display:'flex'}}>
                        <div className = "Vazaar-Item-Description-body" style = {{fontWeight: 'bold', marginRight:"5px"}}>
                        Date Posted: 
                        </div>
                        <div className = "Vazaar-Item-Description-body">
                            {Moment(props.item.createdAt).format('MM/DD/YYYY')}
                        </div>
                    </div>
                    <div style = {{display:'flex'}}>
                        
                        <div className = "Vazaar-Item-Description-body" style = {{fontWeight: 'bold', marginRight:"5px"}}>
                        Condition: 
                        </div>
                        <div className = "Vazaar-Item-Description-body">
                        {props.item.condition}
                        </div>


                    </div>
                    <div style = {{display:'flex'}}>
                        <div className = "Vazaar-Item-Description-body" style = {{fontWeight: 'bold', marginRight:"5px"}}>
                        Dimensions/Size: 
                        </div>
                        <div className = "Vazaar-Item-Description-body">
                        {props.item.dimension}
                        </div>
                    </div>
                   
                    {/* <div style = {{display:'flex'}}>

                        <div className = "Vazaar-Item-Description-body" style = {{fontWeight: 'bold', marginRight:"5px"}}>
                        Tags: 
                        </div>
                        <div className = "Vazaar-Item-Description-body">
                            bed, bedroom, mattress
                        </div>

                    </div> */}
                    <div style = {{display:'flex'}}>
                        <div className = "Vazaar-Item-Description-body" style = {{fontWeight: 'bold', marginRight:"5px"}}>
                        Delivery Options: 
                        </div>
                        <div className = "Vazaar-Item-Description-body">
                            {
                                props.item.delivery?"Can Be Delivered":"Direct Pickup"
                            }
                        </div>

                    </div>
                    <div style = {{display:'flex', marginTop:'50px'}}>
                        <div className = "Vazaar-Item-Description-body" style = {{fontWeight: 'bold', marginRight:"5px"}}>
                        Seller : 
                        </div>
                        <div className = "Vazaar-Item-Description-body">
                        {props.item.userInfo.name}
                        </div>
                    </div>
                    <div style = {{display:'flex'}}>
                        <div className = "Vazaar-Item-Description-body" style = {{fontWeight: 'bold', marginRight:"5px"}}>
                        Contact : 
                        </div>
                        <div className = "Vazaar-Item-Description-body">
                        {props.item.userInfo.email}
                        </div>
                    </div>
                </div>
                <div style = {{height: '20%', display: 'flex', flexDirection:'column', justifyContent:"space-evenly"}}>
                    {/* <div style = {{display:'flex',alignItems:"center"}}>
                        <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        style = {{padding: '0'}}
                        inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <div className = "Vazaar-Item-Description-body" style = {{fontWeight: 'bold', marginLeft:"20px"}}>
                            Propose $5 for delivery?
                        </div>
                    </div> */}
                        <div style = {{display:'flex', width: '400px'}}>
                            <div className = "Vazaar-Item-Note-body" style = {{fontWeight: 'bold', marginRight: '5px'}}>
                            Note:
                            </div>
                            <div className = "Vazaar-Item-Note-body" >
                                If the seller does not provide delivery services, then the buyer has the option to propose a delivery add-on fee. However, the seller may reject the offer. 
                            </div>
                        </div>
                </div>
            </div>
            <div style={{position:'relative', fontSize : "20px", left :'15px', cursor:'pointer'}} onClick = {props.handleClose}>X</div>
        </div>
    );
}

export default Item;
