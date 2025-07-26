

// let output = 10;

// output -= 2;


// console.log(output);

// let age = 18;

// if(age == 18) {
//     console.log("tumi boro hoye geco!!");
// }

// else {
//     console.log("tumi ekhono soto!!")
// }


let check = 200;

// if(check === "10") {
//     console.log('milce');
// } 

// if(check !== "10") {
//     console.log('milce');
// } 

// if(check <= 10) {
//     console.log('milce');
// } 


// if(check > 20) {
//     console.log('20 theke boro');
// }

// else if(check > 10) {
//     console.log('10 theke boro');
// }

// else {
//     console.log('mileni');
// }

// check > 20 ? console.log('20 theke boro') : console.log('mileni');

// console.log("hello" + " " + "world");

// let one = "hello";

// one += " world";

// console.log(one);


// let studentName = "khaled";

// let studentAge = 20;

// if(studentName == "khaled" || studentAge == 18) {
//     console.log('this is actual student');
// }


// let test1 = 10;

// if(!test1 == 10) {
//     console.log('milce');
// }

// Truthy
// 1. string 
// 2. integer 
// 3. array
// 4. object 
// 5. true

// falsy 
// 1. false
// 2. null 
// 3. undefined
// 4. ""
// 5. 0


// if(!"abcd") {
//     console.log('ami sottobadi');
// }


function test() {
    let a = 10;
    let output = "";

    if(a = 10) {
        output = "this is 10";
    } 
    else {
        output = "this is empty value";
    }

    console.log(output);
}


// test();

// Index number;

let studentNames = ["khaled", "jayed", "rashed"];
let myInfo = [
    "Khaled",
    25,
    "Dhaka",
    "01987878787",
    "myemail@gmail.com",
    "Bangladesh",
    "Islam"
];

// key, value

let myInfoObj = {
    name: "khaled",
    age: 25,
    address: "Dhaka",
    phoneNumber: "01728619733",
    email: "nasrullah.cit.bd@gmail.com",
    country: "Bangladesh",
    religion: "Islam"
}

// console.log(myInfo);
// console.log(myInfoObj);

let myArr2 = [
    "test data",
    123,
    undefined,
    null,
    [1,2,3,4],
    function (){},
    {
        name: 'name'
    }
];

let myObj2 = {
    fName: "khaled",
    lName: "hasan",
    fullName: function() {
        console.log(myObj2.fName + " " + myObj2.lName);
    },
    skill: ['php', 'javascript', 'html', 'css']
}

// console.log(myObj2);
// console.log(myObj2.lName);

// myObj2.fullName();



function newFunction(fName, lName) {
    console.log(fName + " " + lName);
}

// newFunction("khaled", "hassan");

function anotherFn() {
    
    let a = 10;
    let b = 20;

    let output = a + b;

    // console.log(output);

    let authUser = true;

    return true;
}


// console.log(anotherFn());
// document.write(anotherFn());


// let fName = "khaled";
// let lName = "hassan";

// let student = {
//     // fName: fName,
//     // lName: lName
//     fName,
//     lName,
//     email: function(emailProperty) {
//         console.log(emailProperty);
//     }
// }

// // console.log(student);


// student.email('email@email.com');



// function test2(prop) {
//     // let prop = 12345;
//     console.log(prop);
// }

// test2(12345);
// test2("00000000000000000000")
// test2("hello dunia")



// function test3(fname, lname) {
//     console.log(fname + " " + lname);
// }

// test3("khaled", "hassan");
// test3("jayed", "hassan");


function test3(fname, lname, age) {
    let studentName = fname + " " + lname;
    let studentStatus = "";

    if(age >= 18) {
        studentStatus = "tumi boro hoye geso";
    }

    else {
        studentStatus = "tumi ekhono soto";
    }

    let result = "hello " + studentName + " " + studentStatus;

    return result;
    

}

// "hello khaled hassan tumi boro hoye geso"
test3("khaled", "hassan", 20);

// console.log(test3("khaled", "hassan", 20));

// let mrKhaled = test3("khaled", "hassan", 20);

// console.log(mrKhaled);


// let a = undefined;

// console.log(a);


function abc(a) {
    console.log(a);
}

abc('hello');



