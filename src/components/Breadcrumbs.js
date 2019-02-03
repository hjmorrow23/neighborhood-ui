import React from 'react';
import BreadcrumbStyles from './styles/BreadcrumbStyles';

const BreadCrumbs = () => {
    return (
        <BreadcrumbStyles>
            <ul className="breadcrumb-list">
                <li className="breadcrumb">
                    <a href="" className="breadcrumb-link">Home</a>
                </li>
                <li className="breadcrumb bullet">
                    <a href="" className="breadcrumb-link">Chicago</a>
                </li>
                <li className="breadcrumb bullet">
                    <a href="" className="breadcrumb-link current-link">Beverly</a>
                </li>
            </ul>
        </BreadcrumbStyles>
    );
};

export default BreadCrumbs;