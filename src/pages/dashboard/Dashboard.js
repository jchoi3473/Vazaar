import React, {useState} from 'react';
import './Dashboard.scss'
function Dashboard(props) {

    return(
        <div>
        <div className ="Vazaar-Dashboard-Container">
            <div className = "Vazaar-left-navigation-container">
                <div className = "Vazaar-Dashboard-Icon">Vazaar</div>
                <div className = "Vazaar-Dashboard-List">
                    {props.left}
                </div>
            </div>

            <div className = "Vazaar-Top-Navigation-Container">
                <input className ="Vazaar-Top-Search" placeholder = "Search for an item here"/>
                <div className = "Vazaar-Profile-Container">
                    Jae Ho Choi
                </div>
            </div>
        </div>
        <div style = {{position : "absolute", top : "81px", left : "355px"}}>
            <div>
            {props.main}
            </div>
        </div>
        </div>
    );
}
export default Dashboard