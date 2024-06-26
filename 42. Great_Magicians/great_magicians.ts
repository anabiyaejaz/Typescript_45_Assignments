// Start with a copy of your program from Exercise 41. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
// show_magicians() to see that the list has actually been modified. 

let magician: string[] = ["Harry Potte", "Derren Brown", "Ron Weasley", "David Blaine"];

function make_great(magiciansArray:string[]){
    for(let i = 0; i < magician.length;i++){
        magician[i] = "The Great " + magiciansArray[i];
    }

}

function show_magicians(magicians:string[]){
    magicians.forEach(magic => {
        console.log(magic);
    });

}

make_great(magician);
show_magicians(magician);

