import { Link, useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Laptop, Phone, RotateCcw, Shield, Star, Truck } from 'lucide-react';
import { formatCurrency } from '../utils/helpers';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const productId = id ? parseInt(id, 10) : null;
    const product = productId && !isNaN(productId) 
        ? products.find(p => p.id === productId)
        : null;
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                    <Link to="/products" className="text-blue-600 hover:underline">
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    const relatedProducts = products.filter(p =>
        p.category === product.category && p.id !== product.id
    ).slice(0, 4);
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <ol className="flex items-center space-x-2">
                        <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
                        <li className="text-gray-500">/</li>
                        <li><Link to="/products" className="text-blue-600 hover:underline">Products</Link></li>
                        <li className="text-gray-500">/</li>
                        <li className="text-gray-900">{product.name}</li>
                    </ol>
                </nav>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Product Image */}
                    <div className="aspect-w-1 aspect-h-1">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-contain rounded-lg"
                        />
                    </div>

                    {/* Product Info */}
                    <div>
                        <div className="flex items-center mb-4">
                            {product.category === 'smartphone' ? (
                                <Phone className="h-5 w-5 text-blue-600 mr-2" />
                            ) : (
                                <Laptop className="h-5 w-5 text-blue-600 mr-2" />
                            )}
                            <span className="text-sm text-gray-500 capitalize">{product.category}</span>
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                        <p className="text-lg text-gray-600 mb-4">{product.specs}</p>

                        <div className="flex items-center mb-6">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-5 w-5 ${i < Math.floor(product.rating)
                                                ? 'text-yellow-400 fill-current'
                                                : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-gray-600 ml-2">({product.rating} out of 5)</span>
                        </div>

                        <div className="mb-6">
                            <span className="text-3xl font-bold text-gray-900">
                                {formatCurrency(product.price)}
                            </span>
                        </div>

                        <p className="text-gray-700 mb-8">{product.description}</p>

                        <div className="space-y-4">
                            <button
                                onClick={() => addToCart(product)}
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Add to Cart
                            </button>

                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div className="text-center p-3 bg-white rounded-lg">
                                    <Truck className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                                    <p className="font-medium">Free Delivery</p>
                                    <p className="text-gray-600">Orders above ₦300k</p>
                                </div>
                                <div className="text-center p-3 bg-white rounded-lg">
                                    <Shield className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                    <p className="font-medium">1-Year Warranty</p>
                                    <p className="text-gray-600">Selected products</p>
                                </div>
                                <div className="text-center p-3 bg-white rounded-lg">
                                    <RotateCcw className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                                    <p className="font-medium">5-Day Returns</p>
                                    <p className="text-gray-600">Eligible items</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((relatedProduct) => (
                                <ProductCard
                                    key={relatedProduct.id}
                                    product={relatedProduct}
                                    onClick={() => window.location.href = `/product/${relatedProduct.id}`}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}

export default ProductDetail