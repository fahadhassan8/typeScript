// 45 Questions
// Question 01
// console.log("Node.js, TypeScript, VS Code -- have been installed");
// Question 02
var personName = "Hello Fahad";
console.log(personName, "would you like to learn some python today");
// Question 03
var againName = "Hello Hassan";
console.log(againName.toLowerCase());
console.log(againName.toUpperCase());
// Question 04
var author = "Albert Einstein";
var authorQuote = "".concat(author, " once said, \"A person who never made a mistake never tried anything new\" </br>");
console.log(authorQuote);
// Question 05
var famous_person = "Ghous Ahmed";
var message = "".concat(famous_person, " once said, \"A person who never made a mistake never tried anything new\" </br>");
console.log(famous_person);
// Question 06
var whiteSpaceBwName = "\t Fahad Hassan \n";
console.log("Name with white space");
console.log("'" + whiteSpaceBwName + "'");
var nameStripped = whiteSpaceBwName.trim();
console.log("Name after Stripping White Space");
console.log(nameStripped);
// Question 07 & 08
console.log('Subtraction 16 - 8 = 8');
var sub = 16 - 8;
console.log(sub);
console.log('Addition 4 + 4 = 8');
var add = 4 + 4;
console.log(console.log(add));
console.log('Multiplication 4 x 2 = 8');
var mul = 4 * 2;
console.log(console.log(mul));
console.log('Division 16 / 2 = 8');
var div = 16 / 2;
console.log(console.log(div));
// Question 09
var favNum = 8;
console.log("My Favourite Number is ".concat(favNum));
// Question 10
var program = 'calculator';
var date = new Date();
var description = ("you can calculate");
console.log("".concat(program, "\n").concat(date, "\n").concat(description));
// Question 11
var nameArr = ["Adeel", "Uzair", "Imad", "Adnan", "Ahmed"];
console.log(nameArr);
console.log("".concat(nameArr[0], "\n").concat(nameArr[1], "\n").concat(nameArr[2], "\n").concat(nameArr[3], "\n").concat(nameArr[4]));
// Question 12
var nameArr = ["Adeel", "Uzair", "Imad", "Adnan", "Ahmed"];
console.log(nameArr);
console.log("Welcome ".concat(nameArr[0], "\nWelcome ").concat(nameArr[1], "\nWelcome ").concat(nameArr[2], "\nWelcome ").concat(nameArr[3], "\nWelcome ").concat(nameArr[4]));
// Question 13
var myOwnArr = ["Bullet Heavy Bike", "BRV", "Helicopter", "Aeroplane", "Horse"];
console.log(myOwnArr);
console.log("I want to buy ".concat(myOwnArr[0], " my all time favourite.\nI want to buy and drive ").concat(myOwnArr[1], ".\nI want to buy ").concat(myOwnArr[2], " and want to see world from top.\nI also want to buy").concat(myOwnArr[3], ".\nI want to buy a ").concat(myOwnArr[4], "."));
// Question 14
var guestList = ["Sir Ghous", "Uzair", "Adnan"];
console.log(guestList);
console.log("Dear ".concat(guestList[0], " Please for dinner at my home by 9pm\n").concat(guestList[1], " come to my home at night we will discuss on it also will have dinner\n").concat(guestList[2], " why not sure come for dinner tonight at my place"));
// Question 15
var guestList = ["Sir Ghous", "Uzair", "Adnan", "Imad"];
console.log(guestList);
console.log("Dear ".concat(guestList[0], " Please for dinner at my home by 9pm.\n").concat(guestList[1], " come to my home at night we will discuss on it also will have dinner.\n").concat(guestList[2], " why not sure come for dinner tonight at my place.\n").concat(guestList[1], " said i won't come because i have a plan for somewhere else.\nSo i should invite Imad for dinner.\nDear ").concat(guestList[3], " could you please come tonight because we have u reunite plan also having dinner"));
// Question 16
var guestList = ["Sir Ghous", "Uzair", "Adnan", "Imad"];
console.log(guestList);
var addGuest1 = guestList.unshift("Ehtisham");
console.log(guestList);
var guestAddInMid = guestList.splice(2, 0, "owais");
console.log(guestList);
console.log("Dear ".concat(guestList[0], " Please for dinner at my home by 9pm.\n").concat(guestList[1], " come to my home at night we will discuss on it also will have dinner.\n").concat(guestList[2], " why not sure come for dinner tonight at my place.\n").concat(guestList[1], " said i won't come because i have a plan for somewhere else.\nSo i should invite Uzair for dinner.\nDear ").concat(guestList[3], " could you please come tonight because we have u reunite plan also having dinner\n").concat(guestList[4], " come to my home at night we will discuss on it also will have dinner.\nDear ").concat(guestList[5], " Please for dinner at my home by 9pm.\n"));
// Question 17
var guestList = ["Sir Ghous", "Uzair", "Adnan", "Imad"];
console.log(guestList);
var addGuest1 = guestList.unshift("Ehtisham");
console.log(guestList);
var guestAddInMid = guestList.splice(2, 0, "owais");
console.log(guestList);
console.log("".concat(guestList, " Dinner program cancel for all of you instead of Sir Ghous and Ehtisham"));
var removeLast = guestList.splice(2, 5);
console.log("Dear ".concat(guestList[0], " Please for dinner at my home by 9pm you are still invited.\n").concat(guestList[1], " come to my home at night we will discuss on it also will have dinner you are still invited.\n"));


