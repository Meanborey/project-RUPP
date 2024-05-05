import products from '../data';
import placeholderImage from '../lib/logo/placeholder.jpg';

export default function Cart() {
  return (
    <section>
      {products.map((product) => (
        <div key={product.id} className="max-w-xs bg-white border-gray-200 rounded-lg shadow m-2 overflow-hidden hover:scale-105 transition-transform hover:border-blue-600">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={product.image || placeholderImage}
              alt={product.name}
              loading="lazy"
              onError={(e) => {
                e.target.src = placeholderImage;
              }}
            />
          </a>
          <div className="flex justify-between p-3">
            <a
              href="#"
              className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              {product.price}
            </a>
            <a href="#">
              <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900">{product.category}</h5>
            </a>
          </div>
          <div className="p-3">
            <p className="mb-1 text-gray-700"><span className="font-semibold">Type:</span> {product.type}</p>
            <p className="mb-1 text-gray-700"><span className="font-semibold">Brand:</span> {product.Brand}</p>
            <p className="mb-2 text-gray-700"><span className="font-semibold">Description:</span> {product.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}