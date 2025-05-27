// this keyword  = current context
// const user = {
//     username : "sakshi",
//     price : 999,
//     welcomeMessage : function(){
//        // console.log(`${this.username}, welcome to website`);
//     }
// }
// user.welcomeMessage()
// function and arrow function k andr this run nhi hota  undefined show krega

// arrow function 
// const af = () => {
//     let username = "sakshi "
//     console.log(this)
// }
// af()// undefined dega 

// const addTwo = (number1,number2) => {
//     return number1+number2
// }
// console.log(addTwo(2,3)) // paraenthesis lgaenge to return likhna pdega but object k liye paraenthesis
// use krna hoga
// const addTwo = (number1,number2) => 
//        number1+number2 
//  console.log(addTwo(2,3))