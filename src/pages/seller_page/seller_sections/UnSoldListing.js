import React, {useState, useEffect} from 'react';
// import Post from '../../../components/post/Post';
import Post from '../../../components/post/Post';
import {updateItem, authenticateUser} from './../../../lib/api';
// import {getSoldListings} from '../../../lib/api'
import './Listing.scss';
import EmptyBox from './../../../assets/images/empty_box.png'


function UnSoldListing(props){
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const onClickSold = async(item) =>{
        const res = await updateItem(item.id, {sold:true})
        const auth = await authenticateUser(localStorage.getItem('vazaar-jwt-token'))
        // if(res==="success"){
        //     for(var i =0;i<items.length;i++){
        //         console.log(items)
        //         console.log(items[i])

        //         if(item.id === items[i].id){
        //             const newArray = items.splice(i-1,1)
        //             setItems(newArray)
                    
        //         }

        //     }
        //     // window.location.reload(false);
        // }
        if(localStorage.getItem('vazaar-jwt-token')){
            //need to call authenticate API in future
            var tempList =[]
            for(var i=0;i<JSON.parse(localStorage.getItem('vazaar-user')).data.items.length;i++){
                if(!JSON.parse(localStorage.getItem('vazaar-user')).data.items[i].sold){
                    tempList.push(JSON.parse(localStorage.getItem('vazaar-user')).data.items[i])
                }
            }
            setItems(tempList)
        }

    }
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
                                items.length>0?
                                <>
                                {
                                    items.map((item, index) => (
                                    <div>
                                    <Post key = {index} item = {item} />
                                    <div className ="Vazaar-MarkSold-Container" onClick ={()=>onClickSold(item)}>
                                        <div className ="Vazaar-MarkSold">
                                            Item Sold
                                        </div>
                                    </div>
                                    </div>
                                ))
                                }
                                </>:
                                <div>
                                    <img  src={EmptyBox} alt = "Empty" style ={{height:'200px', width:'200px'}}/>
                                    <div style = {{fontSize:'20px', fontFamily:'Roboto', color:'#7D9EB5', marginTop:'10px'}}>
                                    You don't have any sold items.
                                    </div>
                                </div>
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