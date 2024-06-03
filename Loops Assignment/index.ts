//                    Object, Array and Function Assignment

// 1. Creating a Lesson Plan( Using for loop )

let myWork: { name: string; status: boolean }[] = [];

for (let i = 1; i <= 10; i++) {
    let lesson = {
        name: `Lesson ${i}`,
        status: i % 2 === 1 ? true : false 
    };
    myWork.push(lesson);
}

console.log(myWork);


//                   XXXXXXXXXXXXXXXXXXXXX

// 2. Guessing Game (Using while loop )

const maxValue = 100;

const randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(`Random Number: ${randomNumber}`);

let isCorrect = false;

const guesses = [10, 20, 30, 39, 40, 50, 60, 70, 80, 90, 100];

let i = 0;
while (!isCorrect && i < guesses.length) {
    let currentGuess = guesses[i];
    console.log(`User guess: ${currentGuess}`);

    if (currentGuess === randomNumber) {
        console.log("Congratulations! You guessed the correct number.");
        isCorrect = true;
    } else if (currentGuess < randomNumber) {
        console.log("Your guess is too low.");
    } else {
        console.log("Your guess is too high.");
    }

    i++;
}

// if (!isCorrect) {
//     console.log("Sorry, you did not guess the number. The correct number was: " + randomNumber);
// }

//                        XXXXXXXXXXXXXXXXXXXXX

// 3. Counter Incrementer (Using do while loop )

let counter:number=0;
let step:number=5;
do {
    console.log(`Counter: ${counter}`);
    counter+=step;
} while (counter<100);
console.log(`Final Counter: ${counter}`);

//                        XXXXXXXXXXXXXXXXXXXXX

// 4.Exploring Objects with for...in Loop

let myObj={
    item1:"Value 1",
    item2:"Value 2",
    item3:"Value 3"
}
for(let obj in myObj){
    console.log(`Property: ${obj}, Value: ${myObj[obj]}`);

}

//                        XXXXXXXXXXXXXXXXXXXXX

// 5.Exploring Arrays with Loops( Using loop )

let myArray:number[]=[];
for(let i=1;i<=10;i++){
    myArray.push(i);
    
}
console.log(`MyArray: ${myArray}`);

for(let i=0;i<myArray.length;i++){
    console.log(`Index: ${i}, Value: ${myArray[i]}`);
    
}

for(let value of myArray){
    console.log(`Value: ${value}`);
    
}

//                        XXXXXXXXXXXXXXXXXXXXX
