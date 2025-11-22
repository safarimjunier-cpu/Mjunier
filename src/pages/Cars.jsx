import React from 'react'
import CarCard from '../components/CarCard'

const cars = [
	{
		id: 1,
		title: 'Toyota RAV4',
		type: 'SUV',
		price: 70,
		image: '/images/IMG-20251115-WA0000.jpg',
		year: 2020,
		mileage: 45000,
		transmission: 'Automatic',
		fuelType: 'Petrol',
		condition: 'Used',
		ownerType: 'Dealer',
	},
	{
		id: 2,
		title: 'Nissan X-Trail',
		type: 'SUV',
		price: 65,
		image: '/images/IMG-20251115-WA0001.jpg',
		year: 2019,
		mileage: 52000,
		transmission: 'Automatic',
		fuelType: 'Diesel',
		condition: 'Used',
		ownerType: 'Owner',
	},
	{
		id: 3,
		title: 'Honda Civic',
		type: 'Sedan',
		price: 55,
		image: '/images/IMG-20251115-WA0002.jpg',
		year: 2018,
		mileage: 60000,
		transmission: 'Manual',
		fuelType: 'Petrol',
		condition: 'Used',
		ownerType: 'Dealer',
	},
	{
		id: 4,
		title: 'Mazda CX-5',
		type: 'SUV',
		price: 72,
		image: '/images/IMG-20251115-WA0003.jpg',
		year: 2021,
		mileage: 30000,
		transmission: 'Automatic',
		fuelType: 'Petrol',
		condition: 'Used',
		ownerType: 'Dealer',
	},
	{
		id: 5,
		title: 'Toyota Corolla',
		type: 'Sedan',
		price: 50,
		image: '/images/IMG-20251115-WA0004.jpg',
		year: 2017,
		mileage: 80000,
		transmission: 'Manual',
		fuelType: 'Petrol',
		condition: 'Used',
		ownerType: 'Owner',
	},
	{
		id: 6,
		title: 'Ford Ranger',
		type: 'Pickup',
		price: 90,
		image: '/images/IMG-20251115-WA0005.jpg',
		year: 2022,
		mileage: 20000,
		transmission: 'Automatic',
		fuelType: 'Diesel',
		condition: 'New',
		ownerType: 'Dealer',
	},
]

export default function Cars() {
	return (
		<div className="mt-10 max-w-6xl mx-auto px-4">
			<h1 className="text-3xl font-bold text-primary text-center">Available Cars</h1>
			<p className="text-center text-gray-700 mt-2">Browse our car selection below. For enquiries call <a href="tel:0110870855" className="font-semibold">0110870855</a>.</p>

			<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
				{cars.map((car) => (
					<CarCard key={car.id} car={car} />
				))}
			</div>
		</div>
	)
}
