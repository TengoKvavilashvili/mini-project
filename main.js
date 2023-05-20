import CarCard from './components/carCard.js';
import generateCars from './data.js';

const renderCars = () => {
  const cars = generateCars();
  const carsWrapper = document.getElementById('cars-wrapper');
  carsWrapper.innerHTML = '';
  cars.forEach((car) => {
    const carCardHtml = CarCard(car);
   //  const carCardElement = document.createElement('div');
   //  carCardElement.innerHTML = carCardHtml.innerHTML;

   //  const carImageElement = document.createElement('img');
   //  carImageElement.src = `img/car_image.jpeg`;
   //  carCardElement.appendChild(carImageElement);
    

    carsWrapper.appendChild(carCardHtml);
  });
};

const carsRenderButton = document.getElementById('cars-render-button');
carsRenderButton.onclick = renderCars;
