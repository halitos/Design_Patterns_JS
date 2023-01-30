class BikeFactory {
    createBike(bikeType) {
        var bike;

        switch (bikeType) {
            case "mountain":
                bike = new MountainBike();
                break;
            case "road":
                bike = new RoadBike();
                break;
            case "gravel":
                bike = new GravelBike();
                break;
            case "hybrid":
                bike = new HybridBike();
                break;
        }

        return bike;
    }
}

class MountainBike {
    ride() {
        console.log('Riding my Mountain bike');
    }
}

class RoadBike {
    ride() {
        console.log('Riding my Road bike');
    }
}

class GravelBike {
    ride() {
        console.log('Riding my Gravel bike');
    }
}

class HybridBike {
    ride() {
        console.log('Riding my Hybrid bike');
    }
}

function run() {
    var bikeFactory = new BikeFactory();

    var mountainBike = bikeFactory.createBike('mountain');
    var roadBike = bikeFactory.createBike('road');
    var gravelBike = bikeFactory.createBike('gravel');
    var hybridBike = bikeFactory.createBike('hybrid');
    
    mountainBike.ride();
    roadBike.ride();
    gravelBike.ride();
    hybridBike.ride();
}

run();

