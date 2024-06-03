//                    Object, Array and Function Assignment

// 1. Creating a Lesson Plan( Using for loop )
var myWork = [];
for (var i_1 = 1; i_1 <= 10; i_1++) {
    var lesson = {
        name: "Lesson ".concat(i_1),
        status: i_1 % 2 === 1 ? true : false
    };
    myWork.push(lesson);
}
console.log(myWork);
//                   XXXXXXXXXXXXXXXXXXXXX

// 2. Guessing Game (Using while loop )
var maxValue = 100;
var randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("Random Number: ".concat(randomNumber));
var isCorrect = false;
var guesses = [10, 20, 30, 39, 40, 50, 60, 70, 80, 90, 100];
var i = 0;
while (!isCorrect && i < guesses.length) {
    var currentGuess = guesses[i];
    console.log("User guess: ".concat(currentGuess));
    if (currentGuess === randomNumber) {
        console.log("Congratulations! You guessed the correct number.");
        isCorrect = true;
    }
    else if (currentGuess < randomNumber) {
        console.log("Your guess is too low.");
    }
    else {
        console.log("Your guess is too high.");
    }
    i++;
}
if (!isCorrect) {
    console.log("Sorry, you did not guess the number. The correct number was: " + randomNumber);
}
//                        XXXXXXXXXXXXXXXXXXXXX

// 3. Counter Incrementer (Using do while loop )
var counter = 0;
var step = 5;
do {
    console.log("Counter: ".concat(counter));
    counter += step;
} while (counter < 100);
console.log("Final Counter: ".concat(counter));
//                        XXXXXXXXXXXXXXXXXXXXX

// 4.Exploring Objects with for...in Loop
var myObj = {
    item1: "Value 1",
    item2: "Value 2",
    item3: "Value 3"
};
for (var obj in myObj) {
    console.log("Property: ".concat(obj, ", Value: ").concat(myObj[obj]));
}
//                        XXXXXXXXXXXXXXXXXXXXX

// 5.Exploring Arrays with Loops( Using loop )
var myArray = [];
for (var i_2 = 1; i_2 <= 10; i_2++) {
    myArray.push(i_2);
}
console.log("MyArray: ".concat(myArray));
for (var i_3 = 0; i_3 < myArray.length; i_3++) {
    console.log("Index: ".concat(i_3, ", Value: ").concat(myArray[i_3]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("Value: ".concat(value));
}
//                        XXXXXXXXXXXXXXXXXXXXX
