// 🧩 Exercise 2: User → Admin Inheritance

// Create:

// class User


// Properties:

// name

// email

// Methods:

// login()

// logout()

// Now create:

// class Admin extends User


// Add:

// deleteUser(user)

// Override:

// login() (print "Admin logged in")

// Test polymorphism:

// Store both Admin and User inside one array and call .login() on each.

// They should behave differently.

// 🧱 LEVEL 2 — Encapsulation + Private Fields


const User = function(name, email, role){
    this.name = name;
    this.email = email;
    this.role = role
}

const Admin = function(name, email, role, course){
    User.call(this, name, email, role);
    this.course = course
}

Admin.prototype = Object.create(User.prototype);

User.prototype.login = function(){
    console.log(`${this.name} has been successfully logged in.`);
}

User.prototype.logout = function(){
    console.log(`${this.name} has been successfully logged out.`);
}

Admin.prototype.deleteUser = function(user){
    console.log(`${user} has been successfully deleted.`);
}
Admin.prototype.login = function(){
    console.log("Admin logged in");
}

const user1 = new User("Bob", "bob@gmail.com", "User", "CS");
const dave = new Admin("Dave", "dave@gmail.com", "Admin");
dave.deleteUser(user1.name);
dave.login();
user1.login()

const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthyear){
        this.firstName = firstName;
        this.birthYear = birthyear;
    }
}

const steve  = Object.create(PersonProto);
const Professor = Object.create(PersonProto);

Professor.init = function(firstname, birthYear, course){
    PersonProto.init.call(this, firstname, birthYear);
    this.course = course;
}
const alix = Object.create(Professor);
alix.init("Dave Son", 2000, "Computer Science")
console.log(alix);

Professor.introduce = function(){
    console.log(`My name is ${this.firstName} 
and I study ${this.course}`);
}

alix.introduce();
alix.calcAge();

