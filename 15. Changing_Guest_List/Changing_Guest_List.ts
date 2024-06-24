//You just heard that one of your guests can’t make the dinner, so you need to send out a new 
//set of invitations. You’ll have to think of someone else to invite. 
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating 
//the name of the guest who can’t make it.

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

