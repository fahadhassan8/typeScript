// 45 Questions
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// Question 18
var placeToVisit = ["Saudia Arabia", "United Kingdom", "Spain", "Turkey", "America"];
console.log("\tOriginal Order");
console.log(placeToVisit);
console.log("\tAlphabetical Order");
console.log(__spreadArray([], placeToVisit, true).sort());
console.log("\t Original Order (unchanged)");
console.log(placeToVisit);
console.log('\t Reverse Order');
console.log(__spreadArray([], placeToVisit, true).reverse());
console.log("\tOriginal Order");
console.log(placeToVisit);
console.log("\tAlphabetical Order");
console.log(__spreadArray([], placeToVisit, true).sort());
console.log(__spreadArray([], placeToVisit, true).reverse());
// Question 19
var guestList = ["Sir Ghous", "Uzair", "Adnan", "Imad"];
console.log(guestList);
var addGuest1 = guestList.unshift("Ehtisham");
console.log(guestList);
var guestAddInMid = guestList.splice(2, 0, "owais");
console.log(guestList);
console.log("".concat(guestList, " Dinner program cancel for all of you instead of Sir Ghous and Ehtisham"));
var removeLast = guestList.splice(2, 5);
console.log("Dear ".concat(guestList[0], " Please for dinner at my home by 9pm you are still invited.\n").concat(guestList[1], " come to my home at night we will discuss on it also will have dinner you are still invited.\nInvited just two guests"));
// Question 20
// A
var animals = [
    "Lion",
    "Elephant",
    "Tiger",
    "Giraffe",
    "Panda",
    "Kangaroo",
    "Zebra",
    "Dolphin",
    "Wolf",
    "Bear"
];
console.log("\tList of Animals");
for (var i_1 = 0; i_1 < animals.length; i_1++) {
    console.log("".concat(i_1 + 1, ". ").concat(animals[i_1]));
}
//B
console.log("\tList of Countries");
var countries = [
    "Pakistan",
    "United States",
    "China",
    "Brazil",
    "Russia",
    "Indonesia",
    "India",
    "Nigeria",
    "Bangladesh",
    "Mexico"
];
for (var i_2 = 0; i_2 < countries.length; i_2++) {
    console.log("".concat(i_2 + 1, ". ").concat(countries[i_2]));
}
;
// C
console.log("\tList of Mountains");
var mountains = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Lhotse",
    "Makalu",
    "Cho Oyu",
    "Dhaulagiri",
    "Manaslu",
    "Nanga Parbat",
    "Annapurna"
];
for (var i_3 = 0; i_3 < mountains.length; i_3++) {
    console.log("".concat(i_3 + 1, ". ").concat(mountains[i_3]));
}
// Question 21
var country = {
    name1: "Mount Everest",
    name2: "K2",
    name3: "Kangchenjunga",
    name4: "Lhotse",
    name5: "Makalu",
    name6: "Cho Oyu",
    name7: "Dhaulagiri",
    name8: "Manaslu",
    name9: "Nanga Parbat",
    name10: "Annapurna"
};
console.log(//object print
" Contries Name:\n        Country: ".concat(country.name1, "\n        Country: ").concat(country.name2, "\n        Country: ").concat(country.name3, "\n        Country: ").concat(country.name4, "\n        Country: ").concat(country.name5, "\n        Country: ").concat(country.name6, "\n        Country: ").concat(country.name7, "\n        Country: ").concat(country.name8, "\n        Country: ").concat(country.name9, "\n        Country: ").concat(country.name10, "}\n"));
// Question 22
var arrList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrList[12]); //# IndexError: list index out of range
var arrList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrList[4]); //# it will not show undefined
// Question 23
console.log('\t Seven Statements');
// Test 1
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2
console.log("Is car != 'subaru'? I predict False");
console.log(car != 'subaru');
// Test 3
console.log("Is car !== 'Honda'? I predict Ture");
console.log(car !== 'Honda');
// Test 4
console.log("Is car.length < 'subaru'? I predict False");
console.log(car.length < 6);
// Test 5
console.log("Is car.length >= '6'? I predict True");
console.log(car.length >= 6);
// Test 5
console.log("Is car.startsWith('su')? I predict True");
console.log(car.startsWith('su'));
// Test 06
console.log("Is car.endWith('ru')? I predict True");
console.log(car.endsWith('ru'));
// Test 07
console.log("Is car.includes('ba')? I predict True");
console.log(car.includes('ba'));
// Question 25
var alien_color = ["yellow", "green", "red"];
if (alien_color[1] === "green") {
    console.log("The player just earned 5 points.");
}
if (alien_color[1] === "red") { // no output
    console.log("The player just earned 5 points.");
}
// Question 26
var alienColor = "green";
if (alienColor = "green") {
    console.log("Congratulations! The player just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! The player just earned 10 points.");
}
// Question 27
var alien_color = ["yellow", "green", "red"];
if (alien_color[1] === "green") {
    console.log("The player just earned 5 points.");
}
if (alien_color[0] === "yellow") {
    console.log("The player just earned 10 points.");
}
if (alien_color[2] === "red") {
    console.log("The player just earned 15 points.");
}
// Question 28
var age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Question 29
var favourite_fruits = ["Banana", "Mango", "apple", "Orange", "Strawberry"];
for (var i = 0; i < favourite_fruits.length; i++) {
    if (favourite_fruits[i] === "Banana") {
        console.log("Banana Is My favourite fruit");
    }
    else {
        console.log("I just love to eat ".concat(favourite_fruits[i], "."));
    }
}
// Question 30
var userName = ["admin", "fahad", "zohaib", "adeel", "owais"];
for (var i = 0; i < userName.length; i++) {
    if (userName[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userName[i], ", thank you for logging in again."));
    }
}
