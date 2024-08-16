

// let grandparent=document.querySelector(".grandparent");
// let parent=document.querySelector(".parent");
// let child=document.querySelector(".child");
// const button = document.querySelector(".btn");


// EventBubbling
// grandparent.addEventListener("click",()=>{
//     // console.log("Grandparent bubbling");
//     alert("grandparent bubbling")
// })

// //stopPropagation => stop krta hai but maine parent tk lgya hai stop to ye 
// //parent lega fir stop krega
// parent.addEventListener("click",(e)=>{
//     // console.log("parent bubbling");
//     e.stopPropagation();
//     alert("perent bubbling")
    
// })


// child.addEventListener("click",(e)=>{
//     // console.log("child bubbling");
//     // e.stopPropagation();
//     alert("child bubbling")
// })


//Event capturing / trickling 
// grandparent.addEventListener("click",()=>{
//     // console.log("Grandparent capturing");
//     alert("grandparent capturing")
// },
// {capture: true}
// );


// parent.addEventListener("click",(e)=>{
//     // console.log("parent capturing");
//     e.stopPropagation();
//     alert("parent capturing")
// },
// {capture:true}
// );


// child.addEventListener("click",()=>{
//     // console.log("child capturing");
//     alert("child capturing");
// },
// {capture:true}
// );



//once:true => ye ek hi bar print krta hai
// for event bubbling (both use caputure and once)

// grandparent.addEventListener("click",(e)=>{
//     console.log("Grandparent bubbling");
//     // e.stopPropagation();
    
// },
// {once: true}
// );


// parent.addEventListener("click",(e)=>{
//     console.log("parent bubbling");
//     e.stopPropagation();
    
// }, 
// {once:true}
// );


// child.addEventListener("click",(e)=>{
//     console.log("child bubbling");
//     // e.stopPropagation();
    
// },
// {once:true}
// );



// event capture 
// (once and capture both using here)
// grandparent.addEventListener("click",(e)=>{
//     console.log("Grandparent capture");
//     e.stopPropagation();
    
// },
// {once: true ,capture: true}
// ); 


// parent.addEventListener("click",(e)=>{
//     console.log("parent capture");
//     e.stopPropagation(); 
    
// }, 
// {once: true ,capture: true}
// );


// child.addEventListener("click",(e)=>{
//     console.log("child capture");
//     e.stopPropagation();
    
// },
// {once: true ,capture: true}
// );


 
//to remove element afetr a given time
//setTimeout
// removeEventListener

// function printGrandparent(){
//     console.log("grandparent buubling");
// }

// grandparent.addEventListener("click",printGrandparent);

// setTimeout(()=>{
//     grandparent.removeEventListener("click",printGrandparent);
// },2000)


//remove element after a given time using a button

// const button=document.querySelector(".btn");

// function printGrandparent(){
//     console.log("grandparent bubbling");
// }
// grandparent.addEventListener("click",printGrandparent);

// function removeEventListener(){
//     setTimeout(()=>{
//         grandparent.removeEventListener("click",printGrandparent);
//     },2000)
// }

// button.addEventListener("click",removeEventListener);



