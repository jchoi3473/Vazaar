import React, {useState, useEffect} from 'react';
// import Post from '../../../components/post/Post';
import Post from '../../../components/post/Post';
import { getSoldListing } from '../../../lib/api';
// import {getSoldListings} from '../../../lib/api'
import './Listing.scss';
  

function UnSoldListing(props){
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        if(localStorage.getItem('vazaar-jwt-token')){
            //need to call authenticate API in future
            console.log(JSON.parse(localStorage.getItem('vazaar-user')).data.items)
            var tempList =[]
            for(var i=0;i<JSON.parse(localStorage.getItem('vazaar-user')).data.items.length;i++){
                if(!JSON.parse(localStorage.getItem('vazaar-user')).data.items[i].sold){
                    tempList.push(JSON.parse(localStorage.getItem('vazaar-user')).data.items[i])
                }
            }
            setItems(tempList)
            setLoaded(true);
            // setUserData(JSON.parse(localStorage.getItem('vazaar-user')).user)
            // setSignedIn(true)
            // console.log(JSON.parse(localStorage.getItem('vazaar-user')).user)
        }else{
            alert("Please Sign In to Start Selling!")
            props.history.push('/')
        }
    },[props.history])


    return(
        <div style = {{width:'100%', height:'100%'}}>
            {
                loaded?
                <div style = {{width:'100%', height:'100%'}}>
                        <div style = {{width:'100%', height:'calc(100% - 80px)', overflowY:'scroll'}}>
                            <div className = "Vazaar-ItemListing-Container">
                                {
                                    items.map((item, index) => (
                                        <Post key = {index} item = {item} />
                                    ))
                                    
                                }
                            </div>
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
export default UnSoldListing;