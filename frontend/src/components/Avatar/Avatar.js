import React from 'react'

export default function Avatar(props) {
    const { image, alt } = props;
    return (
        <div className='flex w-9 h-9'>
            <img className='rounded-full' src={image} alt={alt} />
        </div>
    )
}
