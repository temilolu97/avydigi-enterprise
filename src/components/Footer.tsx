import { RotateCcw, Shield, Truck } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">AVYDIGI ENTERPRISE</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted destination for premium smartphones and high-performance laptops. 
              We bring you technology that empowers your lifestyle.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center">
                <span className="font-medium mr-2">Address:</span>
                12, Example Street, Ikeja, Lagos State, Nigeria
              </p>
              <p className="flex items-center">
                <span className="font-medium mr-2">Phone:</span>
                +234 802 123 4567
              </p>
              <p className="flex items-center">
                <span className="font-medium mr-2">Email:</span>
                info@avydigi.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/cart" className="text-gray-400 hover:text-white transition-colors">Cart</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Payment Options</li>
              <li>Return Policy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 www.avydigi.com — Powered by AVYDIGI ENTERPRISE
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-400">1-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-gray-400">Free Delivery Lagos</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="h-4 w-4 text-orange-500" />
                <span className="text-sm text-gray-400">5-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer