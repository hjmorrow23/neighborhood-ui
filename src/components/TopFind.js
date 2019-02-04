import React from 'react';
import img from "../assets/img/house1.jpg";


const TopFind = props => {
    return (
        
            <a href="" className="top-find">
                <img className="top-find-image" src={img} />
                <p className="top-find-price">{props.listing.price}</p>
                <p className="top-find-address">{props.listing.address}</p>
            </a>
        
    );
};

export default TopFind;