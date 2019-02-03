import React from 'react';
import BannerStyles from './styles/BannerStyles';

const Banner = () => {
    return (
        <BannerStyles>
            <div className="banner-text-wrapper">
                
                <h1>Beverly</h1>
                <h2>Chicago, Illinois</h2>
            </div>
            <div className="banner-buttons">
                <a href="">Save</a>
                <a href="">Share</a>
            </div>
        </BannerStyles>
    );
};

export default Banner;