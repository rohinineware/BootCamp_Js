

// 27/4/24

// console.log("10">"2");  
// after this 10 become 1 after convert into number and check so 1 ascii value is small than 2 ascii value

// console.log("10" > 2);   string convert into number 10 and check 10>2

// console.log("20">"22")  20 becomes 2 and check ascii value with 22 ascii value

// console.log("20" > "2")  starting me 2 hai isliye next value liya compare krne ke liye but there not any value so it take 0 as a max


// console.log("20" > 2)  output is true


//  qus. is print integer when a is devided by b

// let a=20;
// let b=3;

// console.log(Math.floor(a/b))

// let quotient=a/b;
// console.log(`Quotient: ${quotient}`);

// let modulus=a % b;
// console.log(`modulus: ${modulus}`);

// console.log(modulus/b)
// console.log(`integer: ${quotient - modulus / b}`)


//  qus. is print decimal when a is devided by b

// let a=20;
// let b=3;

// console.log((a/b))

// let quotient=a/b;
// console.log(`quotient : ${quotient}`);


//  last and first digit if have 2 number
// let number=23;
// let lastdigit=number%10;
// let firstdigit=Math.floor(number/10);
// console.log(`last: ${lastdigit}`)
// console.log(`first: ${firstdigit}`)



//  last and first digit if have 3 number
// let number=230;
// let firstdigit=Math.floor(number/100);
// let lastdigit=number%10;
// console.log(`last: ${lastdigit}`)



// find max

// let a=20;
// let v=90;
// let c=111;

// let largest=a;
// if (v>largest){
//     largest=v;
// }
// if (c>largest){
//     largest=c;
// }
// console.log(`largest: ${largest}`)



// celcious to fahrenheit

// let celcious=100;
// let fahrenheit=(celcious*9/5)+32;
// console.log(`fahrenheit: ${fahrenheit}`);


// fahrenheit to celcious
// let fahrenheit = 212;
// let celcious=(fahrenheit - 32) *5/9;
// console.log(`celcious: ${celcious}`);



// 27.3.24


// we can write too long value like this also

// let num=10000000;
// let num1=10_000_000;
// let num2=1e7;  7 is no. of zeroes , e means exponencial
// console.log(num);
// console.log(num1);
// console.log(num2);


// let num=2300_000;
// console.log(23e5);


// let num=2300_000;
// console.log(2.3e6);    just converting into decimal


// let num=0.02;
// let num=2e-2;
// console.log(num);


// let num=0.005;
// let num=5e-3;
// console.log(num);

// let num=1.23e3;    e means 10 rest to the power 3
// console.log(num);  



// rounding

// 1.math.floor = remove value after the decimal part

// console.log(Math.floor(3.1))     3 and 4 small is 3
// console.log(Math.floor(-3.1))  -3 and -4 small is -4



// math.ceil() =round up to the nearest integer

// console.log(Math.ceil(3.1)) 
// console.log(Math.ceil(3.9)) 
// console.log(Math.ceil(-3.1)) 
// console.log(Math.ceil(-3.9)) 



