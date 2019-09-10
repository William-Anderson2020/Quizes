/* Rob and Dejon are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
Rob: 78kg, 1.69 meters
Dejon: 92kg, 1.95 meters
1. Store Rob and Dejon's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Rob has a higher BMI than Dejon.
4. Print a string to the console containing the variable from step 3. (Something like "Is Rob's BMI higher than Dejon's? true"). */

let robHeight = 1.69;
let robMass = 78;
let dejonHeight = 1.95;
let dejonMass = 92;

let robBMI = robMass / Math.pow(robHeight, 2);
let dejonBMI = dejonMass / Math.pow(dejonHeight, 2);

let robGreaterBMI = robBMI > dejonBMI;

console.log(`Rob's BMI is greater than Dejon's is a ${robGreaterBMI} statement.`);

if(robGreaterBMI = true){
    alert("Rob's BMI is greater then Dejon's by " + (robBMI - dejonBMI) + "kg/m^2.")
} else {
    alert("Rob's BMI is less then Dejon's.")
};