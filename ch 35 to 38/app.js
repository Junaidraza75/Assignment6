//Task 1

// var now = new Date(); 
// var theHr = now.getHours();    
// var theMin = now.getMinutes(); 
// document.write("Current Date: "+ now + "<br> " +" Current Time"+ theHr + ":" + theMin);  


//Task 1
// var date = new Date();
// function functiondate() {
//     document.write(date);

// } 
// functiondate(date);

//Task2
// function fullname(fname,lname) {
//     document.write("FULLNAME :"+fname,lname)
// }

// fullname("JUNAID"," RAZA")
//Task3
// var a=prompt("ENTER 1st Value")
// var b=prompt("ENTER 2nd Value")

// function add(a,b) {
// document.write((+a)+(+b))        
// }

// add(a,b)

//Task4
// var num1 = prompt("ENTER 1st Value");
// var opt = prompt("ENTER Operator");
// var num2 = prompt("ENTER 2nd Value");

// function calc(num1, opt, num2)
// {
//     if (opt === "+") {
//         return (+num1) + (+num2);
//     } else if (opt === "-") {
//         return num1 - num2;
//     } else if (opt === "*") {
//         return num1 * num2;
//     } else if (opt === "/") {
//         return num1 / num2;
//     } else{
//         return "INCORRECT OPERATOR"
//     }

// }
// var result= calc(num1,opt,num2)

// document.write(result)


//Task 5
// var number1 = prompt("PLEASE ENTER A NUMBER TO SUM THE SQUARE")
// const square= function (x) {
//     return x*x;
// }
// document.write(square(number1));



//Task 6
// var num=prompt("ENTER NUMBER")
// function factorialize(num) {
//     // If the number is less than 0, reject it.
//     if (num < 0)
//         return -1;
//     else if (num == 0)
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
// }
// var result = factorialize(num);
// document.write(num+ " Factorial Is "+" "+result)


//Task 7


var num=Number(prompt("Enter a number"));
var sum=0;
for(var i=num;i!=0;i--){
      sum+=i;
      }
      console.log(sum)