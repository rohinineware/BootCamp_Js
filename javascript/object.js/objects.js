
// 16/4/24 

// objects


// let obj={}   symbol for object


// let user={
//     name:'rohini',
//     age:20,
// };
// console.log(user)
// console.log(user.name)
// console.log(user.age)


// add new key and value

// user.city="pune";
// console.log(user);


// delete 


// delete user.age;
// console.log(user);


// print keys


// let keys=Object.keys(user);
// console.log(keys)


// let user={
//     name:'rohini',
//     age:20,
//     'email id':"sdjhjdh.org",
// };

// let key=Object.keys(user)[0];
// let key1=Object.keys(user)[1];
// console.log(key,key1);


// let user={
//     name:'rohini',
//     age:20,
//     'email id':"sdjhjdh.org",
// };

// console.log(user);
// console.log(user['email id']);
// delete user['email id'];
// console.log(user.name);
// console.log(user.age);
// console.log(user['name']);
// console.log(user["age"]);


// let user={
//     name:'rohini',
//     age:20,
// };

// console.log(user.city)     output-undefined - because it is not inside this obect


// it is taking key name here
// rohini: rohi,

// let fname="rohini";

// let user={
//     [fname]:"rohi",
// }
// console.log(user);
// console.log(user.fname);           output-undefined - not present inside object because in object fname hai usme abhi rohini aagyi hai esliye fname nmka koi keys waha nhi hai toh undefined
// console.log(user.rohini);


// let fruit="apple";
// let bag={};

// bag[fruit]=5;
// console.log(bag);


// let bag={
//     fruit:3,
// }

// bag.fruit=5;

// console.log(bag);


// let fruit="apple";
// let bag={
//      [fruit + 'computer']: 5,
// };

// console.log(bag);
// console.log(bag.applecomputer);


// function makeuser(name,age){
//     return {
//         name: name,
//         age:age,
//     };
    
// }

// let user = makeuser('rohini',20);
// console.log(user);



// function makeuser(name,age){
//     return {
//         name,
//         age,
//     };
    
// }

// let user = makeuser('rohini',20);
// console.log(user);


// function user(name,age){
//     return{
//         name,
//         age: age || 18,
//     }
// }
// let user1=user("ro",20);
// console.log(user1);

// let user1=user("ro");
// console.log(user1);


// let user={
//     1:"one",
    
// }
// console.log(1)
// console.log(user[1])
// console.log(user["1"])


// object assign() = it will used to merged one or more element


// let user1={a:1,b:2};
// let user2={c:3,d:4};

// let user=Object.assign(user1,user2);
// console.log(user);
// console.log(user1);
// console.log(user2);

// let user=Object.assign({},user1,user2);
// console.log(user);
// console.log(user1);
// console.log(user2);



// let user1={a:1,b:2};
// let user2={b:3,d:4};

// let user=Object.assign(user1,user2);
// console.log(user);


// let user1={a:1,b:2};
// let user2={b:3,d:4};

// let user=Object.assign(user2,user1);
// console.log(user);

// let user1={a:1,b:2};
// let user2={b:3,d:4};

// let user=Object.assign({},user1,user2);
// console.log(user);


// let user1={a:1,b:2};
// let user2={b:3,d:4};

// let user=Object.assign({},user2,user1);
// console.log(user);







