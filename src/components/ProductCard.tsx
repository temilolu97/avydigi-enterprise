import React from 'react'
import { useCart, type CartItem } from '../contexts/CartContext';
import { Laptop, Phone, Star } from 'lucide-react';
import { formatCurrency } from '../utils/helpers';
import type { Product } from '../data/products';


interface ProductCardProps {
    product: Product;
    onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <div
            onClick={onClick}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
        >
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-6">
                <div className="flex items-center mb-2">
                    {product.category === 'smartphone' ? (
                        <Phone className="h-4 w-4 text-blue-600 mr-2" />
                    ) : (
                        <Laptop className="h-4 w-4 text-blue-600 mr-2" />
                    )}
                    <span className="text-sm text-gray-500 capitalize">{product.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.specs}</p>
                {product.rating && <div className="flex justify-center items-center mb-3">
                     <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`h-4 w-4 ${
                                    i < Math.floor(product?.rating)
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>}
                <div className=" justify-between">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                        {formatCurrency(product.price)}
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className="bg-blue-600 text-white whitespace-nowrap px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard