import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import DisplayProducts from './DisplayProducts'

export default function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchSelectedProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8081/api/v1/products/${productId}`);
                const responseData = await response.json();
                console.log('Fetched product data:', responseData.data);
                setProduct(responseData.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching selected product:', error);
                setLoading(false);
            }
        };

        fetchSelectedProduct();
    }, [productId]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/v1/products/all');
                const data = await response.json();
                if (Array.isArray(data)) {
                    setProducts(data);
                } else {
                    console.error('API response for all products is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching all products:', error);
            }
        };

        fetchAllProducts();
    }, []);

    const handleExitButtonClick = () => {
        window.history.back();
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <div className="mt-3 flex justify-center items-center">
                <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg relative">
                    <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800" onClick={handleExitButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {product && (
                        <div className="flex">
                            <img src={product.image} alt={product.productName} className="w-1/3 rounded-lg" />
                            <div className="flex flex-col justify-between p-4 w-2/3">
                                <div>
                                    <h1 className="text-2xl font-semibold text-gray-800 mb-4">{product.productName}</h1>
                                    <p className="text-gray-700 mb-4">{product.description}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-800 mb-4">${product.price}</p>
                                    <a href="https://t.me/nhaquick" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <div className='max-w-screen-xl'>
                    <div className='flex flex-wrap justify-center'>
                        {/* {products
                       .slice(0, 4)
                       .map(product => (
                            <Card key={product.id} product={product} />
                        ))} */}
                        <DisplayProducts/>
                    </div>
                </div>
            </div>
        </>
    );
}
