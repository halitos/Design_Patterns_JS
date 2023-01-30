// Prototype class
const bike = {
    numWheels: 2
};

// Use Object.create to clone 
const myBike = Object.create(bike, { type: { value: 'road' } });

console.log(myBike.__proto__ === bike); // true