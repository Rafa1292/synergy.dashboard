import React from 'react';
import '@styles/ProductItem.scss'
import Carousel from '@components/Carousel'
import {formatMoney} from '@helpers/formatHelper';

const ProductItem = ({ product }) => {
    const move = () => {

    }
    return (
        <>
            <div className="product-item flex-wrap">
                <Carousel id={product?.id} fotos={product.fotos}/>
                <div className="product-item_info">
                    <div className="product-item_infoDescription">{product?.ubicacion}</div>
                    <div className="product-item_infoPrice bold">{formatMoney(product?.precio)}</div>
                </div>
            </div>
        </>
    );
}

export default ProductItem;