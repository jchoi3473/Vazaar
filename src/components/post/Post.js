import React, {useState} from 'react';
import './Post.scss'
function Post(props){
    //Values here are all static. Need to figure out details in future
    return(
        <div className = "Vazaar-Post-Container">
            <div className = "Vazaar-Post-Image-Container">
                Some Picture
            </div>
            <div className = "Vazaar-Post-Detail-Container">
                <div className = "Vazaar-Post-Detail-Title">
                    Dining Table
                </div>
                <div className = "Vazaar-Post-Detail-Condition-Container">
                    <div className = "Vazaar-Post-Detail-Condition-Body">
                        Condition : Good
                    </div>
                    <div className = "Vazaar-Post-Detail-Condition-Body">
                        Posted : 10/04/2021
                    </div>
                </div>
                <div className = "Vazaar-Post-Detail-Price-Container">
                    <div className = "Vazaar-Post-Detail-Price-Body">
                        Price :
                    </div>
                    <div className = "Vazaar-Post-Detail-Price-Body Dollar">
                        $75
                    </div>
                </div>
                <div className = "Vazaar-Post-View">View</div>
            </div>
        </div>
    );
}
export default Post;