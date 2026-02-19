// LEVEL 3 — Polymorphism Deep Practice
// 🧩 Exercise 4: Shape System

// Create base class:

// class Shape


// Method:

// area() → returns 0

// Now create:

// Rectangle

// Circle

// Triangle

// Each overrides area() properly.

// Then:

// Create an array of shapes and loop over them calling area().

// That’s pure polymorphism.


const Shape = {
    // init(width, height, border){
    //     this.width = width;
    //     this.height = height;
    //     this.border = border;
    // },

    area(){
        return 0;
    },
}

const Rectangle = Object.create(Shape);
Rectangle.init = function(width, height){
    this.width = width;
    this.height = height;
}

Rectangle.area = function(){
    return this.height * this.width;
}

const Circle = Object.create(Shape);
Circle.init = function(diamete){
    this.diamete = diamete;
}

Circle.area = function(){
    return 3.14*(this.diamete/2)**2;
}

const Triangle = Object.create(Shape);
Triangle.init = function(base, height){
    this.base = base;
    this.height = height;
}

Triangle.area = function(){
    return (this.base * this.height) / 2
}

const newRect = Object.create(Rectangle);
newRect.init(25, 75)
console.log("Triangle are:", newRect.area() + " cm")

const newCircle = Object.create(Circle);
newCircle.init(32)
console.log("The area of this circle is:", newCircle.area() + " cm**2");

const newtriangle = Object.create(Triangle);
newtriangle.init(5, 8)
console.log("The are of this triangle is:", newtriangle.area() + " cm");