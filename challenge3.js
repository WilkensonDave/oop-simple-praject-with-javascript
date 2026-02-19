// Exercise 3: Car System

// Create a class:

// class Car


// Properties:

// brand

// speed

// private field #fuel

// Methods:

// accelerate() (+10 speed, reduce fuel)

// brake() (-5 speed)

// refuel(amount)

// getter fuelLevel

// Prevent fuel from going above 100 or below 0.

// Bonus:

// Make accelerate() return this for method chaining.

// Example:

// car.accelerate().accelerate().brake()


class Car {
    #fuel;
    constructor(brand, speed, fuel){
        this.speed = speed;
        this.brand = brand;
        this.#fuel = fuel;
    }

    accelerate(){
        this.speed += 10
        this.#fuel -= 20
        return this.#fuel
    }

    break(){
        this.speed -= 5
        return this.speed;
    }

    refuel(amount){
        if(amount >= 100 || amount < 0){
            alert("Invalid amount. Fuel can not go over 100 neither below zero.")
        }else{
            this.#fuel += amount;
        }
    }

    get fuelLevel(){
        console.log(`The fuel level is ${this.#fuel}`);
    }
}

class Electric extends Car{
    constructor(brand, speed, battery, fuel){
        super(brand, speed, fuel);
        this.battery = battery;
    }

    accelerate(){
        this.speed += 20
        console.log(`The car has ${this.speed} in miles`);
    }

    recharge(amount){
        this.battery += amount
        console.log(`The car has been recharge with ${amount}%`);
    }

}



const car = new Car("Toyota", 240, 50)
const newEl = new Electric("Tesla", 400, 80);

console.log(car.accelerate());
console.log(car.break());
car.fuelLevel;
car.fuelLevel;
newEl.accelerate();
console.log(newEl.break());
newEl.recharge(50);
// newEl.refuel(400)