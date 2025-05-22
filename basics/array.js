//array
// const arr = [1,2,3,4,5,6,]
// const heroes = ["shaktiman","naagraj"]

// const arr2 = new Array(1,2,3,4,5)
 //console.log(arr2[3]);

//array methods
// arr.push(6)
// console.log(arr);// 1, 2, 3, 4,
 // 5, 6, 6
// arr.pop()
// console.log(arr)

// arr.unshift(0)
// console.log(arr)

// arr.shift()
// console.log(arr)


// console.log(arr.includes(7));
// console.log(arr.indexOf(3));

// const newarr = arr.join()

// console.log(arr) // type array 
// console.log(newarr) //  type string 
// console.log(typeof newarr)

//slice,splice

// console.log("A", arr);

// const arr3= arr.slice(1,3) // do not manipulate original value
// console.log("B",arr)
// console.log(arr3);

// console.log("B",arr)

// const arr4 = arr.splice(1,3) //original value manipulate 
// console.log("C",arr)
// console.log(arr4)
// to add arrays
// const arr1 = [ 1,2,3,4,5,6]
// const arr2 = [7,8,9]
// // concatenate can also be performed
// // spread concept 
// const arr = [...arr1,...arr2]
// console.log(arr);

// const  arr = [1,2,3,[3,4,[7,8,9]],[4,5],8,9]
// const arr1 = arr.flat(Infinity)
// //console.log(arr1);

// console.log(Array.isArray("sakshi"));
// console.log(Array.from("sakshi"));
// console.log(Array.from({ name: "sakshi"}));//interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))