// objects literals
 
const mysym = Symbol("key1")

const jsUser = {
    name : "sakshi",
    "full name" : "sakshi singh ",
    age : 18,
    location : "ghaziabad",
    email : "singh23sakshi10",
    isLoggedIn : false,
    LastLOggedIn : ["monday","tuesday"],
    [mysym] : "mykey1",
}
// console.log(jsUser.email) // access
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// //console.log(jsUser.full name) // error will not give result 
// console.log(jsUser[mysym])
// console.log(typeof jsUser[mysym])

// jsUser. name = "riya singh"
// Object.freeze(jsUser)
// jsUser.name = "sakshi singh "
// console.log(jsUser.name)  // riya singh becauses after riya singh it is freeze
// console.log(jsUser)

// jsUser.greeting = function()
// {
//     console.log("hello Js user");
    
// }
// jsUser.greetingtwo = function()
// {
//     console.log(`hello Js user, ${this.name}`);
    
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());

//const tinderUser = new object()
const tinderUser = {}
tinderUser.id = "283382"
tinderUser.name = "sakshi "

// console.log(tinderUser);

// objects in object

// const user = {
//     email : "jdisdsnsj",
//     fullname: {
//         userfullname: {
//             firstname : "sakshi",
//             lastname : "singh"
//         }
//     }
// }
// console.log( user.fullname.userfullname.firstname)// ? it is also used 
// // combining objects
// const obj1 = { 1:"a",2: "b"}
// const obj2 = { 3:"c",4:"d"}

// const obj = {...obj1,...obj2}// first way 
// console.log(obj)
// const obj3 = Object.assign({},  obj1,  obj2)// second way
// console.log(obj3)


const user = [
    {
        id : 1,
        email: "mkmdjsn"
    },
    {
        id : 2,
        email: "mkmdjsn2"
    },
    {
        id : 3,
        email: "mkmdjsn3"
    }
]
user[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));
