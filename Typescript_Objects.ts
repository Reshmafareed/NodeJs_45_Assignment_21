
// Write a program that creates Objects containing these items.

interface person {
    age : number,
    name : string,
    nationality : string,
    student : Boolean
}
// person Object
let person :person = {
    age : 18 ,
    name : 'Reshma' ,
    nationality : 'pakistan' ,
    student : true
}
// print person
console.log(person);

//Datatype of object
interface Car {
    maker : string,
    color : string,
    automatic : true
}
// Car Objects
let Car = {
    maker : 'Toyota' ,
    color : 'Black' ,
    automatic : true
}
console.log(Car);
