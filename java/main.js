console.log("java script is running");
/* longer js block comment\
-const is type of variable - a bit of memory that can hold a value

JS uses (can use) ANY valid CSS selector to make a connection to ANY element on the page =- it work the same way as CSS selection do, because it's USEING  css selector  


*/

// step 1- make the connect to the element(S) you want to interact with 
const jpgGraphic = document.querySelector('#bitmap');

function logID() {
    console.log(this.id);
}

jpgGraphic.addEventListener('click', logID);
