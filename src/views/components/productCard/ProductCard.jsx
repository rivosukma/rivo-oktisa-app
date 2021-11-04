import React from 'react'

import './ProductCard.css'

const ProductCard = props => {
    const {
        id,
        city,
        discount,
        name,
        price,
        imgSrc,
        seller
    } = props

    return(
        <div className='card-container'>
            <img
                alt={`img-${id}`}
                src={imgSrc}
            />
            <div className='card-information'>
                <h5>{name}</h5>
                <h5>{seller}</h5>
                <div className='card-price'>
                    <h5>
                        Harga: 
                    </h5>
                    {discount
                    ?   <>
                            <p className='txt-discount'>{price}</p>
                            <p>{price - discount}</p>
                        </>
                    :   <p>
                            {price}
                        </p>
                    }
                </div>
                <p>{city}</p>
            </div>
        </div>
    )
}
export default ProductCard