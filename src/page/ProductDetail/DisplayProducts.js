import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function DisplayProducts() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/v1/products/all');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setProducts(data.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div >
            {/* <Navbar /> */}
            <div className='flex justify-center'>
                <div className='max-w-screen-xl px-4'>
                    {/* Section title */}
                    <div className='flex items-center mt-4'>
                        {/* <h1 className='text-2xl font-bold'>Computers</h1> */}
                    </div>
                    {/* Products */}
                    <div className='flex flex-wrap justify-center'>
                        {products.map(product => (
                            <Card key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}
