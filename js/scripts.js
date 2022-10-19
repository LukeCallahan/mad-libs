window.onload = function(){
//form submission

let form = document.querySelector("form");
form.onsubmit = function(e) {
//get the value from each form input.
const person1Input = document.getElementById("person1Input").value;
const person2Input = document.getElementById("person2Input").value;
const animalInput = document.getElementById("animalInput").value;
const exclamationInput = document.getElementById("exclamationInput").value;
const verbInput = document.getElementById("verbInput").value;
const nounInput = document.getElementById("nounInput").value;


//print values to the story area;
document.querySelector("span#person1a").innerText = person1Input;
document.querySelector("span#person1b").innerText = person1Input;
document.querySelector("span#person1c").innerText = person1Input;
document.querySelector("span#person2a").innerText = person2Input;
document.querySelector("span#person2b").innerText = person2Input;
document.querySelector("span#animal").innerText = animalInput;
document.querySelector("span#verb").innerText = verbInput;
document.querySelector("span#noun").innerText = nounInput;
document.querySelector("span#exclamation").innerText = exclamationInput;

// //remove the class attribute
document.querySelector("div#story").removeAttribute("class");
//prevent default refresh action for the submit event
e.preventDefault();
  };
};