import React from 'react';

const Card = (props) => {
    // console.log(props)
    return (
        <>
        <div className='all_cards'>
            <div className='card'>
                <img src={props.imgsrc} alt='pic' className='card_img'/>
                <div className='card_info'>
                    <span className='card_category'>{props.category}</span>
                    <h3 className='card_sname'>{props.sname}</h3>
                    <a href={props.slink} target='_blank'>
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;