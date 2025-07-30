// data types 
// 1. string 
// 2. number / integer 
// 3. object 
// 4. array 
// 5. null
// 6. boolean 
// 7. undefined 

// let a = {
//   name: 'khaled',
//   age: 25
// }

// let b = {
//   name: 'khaled',
//   age: 25
// }

// if(a == b) {
//   console.log('soman soman');
// }


// function foodCartItem(image, title, price) {
//   // let image = "image1.jpg";
//   // let title = "title one";
//   // let price = "20";

//   // let myCart = "My image name is: " + image + " " + title + " " + price;
//   let myCart = `Image Name: ${image} | Title: ${title} | Price: ${price}`;

//   // console.log(myCart);

//   return myCart;
  
// }


// let img = foodCartItem("<img src='image1.png' />", 'title one', 10);
// let img2 = foodCartItem("<img src='image2.png' />", 'title two', 20);

// let h1 = document.getElementById('h1');
// let headingNumberTwo = document.getElementById('h2');

// h1.innerHTML = img;
// headingNumberTwo.innerHTML = img2;

// console.log(img);



function student(name, age = "vai tomar boyos koto?", bgColor = "bg-purple-500") {
  let output = `
    <div class="${bgColor} p-3 mb-2 text-center">
        <h1 class="text-3xl">${name}</h1>
        <span>${age}</span>
    </div>
  `;

  return output;
}


// let khaled = student("khaled Hassan", 15);
// let jayed = student("jayed khan", 18);
// let tamim = student("Tamim Hassan", 20);

// console.log(khaled);
// console.log(jayed);
// console.log(tamim);


let khaledDiv = document.getElementById('khaled_div');
let jayedDiv = document.getElementById('jayed_div');
let tamimDiv = document.getElementById('tamim_div');
let masudDiv = document.getElementById('masud_div');

console.log(khaledDiv, jayedDiv, tamimDiv);

khaledDiv.innerHTML = student("khaled Hassan", 15, "bg-red-500");
jayedDiv.innerHTML = student("jayed khan", 18, "bg-green-500");
tamimDiv.innerHTML = student("Tamim Hassan", "bg-yellow-500");
masudDiv.innerHTML = student("Tarek Masud", 20);



