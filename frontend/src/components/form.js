import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, children }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        onChange: handleChange,
                        value: formData[child.props.name] || '',
                    });
                }
                return child;
            })}
            <button type="submit" className="form-submit">Submit</button>
        </form>
    );
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Form;
