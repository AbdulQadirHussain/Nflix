import React from 'react';

const ImagesCard = (props) => {
    return (
        <>
        <img src={props.imgs} alt='pic' className='card_img'/>;
        </>
    );
}

export default ImagesCard;