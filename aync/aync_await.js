


// async await= better way of writing promises
// better way of writing aync code in js
// await use krne se chining ki jrurt nhi hoti easy ho jata hai we not use .then here
// aync keyward use kiya before functio ke pehle toh woh aync functio bolenge
// return promise
// return nothing it will return undefined
// uses => 
// await keyward=>only use in ayncs keyward
// wait krta hai promise resolve hone tak


// async function sayhi(){
//     return "hello world";
// }
// sayhi().then((data)=>{
//     console.log(data);
// })


// function sayname(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("hello")
//             resolve("hello")
//         },3000)
//     })
// }

// async function exe(){
//     let name="rohini";
//     let value=await sayname();
//     console.log(name);
// }
// exe();




// example of hotel using async await

// food order
// preparing
// deliverd
// eating
// payment

// function preprefood(){
//     return new Promise((resolve,reject)=>{
//         let rice=true;
//         if(rice){
//             setTimeout(()=>{
//                 resolve("food wip");
//             },7000);
//         }
//         else{
//             reject("food is not available");
//         }
//     })

// }

// function eating(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("food eating");
//         },3000);    
        
//     })

// }

// function payment(){
//     return new Promise((resolve,reject)=>{
//         let money=true;
//         if (money){
//             setTimeout(()=>{
//                 resolve("make payment");
//             },2000); 
//         }
//         else{
//             reject("no food");
//         }
//     })
// }


// try=if
// catch=else

// async function visit(){
//     console.log("enter")
//     console.log("order");
//     try{
        
//         await preprefood();
//         console.log("food prepared");
//         await eating();
//         console.log("eat");
//         await payment();
//         console.log("payment");
//     }
//     catch(error){
//         console.log(error);
//     }

// }
// visit();



