import React, {useState, useEffect} from 'react';
import Post from '../../components/post/Post';
import './../buyer_page/buyer_sections/Listing.scss';
import EmptyBox from './../../assets/images/empty_box.png'
  

function FavoriteProfile(props){
    const [items, setItems] = useState([]);
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('vazaar-user')).data.favorite){
            setItems(JSON.parse(localStorage.getItem('vazaar-user')).data.favorite)
        }
        else{
            return
        }        
    },[])
    const resetItem = () =>{
        if(JSON.parse(localStorage.getItem('vazaar-user')).data.favorite){
            setItems(JSON.parse(localStorage.getItem('vazaar-user')).data.favorite)
        }
        else{
            return
        }      
    }
    return(
        <>
        {items.length>0?
            <div style = {{width:'100%', height:'calc(100% - 40px)', paddingTop:'40px'}}>
                <div id = "Vazaar-Container-Div"style = {{width:'100%', height:'calc(100% - 40px)', overflowY:'scroll'}}>
                    <div className = "Vazaar-ItemListing-Container">
                    {
                        items.map((item, index) => (
                            <Post key = {index} item = {item} resetBoolean = {true} resetItem = {resetItem}/>
                        ))
                    }
                    </div>
                </div>
            </div>:
            <div>
            <img  src={EmptyBox} alt = "Empty" style ={{height:'300px', width:'300px'}}/>
            <div style = {{fontSize:'32px', fontFamily:'Roboto', color:'#7D9EB5', marginTop:'10px'}}>
                You don't have any favorite items. 
            </div>
            </div>
        }
        </>
    );
}
export default FavoriteProfile;