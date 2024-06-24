//Shrinking Guest List:  
//You just found out that your new dinner table won’t arrive in time for the dinner, and you have 
//space for only two guests. 
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
//invite only two people for dinner. 
//• Remove guests from your list one at a time until only two names remain in your list. Each time you 
//pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
//invite them to dinner. 
//• Print a message to each of the two people still on your list, letting them know they’re still invited. 
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
//actually have an empty list at the end of your program.

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

// Remove not comming guest & Add a new guest
console.log(`Not comming '${notComming}'`);

console.log("Good news! We find a big table so we inviting 3 more guests");

guestList.unshift("Hafsa");
guestList.splice(2 , 0, "Ahmed");
guestList.push("Owais");

// 06 guests name printed in Array
for(let i = 0; i < guestList.length; i++){
    console.log(`Dear,` +guestList[i]+ `,\n I would to invite you for dinner \n Thank You \n Anabiya Ejaz`);
}

// Here type message: Sorry guests you are not invited
console.log("Sorry we can not arrange big table, only 2 peoples will be invited");

// Removed few guests
while(guestList.length > 2){
   let removeGuest = guestList.pop();
   console.log(`Sorry ${removeGuest}, you are not invited`);
}

// There are remaining 2 guests
for(let i = 0; i < guestList.length; i++){
    console.log(`Dear `  + guestList[i]+ `,\n You are still invited \n Thank You \n Anabiya Ejaz`);
}

// Removed all guests name in array
guestList.splice(0 , 2);
console.log(guestList);