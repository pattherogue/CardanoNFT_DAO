import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="card">
            {imageUrl && <img src={imageUrl} className="card-image" alt={title} />}
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
};

export default Card;
