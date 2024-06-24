//Working with one of the programs from Exercises 14 through 18, print a message indicating 
//the number of people you are inviting to dinner.

const guestList: string[] = ["Merub", "Aiman", "Kainat"];
// for (let i = 0; i < guestList.length; i++){
//     console.log(`Dear,` +guestList[i]+ `,\n I would to invite you for dinner \n Thank You \n Anabiya Ejaz`);
// }

let notComming: string = "Aiman";
let newComming: string = "Sara";
guestList[1] = newComming 
// for(let i = 0; i < guestList.length; i++){
//     console.log(`Dear,` +guestList[i]+ `,\n I would to invite you for dinner \n Thank You \n Anabiya Ejaz`);
// }

// Remove not comming guest & Add a new guest
// console.log(`Not comming '${notComming}'`);

// console.log("Good news! We find a big table so we inviting 3 more guests");

guestList.unshift("Hafsa");
guestList.splice(2 , 0, "Ahmed");
guestList.push("Owais");

// 06 guests name printed in Array
// for(let i = 0; i < guestList.length; i++){
//     console.log(`Dear,` +guestList[i]+ `,\n I would to invite you for dinner \n Thank You \n Anabiya Ejaz`);
// }

// Here type message: Sorry guests you are not invited
// console.log("Sorry we can not arrange big table, only 2 peoples will be invited");

// Removed few guests
while(guestList.length > 2){
   let removeGuest = guestList.pop();
//    console.log(`Sorry ${removeGuest}, you are not invited`);
}

// There are remaining 2 guests
for(let i = 0; i < guestList.length; i++){
    // console.log(`Dear `  + guestList[i]+ `,\n You are still invited \n Thank You \n Anabiya Ejaz`);
}

// Removed all guests name in array
guestList.splice(0 , 2);
console.log(guestList);

// Exercise 19

// print a message indicating the number of people you are inviting to dinner. 
console.log(`Total number of Guest are: ${guestList} `);