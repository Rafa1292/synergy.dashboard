import React, { useState, useEffect } from 'react';
import ProductItem from '@containers/ProductItem'

const ProductItems = () => {
    const [items, setItems] = useState([]);


    const GetItems = async () => {
        const tempItems = [
            {
                id: 1,
                precio: 55000000,
                ubicacion: 'Alajuela, Grecia, Centro',
                fotos: [
                    'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg'
                ]
            },
            {
                id: 2,
                precio: 46000000,
                ubicacion: 'Alajuela, Grecia, Los Angeles',
                fotos: [
                    'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_960_720.jpg',
                    'https://speoimages.blob.core.windows.net/paqtestimages/a01229bd-dec9-406a-9e5e-f006bd4970c4.jpg',
                    'https://speoimages.blob.core.windows.net/paqtestimages/4c9861cf-67ea-4629-bcbf-27a4755fc594.jpg'
                ]
            },
            {
                id: 3,
                precio: 38000000,
                ubicacion: 'Alajuela, Grecia, San Roque',
                fotos: [
                    'https://c1.wallpaperflare.com/preview/260/583/682/new-home-for-sale-home-house.jpg',
                    'https://speoimages.blob.core.windows.net/paqtestimages/d8ef5239-8561-453e-8bc4-a17a1071ae4a.jpg',
                    'https://speoimages.blob.core.windows.net/paqtestimages/a6766f57-2ef4-49ad-b102-99b49acdeb88.jpg'
                ]
            },
            {
                id: 4,
                precio: 25000000,
                ubicacion: 'Alajuela, Grecia, Rincon de Arias',
                fotos: [
                    'https://speoimages.blob.core.windows.net/paqtestimages/4fbb4e46-71ed-49dd-b784-37cfc2cfd88f.jpg',
                    'https://speoimages.blob.core.windows.net/paqtestimages/aa3808ca-e062-49eb-87e9-1ab8b19d03e5.jpg',
                    'https://speoimages.blob.core.windows.net/paqtestimages/4b72d499-f984-4543-8d98-ae2ee9b83677.jpg'
                ]
            },
            {
                id: 5,
                precio: 55000000,
                ubicacion: 'Alajuela, Grecia, Centro',
                fotos: [
                    'https://speoimages.blob.core.windows.net/paqtestimages/12b60f66-302c-45a8-afe8-39a8c0e7b334.jpg',
                    'https://speoimages.blob.core.windows.net/paqtestimages/0a21e809-65d0-4370-abd3-aed45ea1875a.jpg',
                    'https://speoimages.blob.core.windows.net/paqtestimages/4adcccda-7a92-4143-85e0-abd9af705892.jpg'
                ]
            },
            {
                id: 6,
                precio: 46000000,
                ubicacion: 'Alajuela, Grecia, Los Angeles',
                fotos: [
                    'https://speoimages.blob.core.windows.net/paqtestimages/a01229bd-dec9-406a-9e5e-f006bd4970c4.jpg',
                    'https://speoimages.blob.core.windows.net/paqtestimages/bb730e12-8888-42ff-8ea8-4be0bf8a40aa.jpg',
                    'https://speoimages.blob.core.windows.net/paqtestimages/4c9861cf-67ea-4629-bcbf-27a4755fc594.jpg'
                ]
            },
            {
                id: 7,
                precio: 38000000,
                ubicacion: 'Alajuela, Grecia, San Roque',
                fotos: [
                    'https://speoimages.blob.core.windows.net/paqtestimages/d8ef5239-8561-453e-8bc4-a17a1071ae4a.jpg',
                    'https://speoimages.blob.core.windows.net/paqtestimages/08e6dc93-9dd1-4876-a89a-36f952b2a9a4.jpg',
                    'https://speoimages.blob.core.windows.net/paqtestimages/a6766f57-2ef4-49ad-b102-99b49acdeb88.jpg'
                ]
            },
            {
                id: 8,
                precio: 25000000,
                ubicacion: 'Alajuela, Grecia, Rincon de Arias',
                fotos: [
                    'https://speoimages.blob.core.windows.net/paqtestimages/aa3808ca-e062-49eb-87e9-1ab8b19d03e5.jpg',
                    'https://speoimages.blob.core.windows.net/paqtestimages/4fbb4e46-71ed-49dd-b784-37cfc2cfd88f.jpg',
                    'https://speoimages.blob.core.windows.net/paqtestimages/4b72d499-f984-4543-8d98-ae2ee9b83677.jpg'
                ]
            }
        ];

        setItems(tempItems);
    }

    useEffect(() => {
        GetItems()
    }, [])



    return (
        <>

            <div className="container py-2">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">

                        {items.map(x => (
                            <ProductItem key={x.id} product={x} />
                        ))}
                </div>
            </div>
            <div className="col-12 d-flex center flex-wrap" style={
                {
                    overflow: 'hidden'
                }
            }>

            </div>
        </>
    );
}

export default ProductItems;