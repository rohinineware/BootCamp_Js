

// 17/4/24

// using for creating new array

// let arr=[]
// let arr=new Array();
// console.log(arr)

// let arr=[1,2,3,4,5];
// console.log(arr[0]);
// console.log(arr[5]);   output - undefined


// replace the element

// let arr=["r","v","b","d"];
// arr[1]="rohini"
// console.log(arr)


// splice is inbuilt method

// let arr=["r","v","b","d"];
// arr.splice(1,0,"neware")
// console.log(arr)


// length of array

// let arr=["r","t","y"]
// console.log(arr.length);


// fecth different data type in one

// let arr=["surat",{name:"rohini"},10,true,function(){
//     console.log("hello");
// }]
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[1].name);
// arr[4]()


// access last value

// let arr=["r","t","y"];
// console.log(arr[arr.length -1]);
// console.log(arr.at(-1));

// methods of array

// push() = adding in last
// pop()  = remove the last element
// shift() = remove the first element
// unshift()   =adding in last

// push()
// let arr=["r","t","y","u"];
// arr.push("rohini");
// console.log(arr);


// pop()
// let arr=["r","t","y","u"];
// arr.pop();
// console.log(arr);


// shift()
// let arr=["r","t","y","u"];
// arr.shift();
// console.log(arr);


// unshift
// let arr=["r","t","y","u"];
// arr.unshift("rohini");
// console.log(arr);


// let arr=["rohini","neware"];
// arr.push("p","q");
// arr.unshift("k","l")
// arr.pop()
// console.log(arr);

// let arr =["rohini"];
// let arr1=arr;
// arr1.push("sheetal")
// console.log(arr1)
// hmne old arry copy  kiya new array mai our agr new array mai kuch change krege toh same change old array mai bhi hota hai 

// let arr=[];
// arr[99]="rohini";
// console.log(`length of th array is:`,arr.length);
// console.log(arr);


// let arr=[];
// console.log(arr.length);

// let arr=[];
// console.log(arr);


// loops in array


// let arr=["rphii","jya","hiodf"];
// for(let i=0;i <arr.length; i++){
//     console.log(arr[i]);
// }

// let arr=[1,2,3,4,5];
// for(let i=0;i <arr.length; i++){
//     console.log(arr[i]);
// }

// let arr=[1,2,3,4,5];
// for(let i=arr.length-1;i >=0; i--){
//     console.log(arr[i]);
// }

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let a=[];
// let b=[]
// for(let i=arr.length-1;i >=0; i--){
//     if (arr[i]%2==0){
        
//         a.unshift(arr[i]);
//     }
//     else{
        
//         b.unshift(arr[i]);
//     }
// }
// console.log("even",a);
// console.log("odd",b);


// let arr=[];
// arr[21]="rohini";
// console.log(arr.length);
// console.log(arr);


// let arr=["rohini","shubhu","p","r","s"];
// arr.length=3;
// console.log(arr);

// arr.length=5;
// console.log(arr);
// console.log(arr[4]);


// let arr=new Array(5);
// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])      output-undefined



// 18/4/2024



// let arr=[1,2,3,4,5];
// console.log(String(arr) === "1,2,3,4,5");

// console.log([1,2]+[3,4]);


// console.log("hello"+"js")

// console.log([1,2]+[3,4])

// console.log([1,2,,]);

// console.log([,,1,2]);

// console.log([1,2,]+[2,3])

// console.log([1,2]+[,3,3]);

// console.log(1+ + "w");

// let arr=([1,2]+3);
// console.log(typeof arr);

// let arr1=([1,2]+"3");
// console.log(typeof arr1);

// console.log([]+1); empty array convert hora string mai isliye 1 print kr rha string mai

// console.log([1] + 1);  arrasy ka 1 string me convert hoga then it will concat 1 and output is 11


// console.log([7] + 1 + 2);  1 and 2 string me hai dyan me rkhna isliye 712 print kra


// console.log([]==[]);   array and object have there own memory location and they check location also that's why it will print false


// console.log("" == ""); ye true hai quiki iski koi memory location nhi hoti only array and object have memory location

// and ye empty string falsy value hai jo ki same hoti hai


// console.log(0 == '');


// let arr = [1,2,3,4,5];
// arr.push(6)
// console.log(arr.length)



// Array Methods


// 1.join()
// 2.reverse()
// 3.slice()
// 4.splice()
// 5.concat()
// 6.indexOf()
// 7.lastIndexOf()
// 8.includes()
// 9.find()
// 10.findsIndex()
// 11.filter()
// 12.map()
// 13.reduce()



// splice = for delete the item
 
//  delete item using splice

// let arr=["rohini","shubhu","shital","alpesh","akshay"];

// // first one mtlb 1 indexing se start krega
// // second one mtlb only 1 item lega
// arr.splice(1,1);
// console.log(arr);


// replace krenge splice ki help se

// let arr=["rohini","shubhu","shital","alpesh","akshay"];
// arr.splice(1,1,"apple");
// console.log(arr);


// // hm kitne bhi name add kr skte hai 
// let arr=["rohini","shubhu","shital","alpesh","akshay"];

// arr.splice(1,1,"r","t","y");
// console.log(arr);


// let arr=[1,2,3,4,5];
// arr.splice(0,2,6,7,8);
// console.log(arr);

// what is happen here in last example we are working with string but this is array but doing same work


// let arr=[1,2,3,4,5];
// arr.splice(-1,0,6,7,8);
// console.log(arr)


// let arr=[1,2,3,4,5];
// arr.splice(0,0,6,7,8);
// console.log(arr)






// 19/4/24



// slice()

// let arr=["rohini","neware","sita","gita","rita"];
// console.log(arr.slice(1));
// console.log(arr.slice(1,3));
// console.log(arr.slice(-2));
// console.log(arr.slice(-2,4))


// concat()

// let arr=[1,2]
// let arr1=[3,4];
// console.log(arr.concat(arr1))


// let arr=[1,2]
// console.log(arr.concat(3,4));
// console.log(arr.concat([3,4]));
// console.log(arr.concat([3,4],[5,6]));
// console.log(arr.concat([3,4],5,6));


// indexOf()

// let arr=["rohini","neware","sita","gita","rita"];
// console.log(arr.indexOf("neware"))


// lastIndexOf()

// let arr=["rohini","neware","sita","gita","rita","neware"];
// console.log(arr.lastIndexOf("neware"))


// includes()

// let arr=["rohini","neware","sita","gita","rita","neware"];

// console.log(arr.includes("rohini"))
// console.log(arr.includes("ram"))


// let arr=[NaN];
// // includes bohot bad mai add kiya tha toh sabhi value ke check kiya gya tha toh ye true false mai ansert deta hai
// // lekin indexOf jo hai woh bohot pehle hi add kiya tha toh ye sabhi value ke liye check nhi kiya tha toh ye kisi kisi value ke liye -1 print krt a hai
// console.log(arr.indexOf(NaN))
// console.log(arr.includes(NaN))


// find()

// let arr=[
//     {name:"rohini",age:10},
//     {name:"ro",age:20},
//     {name:"hini",age:30},
//     {name:"ni",age:40},
//     {name:"r",age:50}
// ];

// let user=arr.find(element => element.age=== 40);
// console.log(user);


// let arr=[1,2,3,4,5]
// let a= arr.find(ele=> ele>2)
// console.log(a)


// let user=arr.find(function (element){
//     return element.age=== 20;
// });
// console.log(user);

// eram qus

// arr=[{age:12,name:"Khan"},
// {age:20,name:"sajal"}]
// let user=arr.find((element)=>{
//     if (element.age===12){
//         return element.name
//     }

// })
// console.log(user)


// findIndex()

// let arr=[
//     {name:"rohini",age:10},
//     {name:"ro",age:20},
//     {name:"hini",age:30},
//     {name:"ni",age:40},
//     {name:"r",age:50}
// ];

// let index=arr.findIndex((element)=>element.name==="rohini");
// console.log(index);


// reverse()

// let arr=["rohini","neware",123]
// console.log(arr.reverse())


// let arr =[1,2,3,4,5,6];
// console.log(arr.reverse());


// join()

// let arr=["rohini","neware"]
// console.log(arr.join())
// console.log(arr.join(" "))
// console.log(arr.join(", "))
// console.log(arr.join(" - "))


// string reverse()

// let str="rohini";
// console.log(str.split("").reverse().join(""))
// console.log(str.split(""));
// console.log(str.split("").reverse().join(" "))


// string reverse using loop

// let str=["rohini","neware"];
// let str1=[];
// for (let i=0;i<str.length;i++){
//     let array=str[i].split("").reverse().join(" ");
//     str1.push(array);
// }
// console.log(str1);



// let a=["gayatri","pooja","seema"];
// let k=a.map((e)=>e.split("").reverse().join(""));
// console.log(k); 


// map()  = transforms the array and used to making new array

// let arr=[1,2,3,4,5];
// let b=arr.map(e=> e*2)
// console.log(b)


// let newArr = arr.map((element)=> element*2);
// console.log(newArr);

// let newArr = arr.map((element,index)=> element*index);
// console.log(newArr);


// filter() = filter takes each elememt array and it apply first conditional statement

// let arr=[1,2,3,4,5];

// let newArr=arr.filter((element) => element%2===0);
// console.log(newArr)

// let newArr=arr.filter((element,index) => index%2===0);
// console.log(newArr)


// reduce() = it used accumulator and each element in the array (from left to right) to reduce it and to returned value of the previous iteration
// accumulator starts with the initial value 0.
// In each iteration, accumulator is updated by adding the current element.
// After iterating over all elements in the array, the final value of accumulator (which is the sum of all elements) is returned.

// let arr=[1,2,3,4,5];
// let a=arr.reduce(function(accumulator,ele){
//     return accumulator*ele;
// });
// console.log(a);


// let arr=[1,2,3,4]
// let a=arr.reduce(function(accumulator,ele){
//     return accumulator+ele;
// })
// console.log(a)


// let sum=arr.reduce(function(accumulator, element){
//     return accumulator + element;
// });
// console.log(sum)

// (accumulator + element)
// 0+1=1
// 1+2=3
// 3+3=6
// 6+4=10
// 10+5=15
// ans is 15




// let sum=arr.reduce((accumulator,element) => accumulator +element,0);
// console.log(sum)


// let sum=arr.reduce(function(accumulator, element,index){
//     return accumulator + element + index ;
// },0);
// console.log(sum)


// sort()

// let arr=[4,7,12,8];
// console.log(arr.sort())
// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr)




// 20/4/24



// every()
// let arr=[1,2,3,4,5]
// if all condition is true 
// let result = arr.every((element)=>element>0);
// console.log(result);

// let result = arr.every((element)=>element>5);
// console.log(result);


// some()
// if one condition is true it's give true

// let arr=[1,2,3,4];
// let result=arr.some((element)=>element > 4 );
// console.log(result);

// let result=arr.some((element)=>element > 1 );
// console.log(result);



// forEach()
// it will print each and every element

// let arr=[1,2,3,4,5];
// arr.forEach((element)=>console.log(element));

// arr.forEach((element,index)=>console.log(element,index));

// arr.forEach((element,index,array)=>console.log(element,index,array));



// fill()
// it will fill 0 instead of 1,2,3,4,5

// let arr=[1,2,3,4,5];
// console.log(arr.fill(0));

// let arr=[1,2,3,4,5]
// console.log(arr.fill("r",1,4))

// arr.fill(0);
// console.log(arr);

// arr.fill(0,1,3);
// console.log(arr);

// arr.fill(0,1);
// console.log(arr);

// arr.fill("a",1,4);
// console.log(arr)

// arr.fill("a",1,4);
// arr.fill("b",3);
// console.log(arr);



// Array.isArray()
// it will give true if you check it is array

// array ke alava kuch bhi lenge toh it will give false

// let arr=[1,2,3,4,5];
// console.log(Array.isArray(arr));

// let arr="ro";
// console.log(Array.isArray(arr));







