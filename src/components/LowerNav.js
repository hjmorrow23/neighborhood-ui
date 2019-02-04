import React from 'react';
import LowerNavStyles from './styles/LowerNavStyles';

const LowerNav = () => {
    return (
        <LowerNavStyles>
            <ul>
                <li>
                    <a href="">Homes for Sale</a>
                </li>
                <li>
                    <a href="">Info</a>
                </li>
                <li>
                    <a href="">Around</a>
                </li>
                <li>
                    <a href="">Schools</a>
                </li>
                <li>
                    <a href="">Reviews</a>
                </li>
                <li>
                    <a href="">Trends</a>
                </li>
                <li>
                    <a href="">Similar Neighborhoods</a>
                </li>
            </ul>
        </LowerNavStyles>
    );
};

export default LowerNav;