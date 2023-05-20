
const CarCard = (car) => {
   const carDiv = document.createElement('div');
   carDiv.classList.add('col');
   carDiv.classList.add('p-0');

   carDiv.innerHTML = (
       `<div class="card">
           <img src="img/car_image.jpeg" class="card-img-top" alt="${car.name}">
           <div class="card-body">
               <h5 class="card-title">${car.name}</h5>
               <p class="card-text">${car.price} USD</p>
               <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
       </div>`
   )

   return carDiv;
};

export default CarCard;
