

//callback means function pass as an argument to another function

//callback uses for asyn code

//asyn means doing so many task as at one time 

//callback hell => pyramid of .then() and .catch() => is to complecated and it take like nested 

//instead of callback hell we use promise 


// function sayhii(callback){
//     const data=callback()
//     return "hii" + data;
// }

// const saybye=()=>"bye";

// const result=sayhii(saybye);

// console.log(result);



// callback hell

// function preparedFood(foodDelivered){
//     setTimeout(()=>{
//         console.log("Food is being prepared");
//         console.log("Food is ready");
//         foodDelivered();
//     }, 10000);

// }

// function deliveredFood(foodeating){
//     setTimeout(()=>{
//         console.log("Food is delivered to your table");
//         foodeating()
//     }, 5000)
// }



// function eatingFood(pay){
//     setTimeout(()=>{
//         console.log("Eating Food");
//         pay();
//     }, 2000)
// }

// function payment(leave){
//     setTimeout(()=>{
//         console.log("Payment");
//         leave();
//     }, 1000)
// }

// function leaveHotel(){
//     console.log("Leave the Hotel");
//     rating();
// }

// function rating(){
//     console.log("rating to hotel");
// }

// function visitingHotel(){
//     console.log("Entering the Hotel");
//     console.log("Order Food - Biryani ");
//     preparedFood(()=>{
//         deliveredFood(()=>{
//             eatingFood(()=>{
//                 payment(()=>{
//                     leaveHotel(()=>{
//                         rating(()=>{

//                         })
//                     })
//                 })
//             })
//         })
//     });

// }

// visitingHotel();



// ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM



function Processing(enter){
    setTimeout(()=>{
        console.log("wait WIP");
        enter();
    },5000);
}

function Enterpin(){
    setTimeout(()=>{
        console.log("Please enter pin");
        Withdraw();
    },2000);
}

function Withdraw(){
    setTimeout(()=>{
        console.log("withdraw succesful");
        collectcash();
    },5000);
}

function collectcash(){
    setTimeout(()=>{
        console.log("received your cash");
        leave();
    },1000);
}

function leave(){
    console.log("leave atm");
}

function enterAtm(){
    console.log("enter into atm");
    console.log("succesfully insert card");
    Processing(()=>{
        Enterpin(()=>{
            Withdraw(()=>{
                collectcash(()=>{
                    leave(()=>{

                    })
                })
            })
        })
    })
}

enterAtm();