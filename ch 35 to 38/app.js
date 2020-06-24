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


// var num=Number(prompt("Enter a number"));
// var sum=0;
// for(var i=num;i!=0;i--){
//       sum+=i;
//       }
//       console.log(sum)


//Task 8

// var base=prompt("Enter Base Value")
// var pre=prompt("Enter Perpendicular Value")
// function hypotenuse(base,pre){
//       return Math.sqrt((base*base) + (pre*pre));
// }

// a=hypotenuse(base, pre)
// document.write("THE HYPOTENUSE VALUE IS: "+a)


//Task 9
// var width=prompt("Enter Width Value: ")
// var height=prompt("Enter Height Value: ")

// function area(width, height){
//       return Math.sqrt(width*height)
// }
// b=area(width,height)
// document.write("AREA OF RECTANGLE: "+b)



//Task 10

// function check_palindrome(str){
//       var cstr= str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//       var count=0;

//       if(cstr===""){
//             console.log("Nothing found!");
// 		return false;
//       }
//       if((cstr.length)%2===0){
//             ccount=(cstr.length)/2;
//       }else{
//             if (cstr.length === 1) {
// 			console.log("Entry is a palindrome.");
// 			return true;
// 		} else {
// 			ccount = (cstr.length - 1) / 2;
// 		}
// 	}
      
//       for (var x = 0; x < ccount; x++) {
//                         if (cstr[x] != cstr.slice(-1-x)[0]) {
//                               console.log("Entry is not a palindrome.");
//                               return false;
//                         }
//                   }
//                   console.log("The entry is a palindrome.");
// 	return true;
// }

// check_palindrome('madam');
// check_palindrome('nurses run');
// check_palindrome('');


//Task 11

// document.write("EXAMPLE STRING: the quick brown box <br>")
// function upercase(str){
//       var arr=str.split(' ');
//       var newarr=[];

//       for (var i=0; i<arr.length;i++){
//             newarr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
//       }
//       return newarr.join(' ');
// }
// var a=upercase("the quick brown box");
// document.write("EXPECTED OUTPUT: "+a)


// Task 12

// document.write("EXAMPLE STRING: Web Development Tutorial SAYLANI MASS IT TRANNING <br><br>")
// document.write("THE LONGEST WORD IN THIS IS IS<br><br>")
// function find_long_word(str)
// {
//   var arr1 = str.match(/\w[a-z]{0,}/gi);
//   var result = arr1[0];

//   for(var i = 1 ; i < arr1.length ; i++)
//   {
//     if(result.length < arr1[i].length)
//     {
//     result = arr1[i];
//     } 
//   }
//   return result;
// }
// var a=find_long_word('Web Development Tutorial SAYLANI MASS IT TRANNING');
// document.write("EXPECTED OUTPUT: "+a)


// Task 13

// document.write('w3resource.com ',  ' O : In This Word O is: <br>');
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// var a=char_count('w3resource.com', 'o');
// document.write("EXPECTED OUTPUT: "+a)



// Task 14
// function circumferenceofcircle(){
//       var  rad=prompt('First Find Circumference of Circle  Pleae Enter The Radius: ');
//       var circumference= 2*Math.PI*rad;
//       return circumference;
// }
// var a=circumferenceofcircle()
// document.write("The Circumference of Circle: "+a+"<br>")


// function circleArea(){
//       var radius = prompt('Find Area Of Circle Please Enter The Radius:');
//       var areaCircle = Math.PI*radius*radius;
//       return areaCircle;
      
//       }
// var b=circleArea()
// document.write("The Area of Circle: "+b)