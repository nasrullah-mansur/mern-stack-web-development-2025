

let count = 0;

let countDiv = document.getElementById('count-div');
let incrementBtn = document.getElementById('increment')
let decrementBtn = document.getElementById('decrement')

let increment = () => {
    countDiv.innerHTML = ++count;
}

let decrement = () => {
    countDiv.innerHTML = --count;
}



incrementBtn.addEventListener('click', increment)
decrementBtn.addEventListener('click', decrement)
let content = document.getElementById('content');

// content.style.display = 'none'

// document.getElementById('toggler').addEventListener('click', () => {

//     if(content.style.display == "none") {
//         content.style.display = 'block'
//     }
//     else {
//         content.style.display = 'none'
//     }
// })


document.getElementById('toggler').addEventListener('click', () => {

    let checkClassName = content.classList.contains('hidden');

    if(checkClassName) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }

})