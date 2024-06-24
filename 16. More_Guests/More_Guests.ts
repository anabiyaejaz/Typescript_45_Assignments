//You just found a bigger dinner table, so now more space is available. Think of three more guests 
//to invite to dinner. 
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
//people that you found a bigger dinner table. 
//• Add one new guest to the beginning of your array. 
//• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.

const guestList: string[] = ["Merub", "Aiman", "Kainat"];
for (let i = 0; i < guestList.length; i++){
    console.log(`Dear,` +guestList[i]+ `,\n I would to invite you for dinner \n Thank You \n Anabiya Ejaz`);
}

let notComming: string = "Aiman";
let newComming: string = "Sara";
guestList[1] = newComming 
for(let i = 0; i < guestList.length; i++){
    console.log(`Dear,` +guestList[i]+ `,\n I would to invite you for dinner \n Thank You \n Anabiya Ejaz`);
}

console.log(`Not comming '${notComming}'`);

console.log("Good news! We find a big table so we inviting 3 more guests");

guestList.unshift("Hafsa");
guestList.splice(2 , 0, "Ahmed");
guestList.push("Owais");

for(let i = 0; i < guestList.length; i++){
    console.log(`Dear,` +guestList[i]+ `,\n I would to invite you for dinner \n Thank You \n Anabiya Ejaz`);
}