

let formtag = document.querySelector("form");
let tabletag = document.querySelector("table");
let tbody = document.querySelector("tbody");


function Add(details) {
  details.preventDefault();

  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let number = document.querySelector(".number").value;


  //sgd lihlya shivay add nhi zlya phije
  if(!name || !email || !number){
    alert("All fields are required.");
    return;
  } 


  //number 10 asle phije
  if(number.length !== 10){
    alert("Phone number must be exactly 10 digits.");
    return;
  }

  tbody.innerHTML += 
        `
        <tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${number}</td>
            <td><button class="removebtn">Remove</button></td>
        </tr>
        `;

//" " eesse name add hone ke bd input clear ho jayenga
document.querySelector(".name").value="";
document.querySelector(".email").value="";
document.querySelector(".number").value="";
}
formtag.addEventListener("submit", Add);



function Remove(details){
    if(details.target.classList.contains("removebtn")){
        details.target.parentElement.parentElement.remove();
    }
}
tabletag.addEventListener("click",Remove);


// The inputs should be cleared after adding a row
// Form should not be submitted if any of the input fields are empty
// Phone number should be of 10 digits
// Two persons should not have the same email and phone number



