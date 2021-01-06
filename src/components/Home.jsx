import React, { useState } from 'react'
import uuid from 'react-uuid';
import './Home.css';
import Header from './Header/Header';
import Card from './featuresSection/Card';
import {PopularCities, Company, Contact, Legal, DeliverTo} from './dataFile/links.js';
import Links from './footerSection/Links';
import Footer from './footerSection/Footer';
import MyLocationIcon from '@material-ui/icons/MyLocation';

// importing pictures
import dining from '../images/dining.jpeg';
import thumbsUp from '../images/thumbsUp.png';
import liveOrderTracking from '../images/liveOrderTracking.png';
import fastDelivery from '../images/FastDelivery.png';
import googlePlay from '../images/googlePlay.png';
import appStore from '../images/appStore.png';
import appPic1 from '../images/appPic1.png';
import appPic2 from '../images/appPic2.png';
import googlePlay2 from '../images/googlePlay2.png';
import appStore2 from '../images/appStore2.png';

const Home = () => {

    const [location, setLocation] = useState("");
    const [buttonContent, setButtonContent] = useState("Locate Me");
    

    const changeLocation = (event) => {
        setLocation(event.target.value);
        if(event.target.value !== "") {
            setButtonContent("Clear");
        } else {
            setButtonContent("Locate Me");
        }
    }
    
    const handleLocationButtonClick = () => {
        if(buttonContent === 'Clear') {
            setLocation("");
            setButtonContent("Locate Me");
        } else {
            // Get user coordinates 
            function getCoordintes() { 
                var options = { 
                    enableHighAccuracy: true, 
                    timeout: 5000, 
                    maximumAge: 0 
                }; 

                function success(pos) { 
                    var crd = pos.coords; 
                    var lat = crd.latitude.toString(); 
                    var lng = crd.longitude.toString(); 
                    var coordinates = [lat, lng]; 
                    console.log(`Latitude: ${lat}, Longitude: ${lng}`); 
                    getCity(coordinates); 
                    return; 

                } 

                function error(err) { 
                    console.warn(`ERROR(${err.code}): ${err.message}`); 
                } 

                navigator.geolocation.getCurrentPosition(success, error, options); 
            } 

            // Get city name 
            function getCity(coordinates) { 
                var xhr = new XMLHttpRequest(); 
                var lat = coordinates[0]; 
                var lng = coordinates[1]; 

                
                xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key="+ process.env.REACT_APP_KEY + "&lat=" + 
                lat + "&lon=" + lng + "&format=json", true); 
                xhr.send(); 
                xhr.onreadystatechange = processRequest; 
                xhr.addEventListener("readystatechange", processRequest, false); 

                function processRequest(e) { 
                    if (xhr.readyState === 4 && xhr.status === 200) { 
                        var response = JSON.parse(xhr.responseText); 
                        var city = response.address.city; 
                        setLocation(city);
                        setButtonContent("Clear");
                        return; 
                    } 
                } 
            } 

            getCoordintes(); 

        }
    }
    return (
        <div>
            <section id="landingSection">
                <div className="landingSection--container">
                    <div className="landingSection--containerContent">
                        <Header />
                        <div className="landingSection--containerContentBox">
                            <div className="landingSection--containerContentBoxSearch">
                                <input className="searchBar" type="text" placeholder="Enter your delivery location" value={location} onChange={changeLocation} maxLength="30"  />
                                <button className={`searchBarButton ${(buttonContent === "Clear")?"clear":"location"}`} onClick={handleLocationButtonClick}>{buttonContent}</button>
                                <button className="searchButton" >FIND FOOD</button>
                            </div>
                            <h3>Popular cities in India</h3>
                            <ul className="landingSection--containerContentBoxPopularCities">
                                {
                                    PopularCities.map((city, index) => <li key={uuid()} ><a href={city} style={{color: index%2===0 ? '#686b78' : '#93959f'}} >{city}</a></li>)
                                }
                                <li><a href="/#citiesLinks" style={{color: '#93959f'}} >& more.</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="landingSection--containerPicture">
                        <img src={dining} alt=""/>
                    </div>
                </div>
            </section>
            <section id="featuresSection">
                <div className="featuresSection--container">
                    <Card
                        picture={thumbsUp}
                        title="No Minimum Order"
                        description="Order in for yourself or for the group, with no restrictions on order value"
                    />
                    <Card
                        picture={liveOrderTracking}
                        title="Live Order Tracking"
                        description="Know where your order is at all times, from the restaurant to your doorstep"
                    />
                    <Card
                        picture={fastDelivery}
                        title="Lightning-Fast Delivery"
                        description="Experience Swiggy's superfast delivery for food delivered fresh & on time"
                    />
                </div>
            </section>
            <section id="appPromotionSection">
                <div className="appPromotionSection--container">
                    <div className="appPromotionSection--containerContent">
                        <h2>Restaurants in your pocket</h2>
                        <p>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
                        <div className="downloadButtons">
                            <button className="androidDownload"><img src={googlePlay} alt="google play store" /></button>
                            <button className="iosDownload"><img src={appStore} alt="app store" /></button>
                        </div>
                    </div>
                    <div className="appPromotionSection--containerPictures">
                        <img className="appPic1" src={appPic1} alt=""/>
                        <img className="appPic2" src={appPic2} alt=""/>
                    </div>
                </div>
            </section>
            <section id="footerSection">
                <div className="footerSection--container">
                    <div className="footerSection--containerAbout">
                        <Links data={Company} />
                        <Links data={Contact} />
                        <Links data={Legal} />
                        <div className="footerSection--containerAboutdownloadButtons">
                            <button className="iosDownload appDownload"><img src={appStore2} alt="app store" /></button>
                            <button className="androidDownload appDownload"><img src={googlePlay2} alt="google play store" /></button>
                        </div>
                    </div>
                    <div className="footerSection--containerDeliveryPlaces">
                        <p>WE DELIVER TO</p>
                        <div id="citiesLinks" className="footerSection--containerDeliveryPlacesLink">
                                {
                                    DeliverTo.map(links => <Links data={links} key={uuid()} />)
                                }
                        </div>
                    </div>
                    <Footer />
                </div>
            </section>
        </div>
    )
}

export default Home