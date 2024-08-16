function getMilk(money) {
  let milkPackets = Math.floor(money / 60);
  let change = money % 60;
  console.log(
    `I was able to buy ${milkPackets} packets of milk and here is the change ${change} KES`
  );
}
getMilk(500);

// let us apply the return key word here.
function loafOfBread(money) {
  let numberOfBread = Math.floor(money / 65);
  console.log("buy " + numberOfBread + " Loaves of Bread");

  return money % 65;
}

let change = loafOfBread(200);
console.log(` Here is the change ${change} KES`);
