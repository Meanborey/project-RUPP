// AdminCard.js
import React from 'react';

function AdminCard({ product, onDelete }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/v1/products/${product.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      onDelete(product.id); // Notify the parent component about the deletion
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <tr className="bg-white border-b shadow-md transition-transform hover:scale-105 overflow-hidden">
      <td className="p-4">
        <img src={product.image} className="w-16 md:w-32 max-w-full max-h-full" alt={product.title} />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-black">
        {product.productName}
      </td>
      <td className="px-6 py-4">
        <span className='text-ellipsis text-20 '>{product.type}</span>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-black">
        {product.price}$
      </td>
      <td className="px-6 py-4">
        <a href="#" onClick={handleDelete} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
      </td>
    </tr>
  );
}

export default AdminCard;
