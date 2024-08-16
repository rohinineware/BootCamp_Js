

// How to make copy in object

// we have two ways to copy
// 1) Object.assign(target,source)
// 2) Spread operator {...copy object name}


// Object.assign

// const obj1={
//     name:"rohini",
//     age:25,
// }

// const obj3={
//     location:"bhandara",
// }

// const obj2=Object.assign({},obj1,obj3);
// obj2.name="girl";
// console.log(obj1);
// console.log(obj2);



// spread operator

// const obj2={...obj1,...obj3}
// console.log(obj2)


// shallow copy

// shallow copy sirf main top object wr work krti hai top perperties pr like name,age and if want to change somthing in nested object it will change everywere because it will copy reference 
// taking top object
// in nested object it copy reference

// const user={
//     name:"rohini",
//     age:25,
//     address:{
//         permanent:"Bhandara",
//         temporary:"Banglore",
//     }
// }
// const user2={...user};
// user2.name="Shubhu";
// user2.age=30;
// user2.address.permanent="nagpur"
// console.log(user)
// console.log(user2)


// Deep copy

// all the properties are copied


// const user={
//         name:"rohini",
//         age:25,
//         address:{
//             permanent:"Bhandara",
//             temporary:"Banglore",
//         }
// }
// stringify convert object to string
// const user2= JSON.stringify(user);
// console.log(typeof user);
// console.log(typeof user2)
 

// parse convert string to object
// const user2= JSON.parse(JSON.stringify(user));
// user2.name="zebra"
// user2.age=30
// user2.address.permanent="nagpur"
// console.log(user);
// console.log(user2)

// let arr = [1,4,7]
// console.log(arr.pop())

