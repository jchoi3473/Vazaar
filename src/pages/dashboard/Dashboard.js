import React, {useState} from 'react';
import './Dashboard.scss'
function Dashboard(props) {

    return(
        <div className ="Vazaar-Dashboard-Container">
            <div className = "Vazaar-left-navigation-container">
                <div className = "Vazaar-Dashboard-Icon">Vazaar</div>
            </div>

            <div className = "Vazaar-Top-Navigation-Container">
                <input className ="Vazaar-Top-Search" placeholder = "Search for an item here"/>
                <div>
                    Name
                </div>
                
            </div>
            <div>
                {props.children}
            </div>



        </div>
    );
}
export default Dashboard