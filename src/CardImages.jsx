import React from 'react';

const CardImages = (props) => {
    return (
        <>
        <img src={props.imgs} alt='pic' className='card_img'/>;
        </>
    );
}

export default CardImages;