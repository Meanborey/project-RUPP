import React from 'react';
import { Link } from 'react-router-dom';
import placeholderImage from '../lib/logo/placeholder.jpg';

const Card = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="max-w-xs bg-white border-gray-200 rounded-lg shadow m-4 py-4 px-2 overflow-hidden hover:scale-105 transition-transform hover:border-blue-600">
        <img
          src={product.image || placeholderImage}
          alt={product.productName}
          className="w-80 h-80"
          loading="lazy"
          onError={(e) => {
            e.target.src = placeholderImage;
          }}
        />
        <div className="flex justify-between p-3">
          <a
            href="#"
            className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            ${product.price}
          </a>
        </div>
        <div className="p-3">
          <a href="#">
            <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900">
              {product.productName}
            </h5>
          </a>
          <p className='line-clamp-1'>{product.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
