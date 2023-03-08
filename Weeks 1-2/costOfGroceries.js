// Cost of Groceries

// Understand the problem
    // We need to create two functions, one called costOfGroceries() that takes in a single array of grocery items and returns the total cost of the items in the grocery items array.

    // Another function called mostExpensiveGroceries() that will take in a 2-dimensional array of grocery list and return the index of the sub-array wiht the hgihest cost.

    // The first function will act as a helper function to the second function providing the totl cost of any array of grocery items passed to it, as we will be checking a 2-dimensional array of grocery items.

// Plan it Out!
    // 1. Create a function called costOfGroceries(groceries) that takes in a single array of grocery items called groceries.
    // 2. Create a variable to hold our total called total.
    // 3. Iterate up the length of the groeries array in increments of 1.
        // As we iterate.
            // 1. Create a variable to hold groceries at i called grocery.
            // 2. Conditionally check what the grocery string is; depending on the string; add to the total the appropriate price.
                // a. butter += 1
                // b. eggs += 2
                // c. milk += 3
                // d. bread += 4
                // e. cheese += 5
    // After we finish iterating, return the total.

// Code
    // Create the function
function costOfGroceries(groceries) {

    // Create the total variable
    let total = 0;


    // Iterate through the groceries array
    // starting from the first index, 0
    // going to keep iterating as long as i is less than the groceries.length
    // we will go up in increments of 1
    for (let i = 0; i < groceries.length; i++) {

        // Create a variable to represent the groceries at a specific index
        let grocery = groceries[i];

        // as we iterate, conditionally, chedck what the grocery string is depending on the string, add to the total the appropriate price
        if(grocery === "butter") {
            total += 1
        }
        if(grocery === "eggs") {
            total += 2
        }
        if(grocery === "milk") {
            total += 3
        }
        if(grocery === "bread") {
            total += 4
        }
        if(grocery === "cheese") {
            total += 5
        }
    }
    // Return the total variable
    return total;
}
// Refator
function costOfGroceries(groceries) {
    let total = 0;

    for (let i = 0; i < groceries.length; i++) {
        let grocery = groceries[i];

        if (grocery === "butter") total += 1;
        if (grocery === "eggs") total += 2;
        if (grocery === "milk") total += 3;
        if (grocery === "bread") total += 4;
        if (grocery === "cheese") total += 5;
    }
    return total;
}
