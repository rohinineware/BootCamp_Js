// Class Questions - 
// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript


// function capitalize(str){
//     s=''
//     for(let i=0; i<str.length;i++){
//         if(i==0 || str[i-1]==' '){
//             s=s+str[i].toUpperCase();
//         }
//         else{
//             s=s+str[i];
//         }
//     }
//     return s
// }
// let st="this is javascript";
// let res=capitalize(st);
// console.log(res);



// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]

// 	input - ["java","python","c"]
// 	output - [false, false, false]

// let input=["javascript", "react", "node"];
// let c=[];
// for(let i in input){
//     if (input[i]=='javascript'){
//         c.push('true');
//     }
//     else{
//         c.push('false');
//     }
// }
// console.log(c);
	


// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true
	
// 	input - puran@navgurukul
// 	output - false
	
// 	input - puran@gmail.com
// 	output - true


//let input='n@gmail.com';
// let input='n@navgurukul';
// if (input.endsWith('@.org') || (input.endsWith('@.com'))){
//     console.log("true");
// }
// else{
//     console.log('false');
// }


// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true

// 	input - night, thin
// 	output - true


// function anagram(str1,str2){

//     if(str1.length != str2.length){
//         console.log("false");
//     }
//     let sorted=str1.split("").sort().join("");
//     let sorted1=str2.split("").sort().join("");

    // if(sorted === sorted1){
    //     console.log("true");
    // }
    // else{
        // console.log("false");
//     }
// }
// let str1="below";
// let str2="elbow";
// anagram(str1,str2);



// function anagram(str1,str2){
//     for(let i of str1){
//         if(!(str2.includes(i))){
//             return false;
//         }
//     }
//     return true;
// }
// let str1="below";
// let str2="elbow";
// let ans = anagram(str1,str2)
// console.log(ans)



       


// 5. Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i


// let input='i am learning javascript';
// console.log(input.split("").reverse().join(''));


// 6. Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success

// let input='Success comes to those who work hard';
// let a=input.split(" ").reverse().join(" ");
// console.log(a);