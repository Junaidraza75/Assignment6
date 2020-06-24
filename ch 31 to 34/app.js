//Task 1

// var date = new Date();
// document.write(date);

//Task 2

// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date();
// var month = date.getMonth();
// var currentMonth = monthNames[month];
// alert("Current month: " + currentMonth);

//Task 3

// var weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var day = date.getDay();
// var week = weekNames[day];
// alert(week);

//Task 4

// var weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var day = date.getDay();
// var week = weekNames[day];
// if (week === "Sat" || week === "Sun"){
//     alert("It's Fun day");
// }
// else {
//     alert(week);
// }

//Task 5

// var date = new Date();
// var date1 = date.getDate();
// if (date1 <= 15){
//     alert("First fifteen days of the month");
// }
// else {
//     alert("Last days of the month"); 
// }

//Task 6

// var date = new Date();
// document.write("Current Date: " + date);
// var milliseconds = date.getTime();
// document.write("<br>" + "Elapsed milliseconds since January" +  1 + ", " + 1970 + ": " + milliseconds);
// var minutes = milliseconds  / (1000 * 60 * 60 * 24);
// document.write("<br>" + "Elapsed minutes since January" +  1 + ", " + 1970 + ": " + minutes);

//Task 8

// var date = new Date();
// var getHours = date.getHours();
// if(getHours < 12 ){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

//Task 8

// var date = new Date("December 31, 2020 00:00:00");
// document.write(date);

//Task 9

var todaydate =new Date();
var getDay= todaydate.getDate();
var getMonth=todaydate.getMonth();
var getYear=todaydate.getFullYear();
var lastram=new Date("April 24,2020")
var getDay1= lastram.getDate();
var getMonth1=lastram.getMonth();
var getYear1=lastram.getFullYear();
// var firstramdan= new Date("April 24,2020");
var a=(getDay+" " +getMonth+" "+ getYear)
var b=(getDay1+" " +getMonth1+" "+ getYear1)
document.write("Current Date is: "+ a+"<br>")

document.write("1st Ramdan Date is: "+b+"<br> ")

document.write( c +"days have passed since 1st Ramzan, "+getYear)

 // document.write(firstramdan + "<br>")


//Task 10
//Task 11
//Task 12
//Task 13
//Task 14