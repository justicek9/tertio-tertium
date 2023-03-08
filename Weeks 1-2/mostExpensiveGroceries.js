


// Cost of Groceries - helper function
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
