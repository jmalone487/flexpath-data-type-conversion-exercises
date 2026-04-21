import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` code below to match the EXACT name
     of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  exercise_19();
  // Modify the line of code ABOVE to run a different exercise
}

function exercise_01() {
  /* 
   
    Exercise 1
    
    Data Types: 
		
		1. Create 4 variables to hold a value for each of these four data types:
				- String
				- Number
				- Boolean
				- Object
		2. Then, create a variable and DON'T assign it any value, just declare it. 
		3. Then, using the `typeof` keyword, log the type of each variable (including the unassigned one) to the console
  
  */

  // CODE IN THE OPEN LINES BELOW

 let myString = "Hello, Flexpath!";
 let myNumber = 42;
 let myBoolean = true;
 let myObject = { class: "Javascript" };

 let myUndefined;

 console.log(typeof myString);
 console.log(typeof myNumber);
 console.log(typeof myBoolean);
 console.log(typeof myObject);
 console.log(myUndefined);


  // CODE IN THE OPEN LINES ABOVE
}

function exercise_02() {
  /* 
   
    Exercise 2
    
    Type Conversion: 
		
		1. Create a variable and assign it a Number value
    2. Using the previous variable, convert it to a String and assign it to a new variable
		3. Then, log this new variable to the console along with its type, using typeof

  */

  // CODE IN THE OPEN LINES BELOW

let myNumber = 80;;

let myStringNumber = String(myNumber);

console.log(myStringNumber);
console.log(typeof myStringNumber);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_03() {
  /* 
   
    Exercise 3
    
    Boolean Conversion: 
		
		1. Create 2 variables: 
      * one that stores a Boolean conversion of the number 0 
      * one that stores a Boolean conversion of the number 1
    2. Then, log both of these variables to the console to see what 
        Booleans these numbers are converted to

  */

  // CODE IN THE OPEN LINES BELOW

let boolZero = Boolean(0);
let boolOne = Boolean(1);

console.log(boolZero);
console.log(boolOne);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_04() {
  /* 
   
    Exercise 4
    
    Handling NaN: 
		
		1. Create a variable that attempts to convert a non-numeric string to a number
    2. Then, using the method isNan(), check if this variable is Not a Number (NaN)

  */

  // CODE IN THE OPEN LINES BELOW

 let badNumber = Number("hello");

 console.log(isNaN(badNumber));

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_05() {
  /* 
   
    Exercise 5
    
    Template Literals: 
		
		1. Create a variable that stores your age as a Number.
    2. Create a template literal string that embeds this variable in the message:
        "I am [age] years old."
		2. Then, log this string to the console

  */

  // CODE IN THE OPEN LINES BELOW

 let myAge = 38;
 let message = 'I am 38 years old.'
 console.log(message);


  // CODE IN THE OPEN LINES ABOVE
}
  /* 
   
    Exercise 6
    
    Concatenate Strings: 
		
		1. Using the `name` and `number` variables above and the `+` operator, 
       create a new string that says "Alice has 5 apples". Then log this string to the console.
       
    2. Then, using the `name` and `number` variables above and a template literal, create a new 
       string that says "Alice has 5 apples". Then log this string to the console.
  */

  // CODE IN THE OPEN LINES BELOW

function exercise_06() {
  // DONT edit the code below
  const name = "Alice";
  const number = 5;
  // DONT edit the code above

  // 1. Using + operator
  let messagePlus = name + " has " + number + " apples";
  console.log(messagePlus);

  // 2. Using template literal
  let messageTemplate = `${name} has ${number} apples`;
  console.log(messageTemplate);
}


  // CODE IN THE OPEN LINES ABOVE


function exercise_07() {
  /* 
   
    Exercise 7
    
    JSON Conversion: 
		
		1. Create a JavaScript object, convert it to a JSON string, and log the result to the console.

  */

  // CODE IN THE OPEN LINES BELOW

let person = {
  name: "James",
  age: 38,
  city: "St. Louis"
};

let jsonString = JSON.stringify(person, null, 2);

console.log(jsonString);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_08() {
  // DONT edit the code below
  const jsonStringToParse = '{"name": "Charlie", "age": 35}';
  // DONT edit the code above

  /* 
   
    Exercise 8
    
    JSON Parsing: 
		


		1. Using the JSON string stored in `jsonStringToParse`, parse this string into an object
       and then print one of its properties.

  */

  // CODE IN THE OPEN LINES BELOW

let parsedObject = JSON.parse(jsonStringToParse);


console.log(parsedObject.name);   


  // CODE IN THE OPEN LINES ABOVE
}

function exercise_09() {
  /* 
    Exercise 9

    Math Object:
    1. Create a decimal number variable that has at least 5 numbers after the "."
    2. Then, use Math.round(), Math.ceil(), and Math.floor() on that number,
       logging the result to the console each time
  */

  // CODE IN THE OPEN LINES BELOW

  let decimalNumber = 12.34567;

  console.log(Math.round(decimalNumber));
  console.log(Math.ceil(decimalNumber));
  console.log(Math.floor(decimalNumber));

  // CODE IN THE OPEN LINES ABOVE
}


function exercise_10() {
  /* 
   
    Exercise 10
    
    Decimal Precision: 
		
		1. Create a decimal number variable that has at least 5 numbers after the "."
    2. Then, use toFixed() on the variable and round it to 2 decimal places.
       Log the result to the console.

  */

  // CODE IN THE OPEN LINES BELOW

function exercise_10() {

  let decimalNumber = 45.67891;

 
  let rounded = decimalNumber.toFixed(2);

 
  console.log(rounded);
}


  // CODE IN THE OPEN LINES ABOVE
}

function exercise_11() {
  /* 
   
    Exercise 11
    
    Locale Number Formatting: 
		
		1. Create a variable to hold a large number with 2 decimal points at the end of it
    2. Create a new Intl.NumberFormat object for the US locale
    3. Then, use this new objects `format` function to format the variable from step 1.
       Store the result in a new variable
    4. Log the new variable from step 3 to the console.

  */

  // CODE IN THE OPEN LINES BELOW

 function exercise_11() {
 
  let bigNumber = 1234567.89;

 
  let usFormatter = new Intl.NumberFormat("en-US");

 
  let formattedNumber = usFormatter.format(bigNumber);


  console.log(formattedNumber);
}


  // CODE IN THE OPEN LINES ABOVE
}

function exercise_12() {
  /* 
   
    Exercise 12
    
    Locale-Based Currency: 
		
		1. Create a variable named `salary` that holds a 5 digit integer
    2. Create a new Intl.NumberFormat object for the US locale, and provide
       an object as the second argument with these property/value pairs:

       {style: "currency", currency: "USD"}

    3. Use this formatter to format the variable from step 1.
       Then log the result to the console

  */

  // CODE IN THE OPEN LINES BELOW

function exercise_12() {
  // 1. 
  let salary = 89000;

 
  let usdFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  
  let formattedSalary = usdFormatter.format(salary);


  console.log(formattedSalary);
}


  // CODE IN THE OPEN LINES ABOVE
}

function exercise_13() {
  /* 
   
    Exercise 13
    
    Other Locale Currency: 
		
		1. Create a variable named `salary` that holds a 6 digit integer
    2. Create a new Intl.NumberFormat object using "ja-JP" for the first argument, 
       and provide an object as the second argument with these property/value pairs:

      {style: "currency", currency: "JPY"}

    3. Use this formatter to format the variable from step 1.
       Then log the result to the console

  */

  // CODE IN THE OPEN LINES BELOW

  const placeholder = "Delete this line and code in this space";

function exercise_13() {
 
  let salary = 250000;

  
  let yenFormatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY"
  });

 
  let formattedSalary = yenFormatter.format(salary);

  console.log(formattedSalary);
}

}

function exercise_14() {
  /* 
   
    Exercise 14
    
    Date String Conversion: 

    1. Create a new Date object and assign it to a variable
    2. Then, call toDateString on the variable and print the result to the console
    3. Then, call toTimeString on the variable and print the result to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

  const currentDate = new Date();

  console.log(currentDate.toDateString());
  console.log(currentDate.toTimeString());
}


  // CODE IN THE OPEN LINES ABOVE


function exercise_15() {
  /* 
   
    Exercise 15
    
    Locale Date Formatting

    1. Create a new Date object and assign it to a variable
    2. Call the toLocaleDateString method on it and convert it to an en-US format date.
       Log it to the console.
    3. Call the toLocaleDateString method on it again and convert it to an en-GB format date.
       Log it to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

  const currentDate = new Date();

  console.log(currentDate.toLocaleDateString("en-US"));
  console.log(currentDate.toLocaleDateString("en-GB"));
}


  // CODE IN THE OPEN LINES ABOVE


function exercise_16() {
  /* 
   
    Exercise 16
    
    Error Handling: 
		
		1. Write code that tries to parse invalid JSON and uses a try-catch block to handle the error.

  */

  // CODE IN THE OPEN LINES BELOW

  try {
    const badJson = "{ name: 'Charlie' }"; 
    const parsed = JSON.parse(badJson);
    console.log(parsed);
  } catch (error) {
    console.log("Error parsing JSON:", error.message);
  }
}

// CODE IN THE OPEN LINES ABOVE


function exercise_17() {
  /* 
   
    Exercise 17

    1. Convert the Boolean value 'true' to a string.
       Log it to he console
    
  */

  // CODE IN THE OPEN LINES BELOW

  const boolValue = true;
  const stringValue = String(boolValue);

  console.log(stringValue);
}


  // CODE IN THE OPEN LINES ABOVE


function exercise_18() {
  /* 
   
    Exercise 18

    1. Create a variable that holds a 9-digit number with 2 decimal places.
    2. Then, use Intl.NumberFormat to create a number formatter for the US, Russia, and Japan.
       For each formatter, provide an object as the second argument with these property/value pairs:

      {style: "currency", currency: "[proper currency string]"}

       Hint: You probably don't know the string arguments to use to do this for Russia.
             Go to Google.com and search "Intl.NumberFormat argument for Russian format"
             Then also look up "Intl.NumberFormat option for Russian currency"
             
             You will forget things all the time in this job, even as an expert.
             There's a lot of information to keep in your head. 

             That's why learning to put together good search prompts in Google and other
             search engines is CRUCIAL in this job.

             Don't worry, you'll get better at this over time as you pick up the terminology
             and understand how programs are written/executed.

    3. Then use each formatter to format the variable from step 1, and log it to the console
       each time.

  */

  // CODE IN THE OPEN LINES BELOW

  const number = 123456789.12;

  const usFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  const ruFormatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB"
  });

  const jpFormatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY"
  });

  console.log(usFormatter.format(number));
  console.log(ruFormatter.format(number));
  console.log(jpFormatter.format(number));
}


  // CODE IN THE OPEN LINES ABOVE


function exercise_19() {
  /* 
   
    Exercise 19
    
    Date Arithmetic: 

    1. Create a variable to hold a new Date object for today's date.
    2. Create a variable to hold a new Date object for a future date sometime next year
    3. Find the time difference between the future date and the current date
    4. Convert this time difference to days
    5. Log the day difference to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

  const today = new Date();
  const futureDate = new Date("2027-04-21"); // any date next year works

  const timeDifference = futureDate - today; // milliseconds
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  console.log(Math.floor(daysDifference));
}


  // CODE IN THE OPEN LINES ABOVE

