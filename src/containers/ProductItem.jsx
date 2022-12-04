import React from 'react';
import '@styles/ProductItem.scss';
import Carousel from '@components/Carousel';
import { formatMoney } from '@helpers/formatHelper';
import search from '@icons/search.png';
import share from '@icons/share.png';
import bed from '@icons/bed.png';
import warehouse from '@icons/warehouse.png';
import shower from '@icons/shower.png';
import ruler from '@icons/ruler.png';

const ProductItem = ({ product }) => {
    const move = () => {

    }
    return (
        <>

            {/* <div className="product-item flex-wrap">
                <Carousel id={product?.id} fotos={product.fotos} />
                <div className="product-item_info">
                    <div className="product-item_infoDescription">{product?.ubicacion}</div>
                    <div className="product-item_infoPrice bold">{formatMoney(product?.precio)}</div>
                </div>
            </div> */}
            <div className="col">
                <div className="card shadow-sm">
                    <Carousel id={product?.id} fotos={product.fotos} />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">
                            {formatMoney(product.precio)}
                        </h5>
                        <p style={{ height: '45px', textOverflow: 'ellipsis' }}
                            className="card-subtitle fst-italic text-nowrap overflow-hidden">
                            {product.ubicacion}
                        </p>
                        <div className='row row-cols-4 mb-4'>
                            <div className="col d-flex justify-content-center p-0" style={{borderRight: '1px solid'}}>
                                <img height={20} src={bed} style={{ opacity: '0.6' }} className="mx-1" />
                                <small className='card-text mx-0'>
                                    3
                                </small>
                            </div>
                            <div className="col d-flex justify-content-center p-0" style={{borderRight: '1px solid'}}>
                                <img height={20} src={shower} style={{ opacity: '0.6' }} className="mx-1" />
                                <small className='card-text mx-0'>
                                    2.5
                                </small>
                            </div>
                            <div className="col d-flex justify-content-center p-0" style={{borderRight: '1px solid'}}>
                                <img height={20} src={warehouse} style={{ opacity: '0.6' }} className="mx-1" />
                                <small className='card-text mx-2'>
                                    1
                                </small>
                            </div>
                            <div className="col d-flex justify-content-center p-0" >
                                <img height={20} src={ruler} style={{ opacity: '0.6' }} className="mx-1" />
                                <small className='card-text mx-0'>
                                    300mts²
                                </small>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm p-2 btn-outline-secondary">
                                    Ver más
                                    <img height={20} src={search} style={{ opacity: '0.6' }} className="mx-1" />
                                </button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">
                                    Compartir
                                    <img height={20} src={share} style={{ opacity: '0.6' }} className="mx-1" />
                                </button>
                            </div>
                            <small className="text-muted">Código: {product?.id}</small>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default ProductItem;