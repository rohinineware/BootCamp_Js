


// it will print undefined because this veriavle ko access nhi kr skta agr name function ya fir object me hota toh ye print hota
// let name="amit";
// function print(){
//     console.log(this.name);
// }
// print()


// both are local veriable because global veriable function or if else ke andr nhilikte
// function sayHi(){
//     var name="rohini";
// }

// if(true){
//     var name1="neware";
// }



// call, apply= function borrowing
// only difference between call and apply 
        // call = argument take direct on function calling
        // apply = argument take using array on function calling 

// call

// example 1
// const hotel={
//     rice:"jira-rice",
//     dal:"dal-tadka",
//     price: 100,
//     getrice(){
//         console.log(this.rice);
//     }

// }

// const dhaba={
//     rice:"Garlic-rice",
//     dal:"double-tadka",
//     price:200,
// }

// const langar={
//     rice:"testy",
//     dal:"bohot-tasty",
//     price:280,
// }

// hotel.getrice()
// hotel.getrice.call(dhaba)
// hotel.getrice.call(langar)


// example 2
// const phone={
//     company:"apple",
//     modal:"15 pro max",
// }

// const laptop={
//     company:"Hp",
//     modal:"Elitebook",
// }

// var bike={
//     company:"Royal-enfield",
//     modal:"Bullet",
// }

// function showprice(price){
//     console.log(this.company + " " + this.modal + " " + price)
// }

// showprice.call(phone,100000)
// showprice.call(laptop,50000000)
// showprice.apply(bike,[200000])



// bind()
// return function

var phone={
    company:"samsung",
    price:50000,
    printprice:function(){
        console.log(this.price);
    }
}

// abhi hme ese veriable me store kiya hai ab hm kbhibhi call kr skte hai
let ans=phone.printprice.bind(phone);
ans()

// this keyward parent ko refer krta hai lekin yha koi parent ka name nhi hai toh ye bichara kiche refer kre toh ye 
   // undefined deta hai

// let ans=function(){
//     console.log(this.price);
// };

// ans(); 