

// Closure:

// function bundle together with it's lexical environment
// inner function can access veriable and parameter from outer function
// function return another function
// updated value are avilable for inner function if they finished execution also
// Closures are used in asynchronous code where callbacks or events need to access variables from an outer function.

// Lexical Environment:

// A lexical environment 
    // it has access to take parent variable and function 


// scope
// global scope
// block scope
// local scope
// lexical scope


// first class function => 
            // we can assign veriable for function
            // function can be passed as an argument
            // function can return from another function


// function show(){
//     let a=20;
//     // console.log(a)
//     return function show2(){
//         // let a=2;
//         console.log(a);
//     }

// }
// let result =show();
// console.log(result)        function return krega show2 wala

// console.log(result())           undefined

// result()     
// ye yha 20 answer q ara hai console.log(a) mai lexical scope 20 arhi hai quki lexical scope agr same function mai value nhi mili toh parent ke variable use kr skte hai



// function show(){
//     let a=10;
//     return function show2(){
//         return function show3(){
//             console.log(a);
//         }
//     }
// }

// eske andr show2 pura function ayenga
// let result=show()    

// eske andr show3 function ayega
// let result2=result() 

// console.log(result2)  
// result2() 
// agr result() likte toh undefined ata quki fir wo value leta hai agr hongi toh


// function main(){
//     let count=0;
//     return function main2(name="rohini"){
//         count+=1
//         if(count==3){
//             console.log(name)
//         }
//     }
// }

// let result=main()
// result()
// result()
// result()




// closures example
// function multiply(a){
//     return function mul1(b){
//         return function mul2(c){
//             return a*b*c

//         }
//     }
// }
// let result=multiply(10);
// let result2=result(2);
// console.log(result2)
// console.log(result2(2))




// currying =>  it is a sequence of nested function it return function till argument not received
// function multiply(a){
//     return function mul1(b){
//         return function mul2(c){
//             return a*b*c

//         }
//     }
// }
// let result=multiply(10)(5)(2);
// console.log(result)