let myP = document.querySelector('#my-p');

myP.addEventListener("click", afterClickAction);

let count = 1;

function afterClickAction() {
    console.log("Count is: " + count++);
}
