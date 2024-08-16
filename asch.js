// let r={
//     name:"ri",
//     age:29,
//     a:function(){
//         return this.name
//     }
// }


// console.log(r.a())
// console.log(Object.keys(r))
// console.log(r.age)




// let arr=["we","ee","tt"];
// arr.splice(1,2,"m","y");
// console.log(arr)


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
//     sayHii : function(greet){  //method
//         console.log(greet);
//     },
//     sayBye : function(greet){
//         console.log(greet);
//     },

// };
// // console.log(user.collection.book.adventure.price)
// user.sayHii("rohini")



// let user={
//     name:"ro",
//     age:16
// }

// user.name="so"
// // console.log(user)
// console.log(Object.keys(user))
// user.name="mo"



// let user=Object.freeze({
//     name:"ro",
//     age:16
// })

// user.name="ho"
// console.log(user)

// let user={
//         name:"ro",
//         age:26,
// }
// user.name="ho"
// Object.freeze(user)
// user.age=60
// console.log(user)


// let user={
//     name:"ro",
//     age:26,
// }
// console.log("hasOwnProperty" in user);
// console.log(user.hasOwnProperty("hasOwnProperty"));


// counter app

// let user={
//     value:0,
//     user1(){
//         console.log(this.value=this.value+1)
//     }
// }
// user.user1()



// const obj1={
//     name:"rohini",
//     age:25,
// }

// const obj3={
//     location:"bhandara",
// }

// let obj2=Object.assign(obj3,obj1)
// // let obj2={...obj1,...obj3}
// console.log(obj2)


// shallow copy
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


// let user={
//     name:"ro",
//     age:29,
//     a:{
//         address:"nagpur",
//         hometown:"bhandara"
//     }
// }
// let obj={...user}
// obj.name="ho"
// obj.age=2
// obj.a.address="home"
// console.log(user)
// console.log(obj)



// structuredClone
// const user={
//     name:"rohini",
//     hobbies:{
//         cooking:"food",
//         reading:"Novel",
//     }
// };

// const clone = structuredClone(user);
// console.log(user == clone);
// console.log(user.hobbies == clone.hobbies);


// const obj={
//     a:"redapple",
//     b:{
//         c:"blackapple",
//     },
//     sayHii(){
//         console.log("Hello");
//     }
// }
// const obj2=structuredClone(obj);
// obj.a="red";
// obj.b.c="black";

// console.log(obj)
// console.log(obj2)



// const obj={
//     a:0,
//     b:{
//         c:0,
//     }
// }
// const obj1=structuredClone(obj);
// obj.a=4;
// obj.b.c=4;
// obj1.b.c=9;
// console.log(obj)
// console.log(obj1)



// factory function

// function user(name,age){
//     return{
//         name:name,
//         age:age,
//         address:{
//             adname:"go"
//         },
//         yes(){
//             return (`${name}`)
//         }
//     }
// }

// let use=user("rohini",20);
// console.log(use);


// let printing={
//     printdetails(){
//         console.log(`hey i am ${name} and i am ${age} year old`);
//     }
// }


// let passout={
//     printpassout(){
//         console.log(`hey I am ${name} and iam passout`);
//     }
// }

// function createStudent(name,age){
//     let studentproto=Object.create(printing);
//     studentproto.name=name;
//     studentproto.age=age;

//     return studentproto;
// }

// let student1=createStudent("ro",1);
// let student2=createStudent("rawan",10);

// console.log(student1,"student1");
// console.log(student2,"student2");


