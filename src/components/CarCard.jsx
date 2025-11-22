import React from 'react'

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
          {car.type}
        </div>
        {car.featured && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{car.title}</h3>
          <span className="text-green-600 font-bold text-lg">${car.price.toLocaleString()}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{car.location}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1z" />
              <path fillRule="evenodd" d="M4 4a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3V7a3 3 0 00-3-3H4zm12 2H4a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{car.year}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M10 6a1 1 0 011 1v3h2a1 1 0 110 2h-3a1 1 0 01-1-1V7a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{car.mileage.toLocaleString()} miles</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
              <path d="M14 7a1 1 0 00-1 1v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V8a1 1 0 00-1-1z" />
            </svg>
            <span className="text-sm">{car.transmission}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
            <span className="text-sm">{car.fuelType}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              car.condition === 'New' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {car.condition}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            {car.ownerType}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300 text-sm font-medium">
            View Details
          </button>
          <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300 text-sm font-medium">
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  )
}

export default CarCard