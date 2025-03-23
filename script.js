var header = document.getElementById("header");
var model = document.getElementById("model");
var mph = document.getElementById("mph");
var speed = document.getElementById("speed");
var range = document.getElementById("range");

const cars = {
    
    "LAMBO": {
        img: "https://images.unsplash.com/photo-1570280406792-bf58b7c59247?q=80&w=1920&auto=format&fit=crop",
        name: "Lamborghini Aventador S",
        mph: "1.8s",
        speed: "300 mph",
        range: "279 mi"
    },
    "ASTON-MARTIN": {
        img: "https://images.unsplash.com/photo-1625437102832-c612670e3d2f?q=80&w=1920&auto=format&fit=crop",
        name: "Aston Martin Volante",
        mph: "1.3s",
        speed: "350 mph",
        range: "307 mi"
    },    
    "AUDI": {
        img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1920&auto=format&fit=crop",
        name: "Audi R8",
        mph: "1.7s",
        speed: "350 mph",
        range: "500 mi"
    },
    "BMW": {
        img: "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=1920&auto=format&fit=crop",
        name: "BMW M8",
        mph: "2.5s",
        speed: "420 mph",
        range: "450 mi"
    },
    "MERCEDES": {
        img: "https://images.unsplash.com/photo-1616612164847-3069f142e232?q=80&w=1920&auto=format&fit=crop",
        name: "Mercedes-AMG",
        mph: "3.5s",
        speed: "450 mph",
        range: "350 mi"
    }
};

function changeCar(carId) {
    const car = cars[carId];
    if (car) {
        header.style.backgroundImage = `url('${car.img}')`;
        model.innerHTML = car.name;
        mph.innerHTML = car.mph;
        speed.innerHTML = car.speed;
        range.innerHTML = car.range;
    }
}

Object.keys(cars).forEach(carId => {
    let carButton = document.getElementById(carId);
    if (carButton) {
        carButton.onclick = () => changeCar(carId);
    }
});
