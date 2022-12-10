import React, { useState, useContext, useEffect } from 'react';
import ProductItem from '@containers/ProductItem'
import Pagination from '@components/Pagination'
import AppContext from '../context/AppContext';

const ProductItems = () => {
    const { state } = useContext(AppContext);

    return (
        <>

            <div className="container py-2">
                {state.products &&
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-lg-5 g-2">

                        {state?.products?.map(x => (
                            <ProductItem key={x.id} product={x} />
                        ))}
                    </div>
                }
            </div>
            <div className="col-12 d-flex justify-content-center flex-wrap" style={{ overflow: 'hidden' }}>
                <Pagination />
            </div>

        </>
    );
}

export default ProductItems;