

// object.seal()
// it is work like after using this we not delete and add new in this
// we only can update thing in it

// const obj={
//     name:"rohini",
//     age:18
// }

// obj.name="shubhu";
// obj.age=20;
// Object.seal(obj)      eske bd ka kuch bhi work nhi kr rha esne seal kr diya
// delete obj.name;
// obj.addres="bhandara"
// console.log(obj);



// Object.seal()
// it return array with key and value
// it firstly convert into array and then return in the form of key and value


// const obj={
//         name:"rohini",
//         age:18
// }

// const answer=Object.entries(obj);
// console.log(answer);

// for(let i =0;i<answer.length;i++){
//     let key= answer[i][0];
//     let value=answer[i][1];
//     console.log(key,value);
// }

    




// PROTOTYPE

// prototype is a object 
// every object in js has prototype


// const moreHobbies={
//     "hobby3":"reading",
//     "hobby4":"writing",
// }


const hobbies={
    "hobby1":"singing",
    "hobby2":"dancing",
}
// // console.log(hobbies,"hobbies");

// // console.log(hobbies.hobby1,"hobbies");

// // console.log(hobbies.hobby2,"hobbies");

// // hobbies and moreHobbies combineboth me copy ho gya    

// const combineboth=Object.assign({},hobbies,moreHobbies);

// // newHobby me combineboth ka prototype create ho gya
// const newHobby=Object.create(combineboth);

// // new add kr diya 
// newHobby.hobby6="painting";

// console.log(newHobby.hobby6);

// console.log(newHobby);




// constuctor function

// it works like factory function 
// it used regular function

// function Student(name,age){
    // studentdails hmra empty object hai
    // studentdetails hm this keyward ko assign kr rhe hai
    //  {} empty object is created (cheack comment two this lines)
    // this.name=name;
    // this.age=age;
    // no need to write return js automatically return the object and this is our object 
    // return this.name,this.age

//     this.printdetails=function(){
//         console.log(`hey i am ${this.name} my age is ${this.age}`);
//     }
// }

// const StudentDetails1=new Student("rohini",25);
// const StudentDetails2=new Student("shubu",20);

// console.log(StudentDetails1);
// console.log(StudentDetails2);
// StudentDetails2.printdetails();




// Destructuring

// it use to extract the array element and store to the another element
// we are exaccted each element is on the indexing and store it in a veriable 


// let arr=[1,2,3,4,5];
// let firstName=arr[0];
// let secondName=arr[1];
// let thirdName=arr[2];
// console.log(firstName,secondName,thirdName);

// instead of this after ES6 we have new style

// let [firstName,secondName,thirdName,four,five]=arr;
// console.log(firstName,secondName,thirdName,four,five);



// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// let [,,,,,,,,,,,,,,result]=arr;

// console.log(result);


// let user={
//     name:"rohini",
//     age:20,
// }

// let {age,name}=user;

// console.log(name);