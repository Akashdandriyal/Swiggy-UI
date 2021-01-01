import React from 'react'
import './Home.css';
import Header from './Header/Header';
import Card from './featuresSection/Card';
import {Company, Contact, Legal, DeliverTo} from './dataFile/links.js';
import Links from './footerSection/Links';
import Footer from './footerSection/Footer';

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
    return (
        <div>
            <section id="landingSection">
                <div className="landingSection--container">
                    <div className="landingSection--containerContent">
                        <Header />
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
                        <div className="footerSection--containerDeliveryPlacesLink">
                                {
                                    DeliverTo.map(links => <Links data={links} />)
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
