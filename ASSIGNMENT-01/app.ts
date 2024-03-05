                            // 45 Questions

// Question 01

// console.log("Node.js, TypeScript, VS Code -- have been installed");

// Question 02

var personName = "Hello Fahad";
console.log(personName, "would you like to learn some python today")

// Question 03

var againName = "Hello Hassan";
console.log(againName.toLowerCase());
console.log(againName.toUpperCase());

// Question 04

var author = "Albert Einstein";
var authorQuote = `${author} once said, "A person who never made a mistake never tried anything new" </br>`;
console.log(authorQuote);

// Question 05

var famous_person = "Ghous Ahmed";
var message = `${famous_person} once said, "A person who never made a mistake never tried anything new" </br>`;
console.log(famous_person);

// Question 06

var whiteSpaceBwName = "\t Fahad Hassan \n";
console.log("Name with white space");
console.log("'" + whiteSpaceBwName + "'");
var nameStripped = whiteSpaceBwName.trim();
console.log("Name after Stripping White Space");
console.log(nameStripped);

// Question 07 & 08

console.log('Subtraction 16 - 8 = 8')

var sub = 16 - 8;
console.log(sub);

console.log('Addition 4 + 4 = 8')

var add = 4 + 4;
console.log(console.log(add));

console.log('Multiplication 4 x 2 = 8')

var mul = 4 * 2;
console.log(console.log(mul));

console.log('Division 16 / 2 = 8')

var div = 16 / 2;
console.log(console.log(div));

// Question 09

var favNum = 8;
console.log(`My Favourite Number is ${favNum}`);

// Question 10

var program = 'calculator';
var date = new Date()
var description = ("you can calculate");
console.log(`${program}
${date}
${description}`);

// Question 11

var nameArr = ["Adeel","Uzair","Imad","Adnan","Ahmed"];
console.log(nameArr);
console.log(`${nameArr[0]}
${nameArr[1]}
${nameArr[2]}
${nameArr[3]}
${nameArr[4]}`);


// Question 12

var nameArr = ["Adeel","Uzair","Imad","Adnan","Ahmed"];
console.log(nameArr);
console.log(`Welcome ${nameArr[0]}
Welcome ${nameArr[1]}
Welcome ${nameArr[2]}
Welcome ${nameArr[3]}
Welcome ${nameArr[4]}`);

// Question 13

var myOwnArr = ["Bullet Heavy Bike","BRV","Helicopter","Aeroplane","Horse"];
console.log(myOwnArr);
console.log(`I want to buy ${myOwnArr[0]} my all time favourite.
I want to buy and drive ${myOwnArr[1]}.
I want to buy ${myOwnArr[2]} and want to see world from top.
I also want to buy${myOwnArr[3]}.
I want to buy a ${myOwnArr[4]}.`);

// Question 14

var guestList = ["Sir Ghous","Uzair","Adnan"];
console.log(guestList)
console.log(`Dear ${guestList[0]} Please for dinner at my home by 9pm
${guestList[1]} come to my home at night we will discuss on it also will have dinner
${guestList[2]} why not sure come for dinner tonight at my place`);

// Question 15

var guestList = ["Sir Ghous","Uzair","Adnan","Imad"];
console.log(guestList)
console.log(`Dear ${guestList[0]} Please for dinner at my home by 9pm.
${guestList[1]} come to my home at night we will discuss on it also will have dinner.
${guestList[2]} why not sure come for dinner tonight at my place.
${guestList[1]} said i won't come because i have a plan for somewhere else.
So i should invite Imad for dinner.
Dear ${guestList[3]} could you please come tonight because we have u reunite plan also having dinner`);

// Question 16

var guestList = ["Sir Ghous","Uzair","Adnan","Imad"];
console.log(guestList)
var addGuest1 = guestList.unshift("Ehtisham");
console.log(guestList);
var guestAddInMid = guestList.splice(2,0,"owais");
console.log(guestList);
console.log(`Dear ${guestList[0]} Please for dinner at my home by 9pm.
${guestList[1]} come to my home at night we will discuss on it also will have dinner.
${guestList[2]} why not sure come for dinner tonight at my place.
${guestList[1]} said i won't come because i have a plan for somewhere else.
So i should invite Uzair for dinner.
Dear ${guestList[3]} could you please come tonight because we have u reunite plan also having dinner
${guestList[4]} come to my home at night we will discuss on it also will have dinner.
Dear ${guestList[5]} Please for dinner at my home by 9pm.
`);

// Question 17

var guestList = ["Sir Ghous","Uzair","Adnan","Imad"];
console.log(guestList)
var addGuest1 = guestList.unshift("Ehtisham");
console.log(guestList);
var guestAddInMid = guestList.splice(2,0,"owais");
console.log(guestList);
console.log(`${guestList} Dinner program cancel for all of you instead of Sir Ghous and Ehtisham`);
var removeLast = guestList.splice(2,5);
console.log(`Dear ${guestList[0]} Please for dinner at my home by 9pm you are still invited.
${guestList[1]} come to my home at night we will discuss on it also will have dinner you are still invited.
`);

// Question 18

var placeToVisit = ["Saudia Arabia","United Kingdom","Spain","Turkey","America"];

console.log("\tOriginal Order");
console.log(placeToVisit);

console.log("\tAlphabetical Order");
console.log([...placeToVisit].sort());

console.log("\t Original Order (unchanged)");
console.log(placeToVisit);

console.log('\t Reverse Order');
console.log([...placeToVisit].reverse());

console.log("\tOriginal Order");
console.log(placeToVisit);

console.log("\tAlphabetical Order");
console.log([...placeToVisit].sort());
console.log([...placeToVisit].reverse());

// Question 19

var guestList = ["Sir Ghous","Uzair","Adnan","Imad"];
console.log(guestList)
var addGuest1 = guestList.unshift("Ehtisham");
console.log(guestList);
var guestAddInMid = guestList.splice(2,0,"owais");
console.log(guestList);
console.log(`${guestList} Dinner program cancel for all of you instead of Sir Ghous and Ehtisham`);
var removeLast = guestList.splice(2,5);
console.log(`Dear ${guestList[0]} Please for dinner at my home by 9pm you are still invited.
${guestList[1]} come to my home at night we will discuss on it also will have dinner you are still invited.
Invited just two guests`);

// Question 20
// A
let animals = [
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
console.log("\tList of Animals")
for(let i = 0; i < animals.length; i++){
    console.log(`${i + 1}. ${animals[i]}`);
}
//B
console.log("\tList of Countries");
let countries = [
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
for(let i = 0; i < countries.length; i++){
    console.log(`${i + 1}. ${countries[i]}`);
};
// C
console.log("\tList of Mountains")
let mountains = [
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
for(let i = 0; i < mountains.length; i++){
    console.log(`${i + 1}. ${mountains[i]}`);
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
    name10:"Annapurna"
}
console.log( //object print
    ` Contries Name:
        Country: ${country.name1}
        Country: ${country.name2}
        Country: ${country.name3}
        Country: ${country.name4}
        Country: ${country.name5}
        Country: ${country.name6}
        Country: ${country.name7}
        Country: ${country.name8}
        Country: ${country.name9}
        Country: ${country.name10}}
`)
// Question 22

var arrList =[1,2,3,4,5,6,7,8,9,10]
console.log(arrList[12]) //# IndexError: list index out of range

var arrList =[1,2,3,4,5,6,7,8,9,10]
console.log(arrList[4]) //# it will not show undefined

// Question 23
