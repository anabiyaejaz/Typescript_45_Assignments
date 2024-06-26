// Equality And Inequality Test 1
console.log("Equality test with strings: " , "Apple" === "Apple");

// Equality And Inequality Test 2
console.log("Equality test with strings: " , ("Apple" as string) !== "Mango");

// Tests using the lower case function 
console.log("Lower Case function test: ", "HELLO WORLD".toLocaleLowerCase() === "hello world");

// Numerical tests involving equality
console.log("Equality test with number: ", 2 == 2);

// Numerical tests involving inequality
console.log("Inquality test with number: ", (45 as number) !== 30);

// Greater than test 
console.log("Greater than test: ", 50 > 30);

// Less then test
console.log("Less than test: ", 10 < 15);

// Greater than or equal to test
console.log("Greater than or equal to test: ", 10 >= 10);

// Less than or equal to test
console.log("Less than or equal to test: ", 8 <= 10);

//  Tests using "and" operator
console.log("And operator test: ", 5 == 5 && 5 < 10);

//  Tests using "or" operator
console.log("Or operator test: ", 20 > 10 || false);

// Test whether an item is in an array
let birds: string[] = ["Falcon", "Dove", "Hawk"]
console.log("Test 'Falcon' in the array ", birds.includes("Falcon"));

// Test whether an item is not in an array 

console.log("Test 'Owl' in the array ", !birds.includes("Owl"));












