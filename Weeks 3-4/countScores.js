// Count Scores Walkthrough - Part 1

// Write a function countScores(people) that takes in an array of score objects (people) as its input.  A score object has two key-value pairs; the scorer(string) and a point value (number).  countScores(people) should return an object that has key-value pairs listing each person who scored as a key and the sum of the total points for the game as their value.

// Understand the Problem
// We need to create a function called countScores() that will intake an array of objects.  These objects are going to have a key/value pair for both the name(string) and the score (number).  The goal of this function is to create a single object that uses the names as keys and has the total score for that person as a value.

// Plan it Out
// Create a function called countScores that takes in an array called scoresArr.
    // Create an object, scoresObj, that will have the person's name as a key and their score as an object.  We can initialize this to an empty object.
    // Iterate through the scoresArr array.
        // Create a name and score variable and initialize them to the values that exist at that index of the array.
        // Check if the name exists as a key in the scoresObj.
            // If it does - add a key with that name to the scoresObj and initialize the value to the score variable.
    // Return the scoresObj

    // CODE
    let countScores = function(scoresArr) {
        // create the scoresObj
        let scoresObj = {};

        // iterate through the scoresArr
        for (let i = 0; i < scoresArr.length; i++) {

            // grab the object that holds the person name and score
            let personObj = scoresArr[i];


            // initialize the name and scofre variables using dot notation
            let name = personObj.name;
            let score = personObj.score;

            // check if the name exists in scoreObj
            if (scoresObj[name]) {
                // add the score to that person key/value pair
                scoresObj[name] += score;
            }
            else {
                scoresObj[name] = score;
            }
        };
        return scoresObj;
    }

// REFACTOR
    // Use forEach instead of a regular for loop
    // Use const for functions and reference types
    // Destructure the personObj
    // Use fat arrow syntax
    // Tighten up the if...else statements

let countScores1 = function(scoresArr) {

    let scoresObj = {};
    // For loop to forEach loop
    //for (let i = 0; i < scoresArr.length; i++) {
    scoresArr.Arr.forEach(function(personObj) {

    }


            let personObj = scoresArr[i];
            let name = personObj.name;
            let score = personObj.score;


            if (scoresObj[name]) {

                scoresObj[name] += score;
            }
            else {
                scoresObj[name] = score;
            }
        };
        return scoresObj;
