const userOne = {
  role: "manager",
  firstname: "Vasiliy",
};
const userTwo = {
  role: "admin",
  firstname: "Artym",
};


function showHelloUser(user = "Guest") {
  console.log(`Hello ${user}`);
}
showHelloUser("Vasiliy");
showHelloUser();


function mathStepen(num, step = 1) {
  return num ** step;
}

console.log(mathStepen(2, 8));

function getSred(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
  }
  return sum / arr.length;
}
let someArr = [1, 2, 3];
console.log(getSred(someArr));
console.log(getSred([1, 2000, 3, 4, 5, 5, 6, 40, 5, 6, 6, 8]));

const sayHi2 = () => console.log("Hello!");
sayHi2();

const showStrN = (str, n = 1) => {
    for (let index = 0; index < n; index++) {
        console.log(str);        
    }
}
showStrN('hello',5);

// const isVowel = a => {
//     let arr = ["а", "у", "е", "ы", "о", "я", "и", "ю", "э", "ё"];
//     let answer = false;
//     arr.forEach(element => {
//           if(element === a) {
//             answer = true;
//           }      
//     });
//     return answer;
// }

const isVowel = a => {
  vowelStr = "уеыаоэяию";
  return vowelStr.indexOf(a)>0;
}

console.log(isVowel('а'));

const isPoly = a => {
    let reverseA = a.split('').reverse().join('');
    return a === reverseA;
}
console.log(isPoly("aadAaa"));