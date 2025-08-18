// one();

// let one = () => {
//     console.log('this is one');
// }


// two();


// function two() {
//     console.log('this is two');
// }


// let three = () =>  'this is three';

// console.log(three());

// setTimeout(()=>{
//     console.log('this is from set timeout function');
// }, 2000);

// let time = 1;

// setInterval(()=>{
//     console.log(time++);
// }, 1000);

let output = undefined;


let f1 = (callback) => {
    console.log('hello from f1');

    callback()
}

let f2 = (callback) => {
    setTimeout(() => {
        output = [1,2,3];
        console.log(output);
        callback()
    }, 1000);
}

let f3 = () => {
    output.map((item) => {
        console.log(item);
    })
}

// f1();
// f2();
// f3();

// f1(function() {
//     f2(function() {
//         f3()
//     })
// });

let test = 100;

let p1 = () => {
    return new Promise((resolve) => {
        console.log('this is promise one');
        resolve();
    });
}

let p2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('this is promise two');
            resolve();
        }, 1000);
    })
}


let p3 = () => {
    return new Promise((resolve) => {
        console.log('this is promise three');
        resolve();
    });
}

// p1()
// .then(() => p2())
// .then(() => p3())



let ff1 = async () => {
    console.log('this is from ff1');
}

let ff2 = async () => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('this is from ff2');
            reject()
        }, 2000);
    }));
}

let ff3 = async () => {
    console.log('this is from ff3');
}


let output2 = async () => {
    try {

        await ff1();
        await ff2();
        await ff3();

    } catch (error) {
        console.log(error);
    }
    
}

// output2();

fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => res.json())
.then((data) => console.log(data))


