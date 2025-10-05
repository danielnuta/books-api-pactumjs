// 1.	Create a function that takes two numbers as arguments and returns their sum (e.g. add(3,2)=>5)
function add(a, b){
    return a+b;
}

//2.	Create a function that takes a number as an argument, increments the number by 1 and returns the result (e.g. nextNumber(1)=>2)
function number(n){
    return n+1;
}

//3.	Write a function that takes the base and height of a triangle and return its area (e.g. triArea(7,4)=>14). Note area = (base*height)/2
function triArea(base, heught){
    return (base * height) / 2;
}

//4.	Create a function that takes the age in years and returns the age in days (e.g. calcAge(65)=>23725)
function calcAge(ageYears) {
    return ageYears * 365;
}

//5.	Write a function that takes an integer minutes and converts it to seconds (e.g. convert(5)=>300)
function convert(minutes) {
    return hours * 60;

}

//6.	Create a function that converts hours into seconds. (e.g. howManySeconds(2)=>7200)
function convertSeconds(hours){
    return hours * 3600; 
}

//7.	Given two arguments, return true if the sum of both numbers is less than 100. Otherwise return false (e.g. lessThan100(22,15)=>true)
function lasThan100(a, b) {
    return (a+b) < 100;
}

//8.	create a function that takes a name and returns a greeting string (hello('RV')-' Hi RV')
function hello (name){
    return `Hi ${name}`;
}

//9.	Create a function that calculates the chance of being an imposter. The formula is 100x(i/p) where i is the imposter count and p is the player count. Round the value to the nearest integer and return the value as perrcentage (e.g. formula(1,10)->10% imposter)
function formula(i, p){
    const chance = Math.round((i/p) * 100);
    return `${chance}% imposter`;
}

//10.	Create a function to check if an array contains a particular number. It should return true/false
function containsNumber(arr, num){
    return arr.includes(num);
}