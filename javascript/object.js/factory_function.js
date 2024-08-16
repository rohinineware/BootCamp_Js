

// this is the regular pattern here
// here code is repeated again and again

// const stu1={
//     name:"rohini",
//     age:28,
// }

// const stu2={
//     name:"shubhu",
//     age:20,
// }

// const stu3={
//     name:"alpesh",
//     age:18,
// }

// console.log(stu1);
// console.log(stu2);
// console.log(stu3);




// esme kya hai ki hme code bar bar repeat nhi krna pdrha hm sirf argument bar bar pass kr rhe hai


// function createStudent(name,age){
//     return{
//         name:name,
//         age:age,
//         printdetails(){
//             console.log(`I am ${name} and i am ${age} year old`);
//         }
//     }
// }

// let student1=createStudent("rohini",25);

// let student2=createStudent("rohu",65);

// let student3=createStudent("alpesh",18);

// student1.printdetails();
// student2.printdetails();
// console.log(student3);



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
//     return{
//         name:name,
//         age:age,
        
//     }
// }

// let student1=createStudent("rohini",25);
// let student2=createStudent("rohu",65);
// let student3=createStudent("alpesh",18);

// console.log(student1);
// console.log(student2);
// console.log(student3);

// student1.printdetails=printing.printdetails;
// console.log(student1);

// student2.printpassout=passout.printpassout;
// console.log(student2);

// student3.printdetails=printing.printdetails;
// console.log(student3);


// object.create()

let printing={
    printdetails(){
        console.log(`hey i am ${name} and i am ${age} year old`);
    }
}


let passout={
    printpassout(){
        console.log(`hey I am ${name} and iam passout`);
    }
}

function createStudent(name,age){
    let studentproto=Object.create(printing);
    studentproto.name=name;
    studentproto.age=age;

    return studentproto;
}

let student1=createStudent("ro",1);
let student2=createStudent("rawan",10);

console.log(student1,"student1");
console.log(student2,"student2");


