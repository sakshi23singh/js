// function sayMyName(){
//     console.log("s")
//     console.log("a")
//     console.log("k")
//     console.log("s")
//     console.log("h")
//     console.log("i")

// }
// sayMyName// refernce 
// sayMyName()//call

// function addTwoNumbers(number1,number2){// parameter
//     console.log(number1+number2)
// }
// addTwoNumbers(2,3)//argumentnode 

// function addTwoNumbers(number1,number2) {
//     let result = number1+number2
//     return result
// }
// const result = addTwoNumbers(3,5)
// console.log("result:",result)

// direct 
// function addTw0Numbers(number1,number2) {
//     return number1+number2
// }
// const result = addTw0Numbers(8,6)
// console.log(result)


// function loginUserMessgae(username){
//     return `${username}just logged in`
// }
// console.log(loginUserMessgae("sakshi"))// sakshi just logged in 
// console.log(loginUserMessgae())// undefined

// function loginUserMessgae(username){
//     if(username===undefined){
//         console.log("please enter a username ");
//         return
//    }

//     return `${username}just logged in`
// }
// console.log(loginUserMessgae())// undefined 
// console.log(loginUserMessgae("sakshi singh "))


// rest operator 
// function calculateCartPrice(...num1) {
//     return num1
    
// }console.log(calculateCartPrice(200,400,500))

//objects
// const user = {
//     userName : "sakshi",
//     price : 99
// }
// function handleObject(anyobject) {
//     console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`)
// }
// handleObject(user)


//array
const myNewArray = [200,300,400]

 function returnSecondValue(getaArray){
 return getaArray[1]
 }
 console.log(returnSecondValue(myNewArray));
 