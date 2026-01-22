//-------Chapter 17 to 30-------//

// Q1       
// let arr = [[], [], []];

// Q2
// let matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];    

// Q3   
// for(let i=1; i<=10; i++){
//     document.write(`${i}<br>`);
// }    

// Q4
// let tableNum = +prompt("Enter a number to show its multiplication table");
// let length = +prompt("Enter length of multiplication table");    
// document.write(`Multiplication table of ${tableNum} <br> Length ${length} <br><br>`);
// for(let i=1; i<=length; i++){
//     document.write(`${tableNum} x ${i} = ${tableNum*i} <br>`);
// }    

// Q5   
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(let i=0; i<fruits.length; i++){
//     document.write(`${fruits[i]} <br>`);
// }    
// document.write("<br>");
// for(let i=0; i<fruits.length; i++){
//     document.write(`Element at index ${i} is ${fruits[i]} <br>`);
// }    

// Q6
// document.write("<h3>Counting:</h3>");
// for(let i=1; i<=15; i++){
//     document.write(`${i} <br>`);
// }
// document.write("<h3>Reverse Counting:</h3>");
// for(let i=10; i>=1; i--){
//     document.write(`${i} <br>`);
// }
// document.write("<h3>Even:</h3>");
// for(let i=0; i<=20; i+=2){
//     document.write(`${i} <br>`);
// }
// document.write("<h3>Odd:</h3>");
// for(let i=1; i<=19; i+=2){
//     document.write(`${i} <br>`);
// }
// document.write("<h3>Series:</h3>");
// for(let i=2; i<=20; i+=2){
//     document.write(`${i}K <br>`);
// }

// // Q7
// let arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to Ali Raza Bakery. What do you want to order sir?").toLowerCase();
// let found = false;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] === userInput){
//         document.write(`${userInput} is available at index ${i} in our bakery`);
//         found = true;
//         break;
//     }    
// }
// if(!found){
//     document.write(`We are sorry. ${userInput} is not available in our bakery`);
// }    



// Q8
// let arr = [24, 53, 78, 91, 12];
// let max = arr[0];        
// for(let i=1; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }    
// }    
// document.write(`The largest number is ${max}`);  

// Q9   
// let arr = [24, 53, 78, 91, 12];
// let min = arr[0];        
// for(let i=1; i<arr.length; i++){ 
//     if(arr[i] < min){
//         min = arr[i];
//     }    
// }    
// document.write(`The smallest number is ${min}`); 



// Q10  
// for(let i=1; i<=20; i++){
//     document.write(`${i*5}, `);
// }
