// Write a function that accepts an array of items a person wants on a sandwich. The function 
// should have one parameter that collects as many items as the function call provides, and it should 
// print a summary of the sandwich that is being ordered. Call the function three times, using a different 
// number of arguments each time. 

function makeSandwich(items:string[]){
    console.log("Making your sandwich with:");

    items.forEach(element => console.log("- " + element));
console.log("Enjoy your sandwich :")
}

makeSandwich(["Chees", "Lattuce", "Ham"]);  

makeSandwich(["Peanut Butter", "Turkey", ""]);

makeSandwich(["Veggie", "Twirlwich", "Bacon"]);