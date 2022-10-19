window.onload = function(){
//form submission

let form = document.querySelector("form");
form.onsubmit = function(event) {
//print values to the story area;
document.querySelector("span#person1a").innerText = "person1";
document.querySelector("span#person1b").innerText = "person1";
document.querySelector("span#person1c").innerText = "person1";
document.querySelector("span#person2a").innerText = "person 2";
document.querySelector("span#person2b").innerText = "person 2";
document.querySelector("span#animal").innerText = "an animal";
document.querySelector("span#verb").innerText = "verb";
document.querySelector("span#noun").innerText = "noun";
document.querySelector("span#exclamation").innerText = "exclamation";

//remove the class attribute
document.querySelector("div#story").removeAttribute("class");

};
};