import React, {useState} from 'react';
import './Post.scss'
import Moment from 'moment';
import Item from '../../pages/item/Item';
import Modal from '@mui/material/Modal';


function Post(props){
    //Values here are all static. Need to figure out details in future
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return(
        <div className = "Vazaar-Post-Container">
            {
                console.log(props.item.color)
            }
            <div className = "Vazaar-Post-Image-Container">
                Some Picture
            </div>
            <div className = "Vazaar-Post-Detail-Container">
                <div className = "Vazaar-Post-Detail-Title">
                    {props.item.name}
                </div>
                <div className = "Vazaar-Post-Detail-Condition-Container">
                    <div className = "Vazaar-Post-Detail-Condition-Body">
                        Condition : {props.item.condition}
                    </div>
                    <div className = "Vazaar-Post-Detail-Condition-Body">
                        Posted : {Moment(props.item.createdAt).format('MMM-DD YYYY')}
                    </div>
                </div>
                <div className = "Vazaar-Post-Detail-Price-Container">
                    <div className = "Vazaar-Post-Detail-Price-Body">
                        Price: 
                    </div>
                    <div className = "Vazaar-Post-Detail-Price-Body Dollar">
                        ${props.item.price}
                    </div>
                </div>
                <div className = "Vazaar-Post-View" onClick = {handleOpen}>View</div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{
                    timeout: 500,
                }}
                closeAfterTransition
            >
                <Item item = {props.item} />
            </Modal>
            {/* <Switch>
                    <Route path={`${path}/:topicId`}>
                    <Item />
                </Route>
            </Switch> */}
        </div>
    );
}
export default Post;