//creating Object

// let houseKeeper1 = {
//     name: " Gladys",
//     age:35,
//     location:"Eldoret",
//     work:["House Cleaning", "Washing Dishes", "Care Giver"]
// }
// console.log(houseKeeper1.work[1]);

//function Constructor
function HouseKeeper(name, age, location, cleaningRepertoire) {
  this.name = name;
  this.age = age;
  this.location = location;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    alert("Cleaning in Progress...");
  };
}

// creating a housekeeper info while using the constructor
//you access the constructor or call it using the new keyword.
let houseKeeper1 = new HouseKeeper("Gladys", 35, "Eldoret", [
  "House Cleaning",
  "Washing Dishes",
  "Care Giver",
]);
console.log(houseKeeper1.clean());
// alert("Cleaning in Progress!")
