import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Carousel from '@components/Carousel';
import IconGrid from '@components/IconGrid';
import AppContext from '../context/AppContext';
import '@styles/Product.scss';
import bed from '@icons/bed.png';
import warehouse from '@icons/warehouse.png';
import shower from '@icons/shower.png';
import ruler from '@icons/ruler.png';
import { formatMoney } from '@helpers/formatHelper';
import ProductItem from '../containers/ProductItem';

const Product = () => {
    const { getProduct } = useContext(AppContext);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loader, setLoaer] = useState(true);

    useEffect(async () => {
        const product = await getProduct(id);
        setProduct(product);
        setLoaer(false);
    }, []);


    return (
        <>
            {
                !loader &&
                <div className="col-12 d-flex flex-wrap justify-content-center ">
                    <div className=" col-12 col-xl-7  d-flex flex-wrap justify-content-center product mb-4">
                        <Carousel id={product.id} fotos={product.fotos} footer={true} />
                    </div>
                    <div className="col-12 col-xl-7 d-flex flex-wrap justify-content-start fs-3">
                        <strong className='mx-2' style={{ fontWeight: '900' }}>
                            {formatMoney(product.precio)}
                        </strong>
                    </div>
                    <div className='col-12 row col-xl-6 py-4 row-cols-2 m-0 row-cols-md-2 mb-4'>
                        <div className="col row row-cols-2 m-0 p-0">
                            <div className="col d-flex justify-content-center p-0 ">
                                <img height={20} src={bed} style={{ opacity: '0.6' }} className="mx-1" />
                                <small className='card-text mx-0'>
                                    3 dormitorios
                                </small>
                            </div>
                            <div className="col d-flex justify-content-center p-0 ">
                                <img height={20} src={shower} style={{ opacity: '0.6' }} className="mx-1" />
                                <small className='card-text mx-0'>
                                    2.5 baños
                                </small>
                            </div>
                        </div>
                        <div className="col row row-cols-2 m-0 p-0">
                            <div className="col d-flex justify-content-center p-0 " >
                                <img height={20} src={warehouse} style={{ opacity: '0.6' }} className="mx-1" />
                                <small className='card-text mx-0'>
                                    1 parqueo
                                </small>
                            </div>
                            <div className="col d-flex justify-content-center p-0" >
                                <img height={20} src={ruler} style={{ opacity: '0.6' }} className="mx-1" />
                                <small className='card-text mx-0'>
                                    300
                                    <span style={{ fontSize: '10px' }}>
                                        mts²
                                    </span>
                                </small>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-7 p-2 py-3 fs-6">
                        Rias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.
                    </div>
                    <div className="col-12 col-xl-7 d-flex flex-wrap py-4">

                        <span className="badge bg-dark m-2 p-2">Aire acondicionado</span>
                        <span className="badge bg-dark m-2 p-2">Seguridad 24/7</span>
                        <span className="badge bg-dark m-2 p-2">Alajuela</span>
                    </div>

                    <div className="col-12 col-xl-7 d-flex flex-wrap">
                        <IconGrid />
                    </div>

                    <div className="col-12 d-flex flex-wrap justify-content-center py-3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15713.40379544565!2d-84.32052165269852!3d10.07030296349587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa058534e69fd45%3A0x5017b20e09a96bdb!2sArje!5e0!3m2!1ses-419!2scr!4v1670561392538!5m2!1ses-419!2scr"
                            width={600}
                            height={450}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>
                </div>
            }
        </>

    );
}

export default Product;