//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
//and titlecase


let personName: string = "Anabiya Ejaz";

   //Lowercase
console.log(personName.toLowerCase())

   //Uppercase
console.log(personName.toLocaleUpperCase())

   //Titlecase
console.log(personName.replace(/\bw/g,c => c.toUpperCase()))
