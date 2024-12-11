import React from 'react';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-800 to-red-900">
      <Navigation />
      
      {/* Main Content */}
      <div className="relative">
        {/* Hero Section */}
        <div className="text-white shadow-lg">
          <div className="container mx-auto px-6 py-24">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                ITCF Global Services Corp
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Delivering innovative solutions for your business needs worldwide
              </p>
              <button className="bg-white text-red-800 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-gray-100 shadow-lg">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-red-800 mb-4 flex justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">IT Consulting</h3>
                <p className="text-gray-600">Expert guidance for your technology infrastructure and digital transformation journey.</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-red-800 mb-4 flex justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Global Solutions</h3>
                <p className="text-gray-600">Comprehensive services tailored to meet international business requirements.</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-red-800 mb-4 flex justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Innovation</h3>
                <p className="text-gray-600">Cutting-edge technologies and innovative approaches to solve complex challenges.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-900 text-white shadow-lg py-24 px-6">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to learn how ITCF Global Services Corp can help your organization thrive in the digital age.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 