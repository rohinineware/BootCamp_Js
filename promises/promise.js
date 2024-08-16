

// promises

// promise is a object 
// three stage :-
    // pending
    // resolve
    // reject

// methods of promise
    // then()-resolve
    // catch()-reject
    // finally()=resolve or reject

// asyn operation ke liye use krte hai promises
// promise take callback
// callback function called as executor function
// .then is accept callback function it return single value if it is fullfilled 
// .catch is return for reject


// more methods in promise

// promise.all()=all promise should be resolve and reject but  When using Promise
                    // .all, if you have a mix of promises where some resolve and others 
                    // reject, Promise.all will give priority to rejection.
// .any()=any promise but resolve ko jyada preference hai and time ka matter nhi hai
// .race()=first promise rersolve meand jo bhi km time lga rha hai woh pehle print hoga or stop hojayega 
                    // yha time matter krta hai fir chahe ye resolve ho ya reject  


// let pro1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("pro1 resolve")
//     },3000)
// })

// let pro2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("pro2 resolve")
//     },2000)
// })

// Promise.all([pro1,pro2]).then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error);
// })


// Promise.race([pro1,pro2]).then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error);
// })


// Promise.any([pro1,pro2]).then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error);
// })



//how to create a promise 
// using constuctor => new keyward

// let promisecreate=new Promise(function(resolve,reject) => we can write likewise

// let promisecreate=new Promise((resolve,reject)=>{
//     let party=false;
//     if(party){
//         resolve("party is going on");
//     }
//     else{
//         reject("no party");
//     }
// })


// promisecreate.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log(error);
// })


// promise chaining

// Promise Chaining: means execute two or more async operation back to back and execution start when previous execution succeeds

// hotel enter
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

// function visit(){
//     console.log("enter the hotel");
//     console.log("order food");
//     preprefood()
//     .then((value)=>{
//         console.log(value);
//         return eating();
//     }).then((value)=>{
//         console.log(value);
//         return payment();
//     }).then((value)=>{
//         console.log(value);

//     }).catch((error)=>{
//         console.log(error);
//     })

// }

// visit()


// promise chaining

// let isparty=function(){
//     return new Promise(function(resolve,reject){
//         let party=true;
//         if(party){
//             resolve("party is going on");
//         }
//         else{
//             reject("no party");
//         }
//     })
    
// }

// let receivegift=function(){
//     return new Promise(function(resolve,reject){
//         let gift=false;
//         if(gift){
//             resolve("gift received");
//         }
//         else{
//             reject("no gift no party");
//         }
//     })
// }

// receivegift().then((result)=>{
//     console.log(result);
//     return isparty();
// }).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


// promises using callback

// ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM


// const process=function Processing(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("wait WIP");
//             resolve();
//         },5000);
//     })
// }

// const enter=function Enterpin(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Please enter pin");
//             resolve();
//         },2000);
//     })
// }

// const withdrw=function Withdraw(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("withdraw succesful");
//             resolve();
//         },5000);
//     })
// }

// let collect=function collectcash(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("received your cash");
//             resolve();
//         },1000);
//     })
// }

// const leave=function leave(){
//    return new Promise(function(resolve,reject){
//         console.log("leave atm");
//         resolve();
//    })
// }

// function enterAtm() {
//     console.log("enter into atm");
//     console.log("successfully insert card");
//     process().then(() => {
//         return enter();
//     }).then(() => {
//         return withdrw();
//     }).then(() => {
//         return collect();
//     }).then(() => {
//         return leave();
//     }).catch((error) => {
//         console.log(error);
//     });
// }

// enterAtm();



