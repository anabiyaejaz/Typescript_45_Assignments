
// Write a function that stores information about a car in an Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
// arguments. Call the function with the required information and two other name-value pairs, such as 
// a color or an optional feature. Print the Object that’s returned to make sure all the information was 
// stored correctly.

function storeCarInfo(manufacturer:string, model:string, ...extraOption: {[key:string]: any } [] )

 {

  let carInfo = {
    manufacturer,
    model,
    ...Object.assign({},...extraOption)
  }

  return carInfo

}

let answer = storeCarInfo("Honda", "Corolla", {color:"Black", features : ["Negivation", "Power Window" ]})
console.log(answer)