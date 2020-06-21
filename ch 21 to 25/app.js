// Task 1

// var fname=prompt("EMTER YOUR FIRSTNAME")
// var lname=prompt("EMTER YOUR LASTNAME")
// var fulname=(fname + " " +lname)
// alert(fulname);

// TASK 2

// var fmobile="MY Favorite Phone is: "
// document.write(fmobile);

// var fm=prompt("EMTER YOUR MOBILE NAME", "");
// document.write(fm);

// var lengthOfString= ("<br>"+" Length Of String:");
// document.write(lengthOfString);

// var lengthOfInput=fm.length;
// document.write(lengthOfInput)


//TASK 3

// var string = ("String: ");
// document.write(string);
// var letter = "Pakistani";
// document.write(letter);

// var index = ("<br>" + "Index of 'n': ");
// document.write(index);
// document.write(letter.indexOf("n"));
// document.write("<br>")

// var str="String: ";
// document.write(str);
// var letter="Pakistani";
// document.write(letter);
// var ind=("<br>"+ " Index od 'k': ");
// document.write(ind)

// document.write(letter.indexOf("k"));


//TASK 4

// var string = ("String: ");
// document.write(string);
// var letter = "Hello World";
// document.write(letter);

// var index = ("<br>" + "Last index of 'l': ");
// document.write(index);
// document.write(letter.lastIndexOf("l"));

//TASK 5

// var string = ("String: ");
// document.write(string);
// var letter = "Pakistani";
// document.write(letter);

// var index = ("<br>" + "Character at index 3: ");
// document.write(index);
// document.write(letter.charAt(3));



//TASK 6

// var firstName = prompt("Enter your first name", "");
// var lastName = prompt("Enter youe last name", "");
// var fullName = (firstName + " " + lastName);
//      alert("Hello" + " " + fullName);



//TASK 7

// var nam = ("City: ");
// var city = ("Hyderabad");
// document.write(nam+" "+city);
// var afterReplacing = ("<br>" + "After replacing: ");
// document.write(afterReplacing);
// var replaceCity = city.replace("Hyder", "Islam");
// document.write(replaceCity);


//TASK 8



// var message = ("Ali and Sami are best friends. They play cricket and football together.");
// document.write(message+"<br><br>")
// var replaceMessage = message.replace(/and/g, "&");
// document.write(replaceMessage);

//TASK 9

// var value = ("Value: ");
// var number = 472;
// var string = number.toString();
// document.write(value+" "+ string);
// var type = ("<br>" + "Type: string");
// document.write(type);

// var value = ("<br>" + "Value: ");

// var string = "472";
// var number = Number(string);
// document.write( value+ " " +number);
// var type = ("<br>" + "Type: number");
// document.write(type);


//TASK 10

// var userInput = ("User input: ");
// var inputType = prompt("Write SomeThing");
// document.write(userInput+ " " +inputType);
// var upperCase = ("<br>" + "Upper case: ");
// document.write(upperCase);
// change = inputType.toUpperCase();
// document.write(change);



//TASK 11

// var userInput = ("User input: ");
// var inputType = prompt("Write SomeThing");
// document.write(userInput+ " " +inputType);

// var title=("<br> "+ "Title case: ");
// document.write(title +" "+ inputType)

//TASK 12

// var value=("Number: ");
// var number=35.36;
// document.write(value+ number+"<br>")
// document.write("Result: ")
// var string= number.toString().replace(".","");
// document.write(string)


//TASK 13


//TASK 14

// var bakery = prompt("Welcome to Javascript practice bakery. What do you want to order sir/ma'am?", "");
// convert = bakery.toLowerCase();
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (var i = 0; i <= 4; i++){
//     if(convert === "cake"){
//         document.write("Cake is available at index " + items.indexOf("cake")+ " in our bakery");
//         break;
//     }
//     else if(convert === "apple pie"){
//         document.write("apple pie is available at index " + items.indexOf("apple pie")+ " in our bakery");
//         break;
//     }
//     else if(convert === "cookie"){
//         document.write("cookie is available at index " + items.indexOf("cookie")+ " in our bakery");
//         break;
//     }    
//     else if(convert === "chips"){
//         document.write("chips is available at index " + items.indexOf("chips")+ " in our bakery");
//         break;
//     }
//     else if(convert === "patties"){
//         document.write("patties is available at index " + items.indexOf("patties")+ " in our bakery");
//         break;
//     }
//     else{
//         document.write("we are sorry. " + bakery + " is not available our bakery");
//         break;
//     }
// }


//TASK 15

// var inputPassword = prompt("Enter password \n It contains alphabets,numbers and should at least 6 character long and should not start with a number \n For character codes of a-z, A-Z & 0-9", "");
// document.write("Entered password: " + inputPassword);

//TASK 16

// var nam1 = "HAMDARD UNIVERSITY";
// var spt = nam1.split("");
// for (i=nam1.length-1; i >-1  ;i--){
//     document.write(nam1[i]+"<br>")
// }

// TASK 17


// var str = "Pakistan";
// document.write("User Input: "+ str+ "<br>"+"Last Character of input: ")
// var lastChar=str.slice(-1);

// document.write(lastChar)


// TASK 18

// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }

//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     } 
// document.write("There are occurrences of word, 'the' is : ")
// document.write(count("The quick brown fox jumps over the lazy dog", 'the'));
