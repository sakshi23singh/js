
// let name = "sakshi"
// let age = null
// let isLoggedIn = undefined
// let state
// number =2 to poer 53
// bigint
// string =""
// boolean = true/false
// null = standalon value
// undefined = value not assign
// symbol  = unique


// console.log(typeof null);   // object

// console.log(typeof undefined); // undefined
/*
primitive data types
7 types : string , number, boolean , null , undefined, symbol, bigInt
*/
// const score = 100
// const scoreValue = 100.3
// const IsLoggedIn = false
// const outsideTemp = null 
// let userEmail


// const id = Symbol('123')
// const anotherId = Symbol('123')


// console.log(id === anotherId); false 


//  const bigNumber = 29773628392n

// non primitive(reference )
// arrays , objects , functions 

// const heroes = ['shaktiman','batman','naagraj']
// let myObj ={
//     name : "sakshi",
//     age : 23,


// const myFunction = function(){
//     console.log("hello  world");   
// }
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof myFunction);
// console.log(typeof  myObj);
// console.log(typeof heroes);
// console.log(typeof bigNumber );


// ****************************************************************************************
// memory : stack[primitive]= variables declared ki milegi and usme change hoga 
// heap [non primitive]= changes original value mai change hoga
//for stack 
// let score = 55
// let anotherScore = score 
// anotherScore = 78

// console.log(score);// 55
// console.log(anotherScore);//78

// for heap
let userOne = {
    email : "user@google.com",
    upi : "sud@"
}
let userTwo = userOne
userTwo.email = "singh23sakshi10"
console.log(userOne.email);
console.log(userTwo.email);

