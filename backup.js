
// let arr = ['Apple', 'Banana', "Mango", "Orange", "Pain apple"];

// // let a = arr[0];
// // let b = arr[1];

// let [a, b, ...c] = arr;

// // console.log(a, b, c);

// let arr1 = [1,2,3,4,5];

// let [, , aa] = arr1;

// let arr2 = [10,11,12,13,14];

// let output = arr1.push(...arr2);

// // console.log(arr1);

// function abc(a, b, ...p) {
//     console.log(a, b, p);
// }


// // abc(1,2,3,4,5);

// // let myObj = {
// //     name: "my name",
// //     email: "email@email.com",
// //     address: "Dhaka"
// // }

// // let {name, email} = myObj;

// // name = 'another name'

// // console.log(name, email);


// let a = 100;

// let b = a;

// b = 200;

// console.log(a, b);


// let c = {
//     name: "my name",
//     email: "email@email.com"
// }



// let d = c;

// d.name = "another name"

// console.log(c, d);


function abcd(a, b) {
    return a + b;
}

function ab(a) {
    return function(b) {
        return a + b;
    }
}

// let test = ab(10)(20)

let test = ab(10);

console.log(test(20));





