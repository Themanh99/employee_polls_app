import React from 'react';

const Button = ({ type = 'default', size = 'medium', disabled = false, onClick, children, className }) => {
    let baseClasses = `font-semibold rounded-lg focus:outline-none transition duration-300 ease-in-out`;

    let sizeClasses;
    switch (size) {
        case 'small':
            sizeClasses = `px-3 py-1 text-sm`;
            break;
        case 'medium':
            sizeClasses = `px-4 py-2 text-base`;
            break;
        case 'large':
            sizeClasses = `px-5 py-3 text-lg`;
            break;
        default:
            sizeClasses = `px-4 py-2 text-base`;
    }

    let typeClasses;
    switch (type) {
        case 'primary':
            typeClasses = `bg-blue-500 text-white hover:bg-blue-600`;
            break;
        case 'secondary':
            typeClasses = `bg-gray-500 text-white hover:bg-gray-600`;
            break;
        case 'default':
            typeClasses = `bg-white text-gray-800 border border-gray-300 hover:bg-gray-100`;
            break;
        default:
            typeClasses = `bg-white text-gray-800 border border-gray-300 hover:bg-gray-100`;
    }

    if (disabled) {
        typeClasses += ` opacity-50 cursor-not-allowed`;
    }

    const classes = `${baseClasses} ${sizeClasses} ${typeClasses} ${className}`;

    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
