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
import { Link } from "react-router-dom";

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
            <div className="col" >
                <div className="card shadow-sm">
                    <Carousel id={product?.id} fotos={product.fotos} />
                        <p className="card-header flex-wrap d-flex fw-bold fs-5">
                            {formatMoney(product.precio)}
                        <span style={{textOverflow: 'ellipsis' }}
                            className=" fs-6 col-12 fst-italic text-nowrap overflow-hidden">
                            {product.ubicacion}
                                </span>
                        </p>
                    <div className="card-body ">
                        <div className='row row-cols-2 m-0 row-cols-md-2 mb-4'>
                            <div className="col row row-cols-2 m-0 p-0">
                                <div className="col d-flex justify-content-center p-0 ">
                                    <img height={20} src={bed} style={{ opacity: '0.6' }} className="mx-1" />
                                    <small className='card-text mx-0'>
                                        3
                                    </small>
                                </div>
                                <div className="col d-flex justify-content-center p-0 ">
                                    <img height={20} src={shower} style={{ opacity: '0.6' }} className="mx-1" />
                                    <small className='card-text mx-0'>
                                        2.5
                                    </small>
                                </div>
                            </div>
                            <div className="col row row-cols-2 m-0 p-0">
                                <div className="col d-flex justify-content-center p-0 " >
                                    <img height={20} src={warehouse} style={{ opacity: '0.6' }} className="mx-1" />
                                    <small className='card-text mx-0'>
                                        1
                                    </small>
                                </div>
                                <div className="col d-flex justify-content-center p-0" >
                                    <img height={20} src={ruler} style={{ opacity: '0.6' }} className="mx-1" />
                                    <small className='card-text mx-0'>
                                        300
                                        <span  style={{fontSize: '10px'}}>
                                        mts²
                                        </span>
                                    </small>

                                </div>
                            </div>
                        </div>
                        <div className="d-flex  justify-content-between align-items-center">
                            <div className="btn-group">
                                <Link to={`/Product/${product?.id}`}>
                                    <button type="button" className="btn btn-sm p-2 btn-outline-secondary">
                                        <div className="col-12 m-0 p-0 d-flex align-items-center">
                                            <small>
                                                Ver más
                                            </small>
                                            <div className="search-action mx-1"></div>
                                        </div>
                                    </button>
                                </Link>
                                <button type="button" className="btn btn-sm btn-outline-secondary ">
                                    <div className="col-12 m-0 p-0 d-flex align-items-center">
                                        <small>
                                            Compartir
                                        </small>
                                        <div className="share-action mx-1"></div>
                                    </div>
                                </button>
                            </div>
                            <small className="text-muted text-center">Código: {product?.id}</small>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default ProductItem;