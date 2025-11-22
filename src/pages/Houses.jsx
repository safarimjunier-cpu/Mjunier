import React, { useState } from 'react'
import PropertyCard from '../components/propertyCard'

const Houses = () => {
  const [filter, setFilter] = useState('all')
  
  const houses = [
    {
      id: 1,
      title: 'Modern Family Home',
      location: 'Downtown, New York',
      price: 750000,
      bedrooms: 4,
      bathrooms: 3,
      area: 2200,
      type: 'For Sale',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Luxury Apartment',
      location: 'Manhattan, NY',
      price: 1200000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      type: 'For Sale',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Suburban Villa',
      location: 'Brooklyn, NY',
      price: 2500,
      bedrooms: 5,
      bathrooms: 4,
      area: 3200,
      type: 'For Rent',
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      title: 'City Center Condo',
      location: 'Manhattan, NY',
      price: 1800,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      type: 'For Rent',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      title: 'Waterfront Mansion',
      location: 'Long Island, NY',
      price: 3500000,
      bedrooms: 6,
      bathrooms: 5,
      area: 4500,
      type: 'For Sale',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 6,
      title: 'Garden Apartment',
      location: 'Queens, NY',
      price: 2000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1500,
      type: 'For Rent',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  const filteredHouses = filter === 'all' 
    ? houses 
    : houses.filter(house => house.type.toLowerCase() === filter.toLowerCase())

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Browse Houses</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your perfect home from our extensive collection of residential properties for sale and rent.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              All Properties
            </button>
            <button
              onClick={() => setFilter('for sale')}
              className={`px-4 py-2 text-sm font-medium ${
                filter === 'for sale' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              For Sale
            </button>
            <button
              onClick={() => setFilter('for rent')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                filter === 'for rent' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              For Rent
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHouses.map(house => (
            <PropertyCard key={house.id} property={house} />
          ))}
        </div>

        {filteredHouses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Houses
