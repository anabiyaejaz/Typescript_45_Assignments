//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list
//that stores, several examples. Use your list to print a series of statements about these items, such as
//“I would like to own a Honda motorcycle.”

const car:string[] = ["Civic", "Tesla", "Lamborghini", "Fortuner"];
 for(let i = 0 ; i < car.length; i++){
    let message: string = "I would like to own a ";

    console.log(message + car[i]);
 }
 