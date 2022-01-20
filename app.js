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
console.log(favVeggies);

//Create a 'pet' object with props 'name' and 'breed', then console.log
let pet = {
    name: "Sadie",
    breed: "Chihuahua"
}
console.log(pet);

//Create array of 5 objs with name and age props
let userArr = [
    {
        name: "John",
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
        name: "George",
        age: 16
    },
    {
        name: "Yoko",
        age: 54
    }
];

/*Use a loop to call the checkAge function for each object in the array, 
passing the object's name and age as arguments. */
for 












