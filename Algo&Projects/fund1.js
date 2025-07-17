//Setting and Swapping

let myNumber = 42;
let myName = "Naika"; 
let temp = myNumber;
myNumber = myName;
myName = temp;
console.log(myNumber, myName);
 

//Print -52 to 1066
for (let i = -52; i <= 1066; i++) {
    console.log(i);
}
 

//Don’t Worry, Be Happy 
function beCheerful() {
    for (let i = 0; i < 98; i++) {
        console.log("good morning!");
    }
}
beCheerful();

//Multiples of Three – but Not All 

for (let i = -300; i <= 0; i++) {
    if (i % 3 === 0 && i !== -3 && i !== -6) {
        console.log(i);
    }
}


//Printing Integers with While
let num = 2000;
while (num <= 5280) {
    console.log(num);
    num++;
}

//You Say It’s Your Birthday 

function isBirthday(num1, num2) {
    const birthMonth = 2;
    const birthDay = 8;
    if ((num1 === birthMonth && num2 === birthDay) || (num1 === birthDay && num2 === birthMonth)) {
        console.log("How did you know?");
    } else {
        console.log("Just another day.");
    }
}
isBirthday(2, 8); 


//Leap Year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Leap year!");
        return true;
    } else {
        console.log("Not a leap year.");
        return false;
    }
}
isLeapYear(2024);


//Print and Count
let count = 0;
for (let i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
        console.log(i);
        count++;
    }
}
console.log("Total multiples of 5:", count);


//Multiples of Six 
let i = 0;
while (i <= 60000) {
    if (i % 6 === 0) {
        console.log(i);
    }
    i++;
}


//Counting, the Dojo Way
for (let i = 1; i <= 100; i++) {
    if (i % 10 === 0) {
        console.log("Coding Dojo");
    } else if (i % 5 === 0) {
        console.log("Coding");
    } else {
        console.log(i);
    }
}
 

//What Do You Know?

function whatDoYouKnow(incoming) {
    console.log(incoming);
}
whatDoYouKnow("This is awesome!");

//Whoa, That Sucker’s Huge… 

let sum = 0;
for (let i = -300000; i <= 300000; i += 2) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log("Final sum:", sum); 

//Countdown by Fours

let numFour = 2016;
while (numFour > 0) {
    console.log(numFour);
    numFour -= 4;
} 


//Flexible Countdown 
function flexibleCountdown(lowNum, highNum, mult) {
    for (let i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}
flexibleCountdown(2, 9, 3); 


//The Final Countdown 

function finalCountdown(param1, param2, param3, param4) {
    let i = param2;
    while (i <= param3) {
        if (i % param1 === 0 && i !== param4) {
            console.log(i);
        }
        i++;
    }
}
finalCountdown(3, 5, 17, 9); // Output: 6, 12, 15
