import React, {useState, useEffect} from 'react';
import Post from '../../../components/post/Post';
import {getAllListings} from './../../../lib/api'
import './Listing.scss';
function BrowseAllListings(props){
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
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
                <div className = "Vazaar-ItemListing-Container">
                {
                    items.map((item, index) => (
                        <Post key = {index} item = {item} />
                    ))
                    
                }
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