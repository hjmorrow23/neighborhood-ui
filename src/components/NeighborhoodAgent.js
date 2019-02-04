import React from 'react';
import NeighborhoodAgentStyles from './styles/NeighborhoodAgentStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NeighborhoodAgent = () => {
    return (
        <NeighborhoodAgentStyles>
            <h1>Your neighborhood real estate expert</h1>
            <div className="agent">
                <div className="agent-img">
                    
                </div>
                <div className="agent-info">
                    <p className="agent-name">John Doe</p>
                    <p className="agent-comp">Re/max Lincoln Park</p>
                    <p className="agent-number">(555) 555-5555</p>
                    <p className="agent-rating">
                        <span className="stars">
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                        </span>5.0 <span>(1 Review)</span>
                    </p>
                </div>
            </div>
            <p className="agent-description">Want to learn more about Beverly? John is a real estate agent who specializes in helping buyers and sellers in this neighborhood.</p>
            <a href="" className="request-link">Request Info</a>
        </NeighborhoodAgentStyles>
    );
};

export default NeighborhoodAgent;