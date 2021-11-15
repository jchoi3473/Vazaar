import React, {useState} from 'react';
import './Item.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { SvgIcon } from '@mui/material';
import Moment from 'moment';
import { Checkbox } from '@mui/material';

function Item(props){
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return(
        <div className = "Vazaar-Item-Container">
            <div className = "Vazaar-Item-Left">
                <div className = "Vazaar-Item-Picture-Container" style = {{height: '50%'}}>
                <div className = "Vazaar-Item-Description-Title">
                        Images
                    </div>
                </div>
                <div className = "Vazaar-Item-Description-Container" style = {{height: '50%'}}>
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
                        <SvgIcon component={FavoriteBorderIcon} style = {{color: 'red', fontSize: '55px'}} />
                    </div>
                    {/* <div>
                        {props.item.name}
                    </div> */}
                </div>
                <div style = {{height: '25rem', display: 'flex', flexDirection:'column', justifyContent:"space-evenly"}}>
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
                            {Moment(props.item.name).format('MM/DD/YYYY')}
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
                        Dimensions: 
                        </div>
                        <div className = "Vazaar-Item-Description-body">
                        {props.item.dimension}
                        </div>


                    </div>
                    <div style = {{display:'flex'}}>

                        <div className = "Vazaar-Item-Description-body" style = {{fontWeight: 'bold', marginRight:"5px"}}>
                        Tags: 
                        </div>
                        <div className = "Vazaar-Item-Description-body">
                            bed, bedroom, mattress
                        </div>

                    </div>
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
                </div>
                <div style = {{height: '25rem', display: 'flex', flexDirection:'column', justifyContent:"space-evenly"}}>
                    <div style = {{display:'flex',alignItems:"center"}}>
                        <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        style = {{padding: '0'}}
                        inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <div className = "Vazaar-Item-Description-body" style = {{fontWeight: 'bold', marginLeft:"20px"}}>
                            Propose $5 for delivery?
                        </div>
                    </div>
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
        </div>
    );
}

export default Item;
