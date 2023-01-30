class Vehicle {
    constructor(vehicleType) {
        this.vehicleType = vehicleType || "car";
        this.model = "default";
        this.reg = "000 000";
    }
}

var testInstance = new Vehicle("car");
console.log(testInstance);

// new instance with decorator functionality
var bike = new Vehicle("bike");
bike.setModel = function(modelName) {
    this.model = modelName;
}
bike.setColour = function(colour) {
    this.colour = colour;
}

bike.setModel("Suzuki");
bike.setModel("red");

console.log(bike);

// show original vehicle is still unaltered 
var secondInstance = new Vehicle("car");
console.log(secondInstance);