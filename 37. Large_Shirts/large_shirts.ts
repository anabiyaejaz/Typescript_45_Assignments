// Modify the make_shirt() function so that shirts are large by default, with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
// size with a different message. 

function make_shirt(size:string = "Large", text:string = "I love TypeScript"){
    console.log(`Size of shirt is ${size}, and ${text}`);
}

make_shirt();

make_shirt("Medium");

make_shirt("Small", "I love Painting");

make_shirt("ExtraLarge", "I love Painting");