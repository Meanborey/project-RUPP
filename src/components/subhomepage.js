import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Pageheader from './Pageheader';
import Card from './Card';
import Footer from './Footer';

export default function Subhomepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/v1/products/all');
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-gray-200'>
      <Navbar />
      <Pageheader />
      <div className='flex justify-center'>
        <div className='max-w-screen-xl'>
          <div className='flex'>
            <a href='/allProducts' className='mx-2 text-24 hover:underline'>All Products</a>
            <svg
              className='mt-2'
              width='11'
              height='18'
              viewBox='0 0 13 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.0929 12.677L2.98301 23.1468C2.54365 23.6517 1.83134 23.6517 1.39202 23.1468L0.329509 21.9256C-0.109101 21.4216 -0.109944 20.6046 0.327634 20.0993L7.54737 11.7627L0.327634 3.42618C-0.109944 2.92091 -0.109101 2.10393 0.329509 1.59984L1.39202 0.378712C1.83138 -0.126237 2.5437 -0.126237 2.98301 0.378712L12.0928 10.8485C12.5322 11.3534 12.5322 12.172 12.0929 12.677Z'
                fill='black'
              />
            </svg>
          </div>
          <div className='flex flex-wrap justify-center'>
          {products
          .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
          .slice(0, 4)
          .map(product => (
            <Card key={product.id} product={product} />
          ))}


        </div>
        <div className='flex'>
  <a href='/computer' className='mx-2 text-24 hover:underline'>Computer</a>
  <svg
    className='mt-2'
    width='11'
    height='18'
    viewBox='0 0 13 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12.0929 12.677L2.98301 23.1468C2.54365 23.6517 1.83134 23.6517 1.39202 23.1468L0.329509 21.9256C-0.109101 21.4216 -0.109944 20.6046 0.327634 20.0993L7.54737 11.7627L0.327634 3.42618C-0.109944 2.92091 -0.109101 2.10393 0.329509 1.59984L1.39202 0.378712C1.83138 -0.126237 2.5437 -0.126237 2.98301 0.378712L12.0928 10.8485C12.5322 11.3534 12.5322 12.172 12.0929 12.677Z'
      fill='black'
    />
  </svg>
</div>
<div className='flex flex-wrap justify-center'>
  {products.filter(product => product.type === 'computer').slice(0, 4).map(product => (
    <Card key={product.id} product={product} />
  ))}
</div>
<div className='flex'>
  <a href='/phone' className='mx-2 text-24 hover:underline'>Phone</a>
  <svg
    className='mt-2'
    width='11'
    height='18'
    viewBox='0 0 13 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12.0929 12.677L2.98301 23.1468C2.54365 23.6517 1.83134 23.6517 1.39202 23.1468L0.329509 21.9256C-0.109101 21.4216 -0.109944 20.6046 0.327634 20.0993L7.54737 11.7627L0.327634 3.42618C-0.109944 2.92091 -0.109101 2.10393 0.329509 1.59984L1.39202 0.378712C1.83138 -0.126237 2.5437 -0.126237 2.98301 0.378712L12.0928 10.8485C12.5322 11.3534 12.5322 12.172 12.0929 12.677Z'
      fill='black'
    />
  </svg>
</div>
<div className='flex flex-wrap justify-center'>
  {products.filter(product => product.type === 'phone').slice(0, 4).map(product => (
    <Card key={product.id} product={product} />
  ))}
</div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
