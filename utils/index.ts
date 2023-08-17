export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};

export const fetchCars = async () => {
	const headers = {
		'X-RapidAPI-Key': '6a54109d9amsh48bc6ef782dc2abp1c75bbjsnd59073f28a4b',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	};
	const url =
		'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

	const response = await fetch(url, { headers });

	const result = await response.json();

	return result;
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
	const url = new URL('https://cdn.imagin.studi/getimage');

	const { make, year, model } = car;

	url.searchParams.append('customer', 'mamolinadev');
	url.searchParams.append('make', make);
	url.searchParams.append('model', model.split(' ')['']);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('modelYear', `${year}`);
	url.searchParams.append('customer', 'mamolinadev');
	url.searchParams.append('angle', `${angle}`);

	return `${url}`;
};
