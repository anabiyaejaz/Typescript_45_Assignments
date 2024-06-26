// Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array.

let magician: string[] = ["Harry Potte", "Derren Brown", "Ron Weasley", "David Blaine"];

function show_magicians(magicians:string[]){
    magicians.forEach(magic => {
        console.log(magic);
    });

}

show_magicians(magician);

