function bmiInput(weight, height){

    let bmiCalculator = weight / height**2;
    return bmiCalculator;

}

let bmi = bmiInput(65, 1.8);
console.log(bmi);