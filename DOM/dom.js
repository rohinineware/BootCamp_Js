console.log('DOM.js loaded');


// let boxes=document.getElementsByClassName("box");
// console.log(boxes);


document.querySelectorAll(".box").forEach(elem =>{
    // console.log(elem);
    elem.style.backgroundColor="green";

})

