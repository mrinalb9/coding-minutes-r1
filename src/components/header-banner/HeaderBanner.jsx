import React, { useState, useEffect } from 'react'
import './headerBanner.css'
import headerBannerPhoneImage from '../../assets/Images/main/headerbannerphone.png'
// import headerBanner1 from '../../assets/Images/main/sept440-banner-bg-orange.svg'
// import headerBanner2 from '../../assets/Images/main/sept440-banner-bg-purple.svg'
// import Diwali from '../../assets/Images/main/DiwaliSale.png'
import Friday from '../../assets/Images/main/Blackfridaypcbanner.svg'

// const banners = [headerBanner1, headerBanner2];
const HeaderBanner = () => {

    // const [currentImage, setCurrentImage] = useState(headerBanner1);
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentImage(banners[Math.floor(Math.random() * banners.length)])
    //     }, 1000)
    //     return () => clearInterval(intervalId);
    // }, []);

    return (
        <div className="components-outer-container">
            <a href="#courses">
                <div className="header-banner-container">
                    <img className="headerImage header-banner-img" src={Friday} alt="" />
                    {/* <img className="headerImagePhone" src={headerBannerPhoneImage} alt="" /> */}

                </div>
            </a>
        </div>
    )
}

export default HeaderBanner