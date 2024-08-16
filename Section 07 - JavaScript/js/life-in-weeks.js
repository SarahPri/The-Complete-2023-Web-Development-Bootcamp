function yourLifeInWeeks(age) {
  let yearsRemaining = 100 - age;
  let daysRemaining = yearsRemaining * 365;
  let weeksRemaining = yearsRemaining * 52;
  let monthsRemaining = yearsRemaining * 12;

  // console.log("You have " + daysRemaining + "days" + weeksRemaining + "weeks" + monthsRemaining + "Months");

  console.log(
    `You have ${yearsRemaining} age ${daysRemaining} Days ${weeksRemaining} Weeks ${monthsRemaining} Months Left`
  );
}

yourLifeInWeeks(40);
