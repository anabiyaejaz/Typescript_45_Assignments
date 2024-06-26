// Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it 
// in a separate array. Call show_magicians() with each array to show that you have one array of the 
// original names and one array with the Great added to each magician’s name.

let magician: string[] = ["Harry Potte", "Derren Brown", "Ron Weasley", "David Blaine"];

function copyArray(arr:string[]){
   return[...arr];
}

function make_great(magiciansArray:string[]){
    for(let i = 0; i < magician.length;i++){
        magiciansArray[i] = "The Great " + magiciansArray[i];
    }

}

function show_magicians(magicians:string[]){
    magicians.forEach(magic => {
        console.log(magic);
    });

}

const copyMagiciansArray = copyArray(magician);

make_great(copyMagiciansArray);

console.log("This is my original array");
show_magicians(magician);

console.log("This is my modified copy of the array");
show_magicians(copyMagiciansArray);