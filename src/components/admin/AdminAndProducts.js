import React, { useState, useEffect } from 'react';
import AdminCard from '../../components/admin/AdminCard';

function AdminAndProducts() {
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

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id!== id));
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-3 gap-4">
          {products.map(product => (
            <AdminCard key={product.id} product={product} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminAndProducts;
