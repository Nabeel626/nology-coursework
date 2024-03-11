//Challange 1 - Take a number and returns true if it is a positive number and false if it is a negative number

const isNumberPositive = (number) => {

    if (number > 0) {
        
        console.log("True");

    } else if (number < 0) {

        console.log("False");

    } else {
        console.log("You have a neutral number");
    }
}

isNumberPositive(-1);
isNumberPositive(10);
isNumberPositive(0);



//Challenge 2 - Take a number of days and converts it into an age

const convertDaysToAge = (age) => {

    const CalculateAge = age / 365;
    console.log("Your Age is " + CalculateAge);

}

convertDaysToAge(3650);
convertDaysToAge(6570);



//Challenge 3 - Take three numbers and returns the largest of the three numbers

let getLargestNumber = (num1, num2, num3) => {

    console.log(Math.max(num1, num2, num3));

}

getLargestNumber(2 , 1, 4);
getLargestNumber(6,2,3);



//Challenge 4 - Take an array of names and returns the last name from the array of names

let getLastName = (lastArray) => {


    let lastElement = lastArray.slice(-1);
    console.log(lastElement);

}

getLastName(["Charlie", "Rob", "Andy"]);
getLastName(["Ash","Stu"]);




//Challenge 5 - Take an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array

let allNumbersPositive = (numbers) => {

    let result = true;

    for(let i = 0; i < numbers.length; i++) {
        
        if(numbers[i] <= 0) {

            result = false;

        }

    }

    console.log(result);
}

allNumbersPositive([2,4,5]);
allNumbersPositive([-5,4,6])