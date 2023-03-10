// Differences between dot notation and square bracket syntax

let same = {
    castiel: "mary"
}
let dean = {
    john: "crowley",
    mary: "chuck"
}


//which, if any, of these three console log statements will work?
console.log(dean[sam.castiel]);
console.log(dean.sam.castiel);
console.log(dean[sam['castiel']]);
console.log(dean[sam[castiel]]);
