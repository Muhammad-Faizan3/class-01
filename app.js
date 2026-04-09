
// // // // // var myName = // Camel case
// // // // // var MyName = // pascal case
// // // // // myname // kabab case

// // // // // var myName = 'Muhammad faizan';
// // // // // var num1 = 12;
// // // // // var num2 = 14;
// // // // //  document.write(myName + '<br> ' + num1 + ' ' + num2)

// // // // // var orginalNumber = '23';
// // // // // var  newNumber =  orginalNumber +7;
// // // // // document.write(newNumber)


// // // // // var firstName = "new";
// // // // // var lastName = "world";
// // // // // var fullName = firstName + " " + lastName;

// // // // // document.write(fullName)

// // // // // if else condition

// // // // // var age = prompt("Enter your age");
// // // // // if (age >= 18) {
// // // // //     document.write("You are eligible to vote");
// // // // // } else {            
// // // // //     document.write("You are not eligible to vote");
// // // // // }


// // // // // var user = prompt("Enter your City name?");
// // // // // var city = "Karachi";
// // // // // if (user === "Karachi") {
// // // // //     document.write("Welcome to the city of lights");
// // // // // } else {
// // // // //     document.write("Welcome to " + user);
// // // // // }

// // // // // for (let i = 1; i < 20; i++) {
// // // // //     if (i % 2 === 0 ) {
// // // // //         document.write(i + " is even number <br>");
// // // // //     } else {
// // // // //         document.write(i + " is odd number <br>");
        
// // // // //     }
// // // // // }

// // // // // var inp = document.getElementById('inp');
// // // // // var ul = document.querySelector('ul');

// // // // // var todes = JSON.parse(localStorage. getItem('todes')) || [];

// // // // // function randerTodo() {
// // // // //     inp.value


// // // // // let user = prompt('Enter your text?');
// // // // // let count = 0;

// // // // // for(let i = 0; i < user.length; i++) {
// // // // //     let latter = user[i].toLocaleLowerCase();
// // // // //     if(latter === 'a' || latter === 'v' || latter === 'i' || latter === 'o' || latter === 'u') {
// // // // //         count ++
// // // // //     }
// // // // // }
// // // // // console.log(user);

// // // // // console.log(count);

// // // // // let user = prompt('Enter your age');

// // // // // if(user < 18){
// // // // //     console.log('Are you vote');
// // // // // }else{
// // // // //     console.log('Are You not vote');
    
// // // // // }


// // // // let sum1 = +prompt('Enter your subject 1 marks');
// // // // let sum2 = +prompt('Enter your subject 2 marks');
// // // // let sum3 = +prompt('Enter your subject 3 marks');
// // // // let sum4 = +prompt('Enter your subject 4 marks');
// // // // let sum5 = +prompt('Enter your subject 5 marks');

// // // // let sum = sum1 + sum2 +sum3 +sum4 +sum5;
// // // // // console.log(sum);
// // // // let obMark = sum;
// // // // let total = 500;
// // // // let percengate = (sum * 100) / total;
// // // // console.log(percengate);

// // // // let grade;

// // // // if (grade <= 100 && percengate > 90){
// // // //     console.log('A+ grade');
// // // // }else if (grade <= 90 && percengate > 80){
// // // //     console.log('A+ grade');
// // // // }else if(grade <= 80 && percengate > 70){
// // // //     console.log('B+ grade');
// // // // }else if(grade <= 60 && percengate > 50){
// // // //     console.log('B grade');
// // // // }else if(grade <= 50 && percengate > 40){
// // // //     console.log('C grade');
// // // // }else if(grade <= 40 && percengate > 30){
// // // //     console.log('D grade');
// // // // }else{
// // // //     console.log('Fail');
    
// // // // }


// let num1 = +prompt('Enter your first number?');
// let num2 = +prompt('Enter your second number?');
// let operater = prompt('Plz select operater (+ - * /');
// let calculate = 0;


// if(operater === '+') {
//     calculate = num1 + num2
// }else if (operater === "-") {
//    calculate = num1 - num2
// }else if(operater === '*') {
//    calculate = num1 * num2
// }else if(operater === "/") {
//    calculate = num1 / num2
// }else {
//     document.write('Plz Enter your correct operater')
// }
// document.write("Result " + calculate)

// // // let arr = ['apple','Mango','Banana','Kea'];
// // // arr.pop();
// // // arr.push('toyota','honda','audi');
// // // arr.shift()
// // // arr.unshift()
// // // console.log('pop ',arr);
// // // console.log('push ' +arr);
// // // console.log('shift ' + arr);
// // // console.log('UnShift ' + arr);
// // // console.log(arr);



// // // let fruits = ["Apple", "Banana", "Mango", "Orange"];

// // // for(let i = 0; i < fruits.length; i++) {
// // //     console.log(fruits [i]);
    
// // // }

// // // let numbers = [10, 5, 8, 20, 3];
// // // let sum = 0;

// // // for (let i = 0; i < numbers.length; i++) {
// // //   sum += numbers[i];
// // // }

// // // console.log("Total Sum:", sum);


// // // let num1 = + prompt('Enter your first number?');
// // // let num2 = + prompt('Enter your second number?');
// // // let operater = prompt('Plz slect your operater + - * /');
// // // let calculate = 0;

// // // if (operater === '+') {
// // //   calculate = num1 + num2
// // // }else if (operater === '-') {
// // //   calculate = num1 - num2
// // // }else if (operater === '*') {
// // //   calculate = num1 * num1
// // // }else if  (operater === '/') {
// // //   calculate = num1 + num2
// // // }
// // // alert ('Result ' + calculate)

// // // let arr = ['apple','Mango','Banana','Kea'];

// // // arr.unshift();

// // // console.log(arr);


// // // let fruits = ["Apple", "Banana", "Mango", "Orange"];
// // // fruits.splice(1,2,'faizan','Afzal' )
// // // console.log(fruits);

// // // let contari = ['pakisten','india','china','japan','bangladash'];
// // // let newArr = contari.slice(1);
// // // console.log(newArr);

// // // function

// // // function alertUser(user) {
// // //     user = prompt('Enter your Name ?');
// // //     console.log(`Assalamualkum ${user} how are you`);

// // // }
// // // alertUser();

// // // let age = prompt("Enter your Age?");

// // // if(age > 18){
// // //     alert("You are engible a vote")
// // // }else if(age < 18){
// // //     alert("You are not engible")
// // // }else{
// // //     alert("Error")
// // // }

// // // function sum (a,b) {
// // //     return a + b;
// // // }
// // // let result = sum(4,7);
// // // console.log(result);


// // // function chack (num) {
// // //     num = prompt('Enter your number')
// // //     if (num % 2 ===0) {
// // //         console.log("even");
// // //     }else{
// // //         console.log('old');
        
// // //     }
// // // }
// // // chack()

// // // function green (num){
// // //     num = prompt('Enter your number')
// // //    return num * num;
// // // }
// // // console.log(green());

// // // function largestNumber(a, b) {
// // //   if (a > b) {
// // //     return a;
// // //   } else if (b > a) {
// // //     return b;
// // //   } else {
// // //     return "Both are equal";
// // //   }
// // // }

// // // // Example
// // // console.log(largestNumber(10, 5));  // 10
// // // console.log(largestNumber(4, 9));   // 9
// // // console.log(largestNumber(7, 7));   // Both are equal


// // function getStringLength() {
// //   let str = prompt("Enter a string:");
// //   return str.length;
// // }

// // let result = getStringLength();
// // alert("String length is: " + result);

// // let num = 2;
// // let num2 = 3;
// // console.log(num * num2);

// // let user = prompt('Enter tour number?');

// // for(let i = 1; i < 11; i++) {
// //     console.log(user + " X"  + i + " = " + user *i);
    
// // }

// // let inp = document.getElementById('inp');
// // let ul = document.querySelector('ul');
// // let todes = JSON.parse(localStorage. getItem('todes')) || [];
// // function submit() {
// //     console.log(inp.value);
// // }

// // Function

// // function alertUser () {
// //     var user = prompt('Enter Your name?');
// //     alert(`assalamunwailkum ${user}`)
// // }
// // alertUser()


// // function greet (a , b) {
// //     return a+b;
// // }
// // for(let i = 0; i < 10; i++) {
// //     console.log(i);
    
// // }
// // greet(2,4)

// // function ckeckEvenOld(num) {
// //     if (num % 2 === 0) {
// //         return 'even';
// //     }else{
// //         return 'old';
// //     }
// // }
// // console.log(ckeckEvenOld(2));
// // console.log(ckeckEvenOld(3));

// // function squre(num) {
// //     return num *num;
// // }
// // console.log(squre(5));

// // function largestNumber(a,b) {
// //     if(a > b) {
// //         return a;
// //     }else{
// //         return b;
// //     }
// // }
// // // console.log(largestNumber(7,10))

// // function getLenght(str) {
// //     return str.length
// // }
// // console.log(getLenght('faizan'));


// let age = prompt('Enter your number');

// if (age > 18) {
//     console.log('vote for');
// }else{
//     console.log('note');
    
// // }

// let num = prompt('Enter your first Name?');
// let num1 = prompt('Enter your Last Name?');
// console.log(num+num1);

// let inp = document.getElementById('name');
// let email = document.getElementById('email');
// let todos =  JSON.parse(localStorage. getItem('todes')) || [];

// function submit() {
//     console.log(inp.value,email.value);
    
// }


// let user = +prompt('Enter your first Number?');
// let user1 = +prompt('Enter your last Number?');
// let operater = prompt('Select a operater + - * / ');
//  let calculate = 0;

// if(operater === '+'){
//     calculate = user + user1
// }else if(operater === '-'){
//     calculate = user - user1
// }else if(operater === '*') {
//     calculate = user * user1
// }else if(operater === '/') {
//     calculate = user / user1
// }else{
//     alert("Not a Number")
// };
// document.write(`Result ${calculate}`)


// let age = +prompt('Enter your age?');

// if(age >= 18) {
//     alert('Are you eligible')
// }else{
//     alert('Are not eligible')
// }

// let user = 'Faizan';

// for(i = 0; i <=10; i++) {
//     console.log(user,i);
// }


// let arr = ['apple','Mango','Banana','orange'];
// // arr.pop()
// arr.slice(2)
// console.log(arr);


// for(i = 0; i <=10; i++){
//     console.log(i);
    
// }

// let arr = [1, 2, 3, 4, 5];
// let reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }

// console.log(reversed); // [5, 4, 3, 2, 1]

let arr = [1, 2, 3, 4, 5, 6];

if (arr === 2){
    
}
