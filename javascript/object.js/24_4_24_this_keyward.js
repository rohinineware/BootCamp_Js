// // Object
// // 1.Object Literal

// const user = {
//     name: "Puran",
//     age: 16,
//     "my game": "Cricket",
//     collection:{
//         book:{
//             horror:{
//                 name: "Horror",
//                 price: 100,
//             },
//             comedy:{
//                 name: "Comedy",
//                 price: 200,
//             },
//             adventure:{
//                 name: "Adventure",
//                 price: 300,
//             },
//         },
//     },
//     sayHii : function(){  //method
//         console.log(greet);
//     },
//     sayBye : function(greet){
//         console.log(greet);
//     },

// };


// // Method - Function inside an object as key-value pair


// // user.sayHii("");
// user.sayBye("Your Class is OFF NOW, You guys can leave");


// // console.log(user);



// // console.log(user.collection.book.adventure.price)

// // console.log(typeof user);   

// // const key1 = Object.keys(user);

// // console.log(typeof key1[1], key1[1]);
// // console.log(typeof key1[0], key1[0]);

// // Dot Notation
// // [] Notation 

// // console.log(user["my game"]);

// let user ={
//     name:"Puran",
//     location:"Bengal",
// }
// user.age = 16;
// user["My fav game"] = "Cricket";
// console.log("before",user);
// delete user.location;
// console.log("after",user);
// function printUser(user){    //method
//     console.log(user);
// }
// user.printingUser = printUser;

// console.log(user);
// {
//     name: 'Puran',
//     location: 'Bengal',
//     age: 16,
//     'My fav game': 'Cricket',
//     printingUser: [Function: printUser]  //method
//   }

// user.age
// user.location
// user.printingUser()
// console.log(user.printingUser("Saloni"));


// let user ={
//     name:"Puran",
//     location:"Bengal",
// }


// function add(a,b){  // Method
//    return a+b;
// }

// // add(2,3);

// user.age = 18;
// user.addition = add;

// console.log(user.addition(2,4));


// let user = {
//     name: "Puran",
//     location: "Bengal",
//     addition: function (a, b) {
//         console.log(a + b);
//     }, 
//     subtraction(a, b) {
//         console.log(a - b);
//     },
//     multiplication:(a, b)=>{
//         console.log(a*b);
//         console.log(user.name);
//     },                                     //Comma Dangle , Trailing Comma
//     greet(){
//         console.log(this,"inside method");
//         console.log("Good Morning" , this.name);
//     },
// }

// console.log(this,"outside");

// function a(){
//     console.log(this, "inside a function");
// }

// a();


// user.addition(2, 3);
// user.subtraction(5, 3);
// user.multiplication(2, 3);
// user.greet();


// this - keyword

// let user={
//     name:"ro",
//     age:20,
//     firstName:function (){
//         console.log(`${this.name} ${this.age}`);
//     }
// }
// user.firstName()
// console.log(user.name)
// console.log(Object.keys(user).length)


// Arrow Function doest not have this keyword


// Hoisting - Access
// Arrow Function - Refrence Errror

// Object - 
// first name
// last name

// method - full name

// call the method and print the full name

// const person = {
//     firstName: "Tahira",
//     lastName: "Khan",
//     // getFullName(){
//     //     console.log(this.firstName +" "+ this.lastName)
//     // }
//     getFullName:(name)=>{
//         console.log(person.firstName +" "+ person.lastName +" and "+ name)
//     }
// }

// person.getFullName("Sana");

