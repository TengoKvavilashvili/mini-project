function generateCars() {
   const cars = [];
   const minPrice = 50_000;
   const maxPrice = 100_000;

   for (let i = 0; i < 8; i++) {
       cars.push({
           name: `car ${i}`,
           details: "Fast, Cool, New",
           price: Math.floor((Math.random() * (maxPrice + 1 - minPrice))) + minPrice
       })
   }
   return cars;
}

export default generateCars;
