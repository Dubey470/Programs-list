/* Program 5:- Write a JavaScript code block using array and generate the current
DATE in words, this should include the day,month and year. */

var days=[
    "First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Nineth","Tenth",
    "Eleventh","Twelveth","Thirtheenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth","Twentyth",
    "TwentyFirst","TwentySecond","TwentyThird","TwentyFourth","TwentyFifth","TwentySixth","TwentySeventh","TwentyEighth","TwentyNineth","Thirty",
    "ThirtyFirst"
];

var months=["January","February","March","April","May","June","July","August","September","October","November","December"];

var yr="Two Thousand Twenty Two";

var dt=new Date();
var date=days[dt.getDate()-1];
var month=months[dt.getMonth()];
var year=dt.getFullYear();

if(year==2022)
    alert("Today's Date is:- "+date+" - "+month+" - "+yr);
else
    alert("Today's Date is:- "+date+" - "+month+" - "+year);