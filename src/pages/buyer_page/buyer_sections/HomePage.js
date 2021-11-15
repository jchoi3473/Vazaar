import React from "react";
import './HomePage.scss'
function HomePage(props){
    return(
        <div style = {{height: '100%'}}>
            <div className = "Vazaar-Buyer-Header" style = {{textAlign : "left"}}>
                Home Page
            </div>
            <div style = {{height: '40%', width:'100%', margin: '0 auto'}}>

                <div className = "Vazaar-Buyer-Recently-Viewed-Container">
                    <div className = "Vazaar-Buyer-Second-Header" style = {{textAlign : "left"}}>
                        Recently Viewed Items
                    </div>
                </div>
            </div>
            <div style = {{height: '45%', display: 'flex', width:'100%', justifyContent:'space-between'}}>
                <div style = {{width: '45%'}}>
                <div className = "Vazaar-Buyer-Header" style = {{textAlign : "left"}}>
                        Ready to contact the seller?
                    </div>
                    <div className = "Vazaar-Buyer-Recently-Viewed-Container">
                        <div className = "Vazaar-Buyer-Second-Header" style = {{textAlign : "left"}}>
                            Your Saved Listings
                        </div>
                    </div>
                </div>
                <div style = {{width: '45%'}}>
                <div className = "Vazaar-Buyer-Header" style = {{textAlign : "left"}}>
                        Listings Near You
                    </div>
                    <div className = "Vazaar-Buyer-Recently-Viewed-Container">
                        <div className = "Vazaar-Buyer-Second-Header" style = {{textAlign : "left"}}>
                            Near Your Location
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;