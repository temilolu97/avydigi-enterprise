import { ShoppingCart, Trash2, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/helpers';
import { useCart } from '../contexts/CartContext';
import type { CartItem } from '../contexts/CartContext';

const Cart = () => {
    const { cart, removeFromCart, getTotalPrice, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center py-12">
                        <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
                        <p className="text-gray-600 mb-8">Start shopping to add items to your cart.</p>
                        <Link
                            to="/products"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
                    <button
                        onClick={clearCart}
                        className="text-red-600 hover:text-red-700 font-medium"
                    >
                        Clear Cart
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm">
                            {cart.map((item: CartItem) => (
                                <div key={item.id} className="flex items-center p-6 border-b last:border-b-0">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                    <div className="flex-1 ml-4">
                                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                        <p className="text-gray-600">{item.specs}</p>
                                        <p className="text-lg font-bold text-gray-900 mt-1">
                                            {formatCurrency(item.price)}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-2 text-red-600 hover:text-red-700 ml-4"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
                            
                            <div className="space-y-3 mb-6">
                                {cart.map((item: CartItem) => (
                                    <div key={item.id} className="flex justify-between text-sm">
                                        <span>{item.name} × {item.quantity}</span>
                                        <span>{formatCurrency(item.price * item.quantity)}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t pt-4">
                                <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
                                    <span>Total</span>
                                    <span>{formatCurrency(getTotalPrice())}</span>
                                </div>

                                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3">
                                    Proceed to Checkout
                                </button>
                                
                                <Link
                                    to="/products"
                                    className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center block"
                                >
                                    Continue Shopping
                                </Link>
                            </div>

                            {getTotalPrice() >= 300000 && (
                                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="flex items-center">
                                        <Truck className="h-5 w-5 text-green-600 mr-2" />
                                        <span className="text-sm font-medium text-green-800">
                                            Congratulations! You qualify for free delivery in Lagos.
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart