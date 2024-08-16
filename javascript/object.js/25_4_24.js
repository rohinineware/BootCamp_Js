

// 25/4/24

// counter app
// in
// hasOwnProperty
// Freeze
// loop-for-in
// Questions with loops
// Refrence and Value
// Object.assign
// Spread Operator
// Constructor Function


// counter app

// arrow function
// let user={
//     value: 0,
//     increment:()=>{
//         console.log(user.value=user.value+1);
//     },
//     decrement:()=>{
//         console.log(user.value=user.value-1);
//     },
//     reset(){
//         console.log(user.value=0);
//     }
// }

// user.increment();
// user.decrement();
// user.reset();



// regular function
// let counterapp={
//     value:0,
//     increment(){
//         console.log(this.value=this.value+1);
//     },
//     decrement(){
//         console.log(this.value=this.value-1);
//     },
//     reset(){
//         console.log(this.value=0);
//     }
// }

// counterapp.increment();
// counterapp.increment();
// counterapp.increment();
// counterapp.reset();
// counterapp.decrement();
// counterapp.decrement();
// counterapp.decrement();


// in

// for cheacking is present or not

// let user={
//     name:"ro",
//     age:26,
// }
// console.log("name" in user);
// console.log("city" in user);


// hasownproperty

// for cheacking is present or not

// let user={
//     name:"ro",
//     age:26,
// }
// console.log(user.hasOwnProperty("name"));
// console.log(user.hasOwnProperty("city"));


// diff - in and hasOwnProperty
// in -cheaking deply in prototype also
// hasOwnProperty - it only cheak in object itself
// let user={
//     name:"ro",
//     age:26,
// }
// console.log("hasOwnProperty" in user);
// console.log(user.hasOwnProperty("hasOwnProperty"));


// freeze

// first method

// let user={
//     name:"ro",
//     age:26,
// }
// using freeze nothing will change everything constant
// Object.freeze(user);    
// user.location="pune";
// user.job="no";
// console.log(user);


// let user={
//     name:"rohini",
//     age:12,
// }

// // delete user.age;
// user.name="shubhu";
// console.log(user);
// Object.freeze(user);   after using freeze it not take anything
// user.name="appu";
// console.log(user);



// second method

// let user=Object.freeze({
//     name:"ro",
//     age:26,
// })

// user.location="bhandara";
// delete user.age;
// console.log(user);


// access keys and values
// let user={
//     name:"ro",
//     age:26,
// }

// let keys=Object.keys(user);
// let value=Object.values(user);

// console.log(keys);
// console.log(value);



// for - in -  loop


// let user={
//     name:"ro",
//     age:26,
// }
// for(let age in user){
    // ise hmne keys ko access kiya
    // console.log(age); 
    // console.log(user.age);
    // console.log(user[age]*2);
// }


// let user={
//     name:"ro",
//     age:26,
// }
// for(let keys in user){
    // ise hmne keys ko access kiya
    // console.log(keys); 
    // console.log(user.keys); yaha ye veriable ki tarh keys name ko dekh rha hai jo dik nhi rha toh undefined de rha hai
    // console.log(user[keys]*2);
// }


// let employee={
//     r:10,
//     p:20,
//     t:4,
//     y:9,
// }

// for(let salary in employee){
//     console.log(employee[salary]+1000);
// }


// snake game

// let snakegame={
//     value:0,
//     ladder(){
//         console.log(this.value=this.value+10);
//     },
//     snake(){
//         console.log(this.value=0);
//     },
//     move(){
//         let ran=Math.floor(Math.random()*6)+1
//         console.log(ran);
//         console.log(this.value=this.value + ran);
//     }
// }

// snakegame.ladder();
// snakegame.snake();
// snakegame.move();