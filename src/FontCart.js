import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function FontCart() {
    return (
        <div>
            <button><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
        </div>
    )
}

export default FontCart
