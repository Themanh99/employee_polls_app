import React from 'react';

const Input = ({ size = 'medium', error = '', style = {}, ...props }) => {
    let baseClasses = `block w-full rounded-lg focus:outline-none transition duration-300 ease-in-out`;

    let sizeClasses;
    switch (size) {
        case 'small':
            sizeClasses = `px-2 py-1 text-sm`;
            break;
        case 'medium':
            sizeClasses = `px-3 py-2 text-base`;
            break;
        case 'large':
            sizeClasses = `px-4 py-3 text-lg`;
            break;
        default:
            sizeClasses = `px-3 py-2 text-base`;
    }

    const errorClasses = error ? 'border-red-500' : 'border-gray-300';
    const focusClasses = 'focus:border-blue-500 focus:ring focus:ring-blue-200';
    const classes = `${baseClasses} ${sizeClasses} border ${errorClasses} ${focusClasses}`;

    return (
        <div style={style}>
            <input className={classes} {...props} />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default Input;
