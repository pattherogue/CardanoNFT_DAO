import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, children }) => {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    className: '',
};

export default Button;
