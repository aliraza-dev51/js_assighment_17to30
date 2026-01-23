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


//---------Chapter21 to 25-------//

// Q1   
// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = `${firstName} ${lastName}`;
// alert(`Welcome ${fullName} !`);    

//Q2
// let userInput = prompt("Enter your favorite mobile phone model");
// document.write(`My favorite phone is: ${userInput} <br> Length of string: ${userInput.length}`);

// Q3
// let str = "Pakistani";
// document.write(`String: ${str} <br> Index of 'n': ${str.indexOf('n')}`); 

// Q4
// let str = "Hello World";
// document.write(`String: ${str} <br> Last index of 'l': ${str.lastIndexOf('l')}`);    

// Q5
// let str = "Pakistani";
// document.write(`String: ${str} <br> Character at index 3: ${str.charAt(3)}`);

// Q6
// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = firstName.concat(" ", lastName);
// alert(`Welcome ${fullName} !`);  

// Q7
// let str = "Hyderabad";
// let newStr = str.replace("Hyder", "Islam");
// document.write(`City: ${str} <br> After replacement: ${newStr}`);    

// Q8
// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let newMessage = message.replace("and","&");
// document.write(newMessage);

// Q9
// let str = "472";
// document.write(`Value: ${str} <br> Type: ${typeof str} <br>`);
// let num = Number(str);
// document.write(`Value: ${num} <br> Type: ${typeof num}`);    

// Q10
// let userInput = prompt("Enter any string");
// let upperCaseStr = userInput.toUpperCase();
// document.write(`User input: ${userInput} <br> Upper case: ${upperCaseStr}`); 

// Q11  
// let userInput = prompt("Enter any string");
// let titleCaseStr = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write(`User input: ${userInput} <br> Title case: ${titleCaseStr}`);

// Q12
// let num = 35.36;
// let str = num.toString().replace(".","");
// document.write(`Number: ${num} <br> Result: ${str}`);

// Q13
// let userName = prompt("Enter your username");
// let invalidChars = ["@", ".", ",", "!"];
// for(let i=0; i<invalidChars.length; i++){
//     if(userName.includes(invalidChars[i])){
//         alert("Please enter a valid username");
//         break;
//     }    
// }    

// Q14  
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
// let found = false;
// for(let i=0; i<A.length; i++){
//     if(A[i] === userInput){
//         document.write(`${userInput} is available at index ${i} in our bakery`);
//         found = true;
//         break;
//     }    
// }
// if(!found){
//     document.write(`We are sorry. ${userInput} is not available in our bakery`);
// }

// Q15
// let password = prompt("Enter your password");
// let isValid = true;  
// if(password.length < 6){
//     isValid = false;
// }
// if(!isNaN(password.charAt(0))){
//     isValid = false;     
// }
// let invalidCharFound = false;
// for(let i=0; i<password.length; i++){    


//     let charCode = password.charCodeAt(i);
//     if(!( (charCode >= 48 && charCode <= 57) || 
//           (charCode >= 65 && charCode <= 90) ||              
//           (charCode >= 97 && charCode <= 122) )){
//         invalidCharFound = true;
//         break;   
//     }
// }
// if(invalidCharFound){        




//     isValid = false;
// }    
// if(isValid){                 
//     alert("Password is valid");
// } else {
//     alert("Password is invalid. It must be at least 6 characters long, not start with a number, and contain only letters and numbers.");
// }    



// Q16
// let university = "University of Karachi";
// let chars = university.split('');
// for(let i=0; i<chars.length; i++){
//     document.write(`${chars[i]} <br>`);
// }            


// Q17
// let userInput = prompt("Enter any string");
// let lastChar = userInput.charAt(userInput.length - 1);
// document.write(`User input: ${userInput} <br> Last character of input: ${lastChar}`);

// Q18
// let str = "The quick brown fox jumps over the lazy dog";
// let count = 0;
// let lowerStr = str.toLowerCase();    
// for(let i=0; i<lowerStr.length; i++){
//     if(lowerStr.slice(i, i+3) === "the"){
//         count++;
//     }    
// }    
// document.write(`Text: ${str} <br> There are ${count} occurrence(s) of word 'the'`);
