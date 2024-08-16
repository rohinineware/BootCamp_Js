
//Recursion
//calling function itself again and again untill base condition is not satisfied
//inside function body
//base condition main condition true hone tk chlega


//callstack 


// function calling(){
//     return calling();
// }
// calling();


//factorial 

// function factorial(n){
//     if (n==0){
//         return 1;
//     }
//     return n*factorial(n-1);
// }
// let num=5;
// console.log(factorial(num));


// function factorial(num){
//     let f=1;
//     for(let i=num;i>=1;i--){
//         f=f*i

//     }
//     return f
// }
// let num=-1;
// console.log(factorial(num));



// function counter(num){
//     if (num>=11){
//         return 1;
//     }
//     console.log(num)
//     return counter(num+1);
// }
// counter(1);

//power

// function power(num,exp){
//     if(exp==0){
//         return 1;
//     }

//     //return Math.pow(num,exp)
//     return num*power(num,exp-1)
// }
// let x=3;
// let y=0;
// console.log(power(x,y))


// function power(num,exp){
//     if(exp==0){
//         return 1;
//     }

//     let output=1;
//     for(let i=0;i<num;i++){
//         output*=num;
//     }
//     return output
// }
// let x=3;
// let y=3;
// console.log(power(x,y))



// function findPow(num,pow){
//     if (pow == 0){
//         return 1;
//     }
//     return num * findPow(num,pow-1);
// }
// console.log(findPow(5,3));


//sum

// function array(arr){
//     if(arr.length==0){
//         return 0
//     }
//     return arr[0] + array(arr.slice(1));
// }
// let a=[1,2,3]
// console.log(array(a))


// function Array(arr,i=0){
//     if (i>=arr.length){
//         return 0;
        
//     }
//     return arr[i]+Array(arr,i+1)
    
// }      
// let output = Array([1,2,3]);
// console.log(output);


// function array(arr,i=0){
//     if(arr.length==i){
//         return 0
//     }
//     return arr[i] + array(arr,i+1);
// }
// let a=[1,2,3]
// console.log(array(a))



// Write a recursive function that takes a number and returns the sum of all the numbers from zero to that number.

// function sum(num){
//     let summ=0;
//     if(num<=0){
//         return 0;
//     }
//     for(let i=0;i<=num;i++){
//         summ+=i;
//     }
//     return summ;
// }
// let a = prompt();
// console.log(sum(a));


// Write a recursive function that takes a number as an input and returns the factorial of that number.

// function directFact(num){
//     if(num==0){
//         return 1;
//     }
//     return num * directFact(num-1)
// }
// let a=prompt();
// console.log(directFact(a));


// Write a recursive function that takes a number ‘n’ and returns the nth number of the Fibonacci number.

// function fibbo(num){
//     if(num<=0){
//         return 0;
//     }
    
//     if(num===1){
//         return 1;
//     }

//     let a=0,b=1,c=0;
//     for(let i=1;i<=num;i++){
        
//         a=b;
//         b=c;
//         c=a+b;
//     }
//     return b;
// }
// let a=prompt();
// console.log(fibbo(a)); 


// Write a recursive function that takes a list of numbers as an input and returns the product of all the numbers in the list.

// function product(array){
//     if(array.length==0){
//         return 0;
//     }
    
    
//     let p=1;
//     for(let i=1;i<=array.length;i++){
//         p*=i;
//     }
//     return p;
// }
// let list=[1,2,3,4,5];
// console.log(product(list))


// function product(arr,i=0){
//     if(arr.length==i){
//         return 1
//     }
//     return arr[i] * product(arr,i+1);
// }
// let a=[1,2,3,4,5]
// console.log(product(a))


// Write a function that takes a string and returns if the string is a palindrome.

// function palindrome(num){
//     if(num<0){
//         return 0;
//     }
//     let dup=num;
//     let result=0;
//     while(num>0){
//         let remin=num%10;
//         result=result*10+remin;
//         num=Math.floor(num/10);
//     }
//     return (result==dup)
// }
// let a=parseInt(prompt());
// console.log(palindrome(a));


// Write a recursive function that takes a string and reverse the string.

// function reverse(str){
//     if(str.length==0){
//         return 0;
//     }
//     return str.split("").reverse().join("")
// }
// let a=prompt();
// console.log(reverse(a));


// Write a recursive function that takes an array of words and returns an array that contains all the words capitalized.
// 	input array :    ['foo', 'bar', 'world', 'hello']
//         output array : ['FOO', 'BAR', 'WORLD', 'HELLO']


// function capital(array){
//     if(array.length<0){
//         return [];
//     }
//     let a=[];
//     for(let i=0;i<=array.length;i++){
//         a.push(array[i].toUpperCase());
//     }
//     return a;
// }
// let list= ['foo', 'bar', 'world', 'hello'];
// console.log(capital(list));



// Write a recursive function to find sum of range a-b numbers.
// 	example - [5,8]
// 	sum = 26

// function sum(a,b){
//     if(a>b){
//         return 0;
//     }
//     let sum=0;
//     for(let i=a;i<=b;i++){
//         sum+=a+1;
//     }
//     return sum;
// }
// let x=5,y=8;
// console.log(sum(x,y));


// function sum(a,b){
//     if(a>b){
//         return 0;
//     }
//     return a + sum(a+1,b);
// }
// let x=5,y=8;
// console.log(sum(x,y))


