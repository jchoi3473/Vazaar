import React, {useState, useEffect} from 'react';
// import Post from '../../../components/post/Post';
import Post from '../../../components/post/Post';
import { getSoldListing } from '../../../lib/api';
// import {getSoldListings} from '../../../lib/api'
import './Listing.scss';
  

function SoldListing(props){
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getSoldListing(true).then(response => {
            setLoaded(true);
            console.log(response)
            setItems(response.data.doc)
        })
      },[])

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
export default SoldListing;