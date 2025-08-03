
let arr = [1,2,3,4,5,6,7];
let arr3 = [10,20,30,40,50,60,70];

// Array Methods;
// 1. forEach()

// console.log(arr);

// arr.forEach(function(item) {
//     console.log("this is item no: " + item);
// });


// 2. join();


// let output = arr.join(".");

// console.log(arr);
// console.log(output);


// 3. map();


let newArr = arr.map(function(item) {
    return "This is: " + item;
});


// console.log(arr);
// console.log(newArr);




let arr2 = [
    {
        id: 1,
        studentName: "khaled1",
    },
    {
        id: 1,
        studentName: "khaled2",
    },
    {
        id: 1,
        studentName: "khaled3",
    }
];

console.log(arr2);

arr2.map(function(item) {
    console.log(item.studentName);
});

