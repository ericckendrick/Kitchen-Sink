// The "let " statement creates a block-scoped local variable 
let name = "Eric";

/*The "const" declaration is block-scoped as well, but its value
cannot changed through reassignment or redeclared */
const statesCount = 50;

//addNums value will be the sum of 5+4
let addNums = 5 + 4;

//Function "sayHello" will display an alert
let sayHello =()=> alert("Hello World!");
sayHello();

// Create function that checks age variable and, if under 21, alerts user they are too young
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry, " + name + ", you aren't old enough to view this page!")
    }
};
checkAge("Charles",21);
checkAge("Abby",27);
checkAge("James",18);
checkAge("John",17);

// Use a loop to display each of your favorite vegetables to the developer console.
let favVeggies = ["okra", "asparagus", "mushroom", "onion"];

for (let i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i])
};

//Create a 'pet' object with props 'name' and 'breed', then console.log
let pet = {
    name: "Sadie",
    breed: "Chihuahua"
}
console.log(pet);

//Create array of 5 objs with name and age props
let userArr = [
    {
        name: "George",
        age: 5
    },
    {
        name: "Paul",
        age: 78
    },
    {
        name: "Ringo",
        age: 21
    },
    {
        name: "John",
        age: 16
    },
    {
        name: "Yoko",
        age: 54
    }
];

/*Use a loop to call the checkAge function for each object in the array, 
passing the object's name and age as arguments. */
for (let i=0; i < userArr.length; i++) {
    checkAge(userArr[i].name, userArr[i].age);
}

/* Create getLength function that takes any word as an argument and returns number
of characters in the string */
getLength = string => {
    return string.length;
}
// Call getLength and pass 'Hello World', then store result as a variable
let helloLength = getLength("Hello World");

// Check result for odd or even, then console.log appropriate response
if (helloLength % 2 === 0) {
    console.log("The world is nice and even!");}
    else {
        console.log("The world is an odd place!")};













