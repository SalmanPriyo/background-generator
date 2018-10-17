<<<<<<< variabbles >>>>>>>>>>>

let name='Priyo,Toma,Bristy';
console.log(name);

let firstName ='Salman';
let lastName ='Priyo';
console.log(firstName,lastName);






<<<<<<<< Const >>>>>>>>>>

let interestRate= 0.6;
interestRate = 2;
console.log(interestRate);

but I can not do the same using const....

const interestRate= 0.6;
console.log(interestRate);







<<<<<<< primitives / value types >>>>>>>>

let name ='Priyo'  (string literal)
let age = 24 (number literal)
let isApproved = true/false (boolean literal)
let firstName = undefined; (undefined literal)
let selectedColor = null; (null literal)

<<<<<< reference types >>>>>>>>>

      Object 
      Array
      Function








<<<<<<<< Object >>>>>

let person={
    name: "Priyo",
    age: 23
};
console.log(person);

we can change any value of this object by dot notation method and bracket notation. They are given below

person.name= "Salman"
console.log(person.name);

Bracket notation

let selection = "name";
person[selection]= "Sarker"

console.log(person[selection]);








<<<<<<<< Array >>>>>>>

let selectedColor =['red','orange','blue','black'];
selectedColor[4]='yellow';
console.log(selectedColor);

console.log(selectedColor[0]);
console.log(selectedColor[1]);
console.log(selectedColor[2]);
console.log(selectedColor[3]);
console.log(selectedColor[4]);






<<<<<<<<< Function >>>>>>>>>


function greet(){
	console.log('Hellooo Devlopers');
}
greet();


function greet(name){
	console.log('Hellooo '+ name +'!'+ ' How are you ????');
}
greet('Priyo');
greet('Salman');
greet('Dear');


function greet(name, lastName){
	console.log('Hellooo '+ name + ' ' + lastName +'!'+ ' How are you ????');
}
greet('Salamn', 'Priyo');




<<<<<<< types of funtion >>>>>>>>


performing a task

function greet(name, lastName){
	console.log('Hellooo '+ name + ' ' + lastName +'!'+ ' How are you ????');
}
greet('Salamn', 'Priyo');


calculate a value


function square (number){
	return number*number
} 

let number = square(2);
console.log(number);

// or we can write this code in this cool way...


function square (number){
	return number*number
} 

console.log(square(5));





<<<<<<<<<<< Operators >>>>>>>>

arithmetic operator



let x=5;
let y=10;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);   (Modulus)
console.log(x**y);  (exponentiation)


//  increment(++)

console.log(x++);

or, 
console.log(++x);
console.log(x);

// decrement (--)

console.log(x--);

or,
console.log(--x);
console.log(x);





<<<<<<<<<<< Assignment Operator >>>>>>>>

let x = 15;

x++ => (x = x + 1)

x+=5 => (x = x + 5)

x*=5 => (x = x * 5)




<<<<<<<<< Comparison Operators >>>>>>>>>

let x = 1;

//  Relational

// console.log(x > 0);
// console.log(x >= 0);
// console.log(x < 0);
// console.log(x <= 0);

// Equiality

console.log(x === 0);
console.log(x !== 0);


strict equality [Both uprands should be always in (Same value + Same type)]

console.log(1 === 1);
console.log('1' === 1);

// lose equality (it says always true whatever thr operands type and values are)

console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);



<<<<<<<< Ternary Operators >>>>>>>>

if customer has more tham 100 points
they are Gold customer otherwise
they are Silver customer


let points = 99;
let type = points > 100 ? 'Gold' : 'Silver';
console.log(type);



<<<<<<<<<< Logical Operatos >>>>>>>>>>>>

 Logicat And(&&)

returns true if the both operands are true
console.log(true && true);


let highIncome = true;
let goodCredutScore = true;
let elligibleForLoan = highIncome && goodCredutScore;

console.log(elligibleForLoan);


 Logicat OR(||)

returns true if one of the operands is true
console.log(true || false);

let highIncome = true;
let goodCredutScore = true;
let elligibleForLoan = highIncome || goodCredutScore;

console.log(elligibleForLoan);

Or,

let highIncome = false;
let goodCredutScore = true;
let elligibleForLoan = highIncome || goodCredutScore;

console.log('Elligible',elligibleForLoan);


Logical NOT (!) (It is always opposit of it's previous result) 

let highIncome = false;
let goodCredutScore = true;
let elligibleForLoan = highIncome || goodCredutScore;

console.log('Elligible',elligibleForLoan);

let applicationRefused = !elligibleForLoan;
console.log('Refused',applicationRefused)

Or,

let highIncome = false;
let goodCredutScore = false;
let elligibleForLoan = highIncome || goodCredutScore;

console.log('Elligible',elligibleForLoan);

let applicationRefused = !elligibleForLoan;
console.log('Refused',applicationRefused)


<<<<<<<<< If......else Condition >>>>>>>>>>

hour 
if hour is in between 6a.m to 12 p.m then say Good morning!
if hour is in between 12p.m to 6 a.m then say Good afternoon
otherwise say Good evening

let hour = 3;
if (hour >=6 && hour<12 ){
   console.log('Good Morning!!!');
} else if (hour >=12 && hour < 18){
   console.log('Good Afternoon!!!');
} else 
   console.log('Good evening!!!!');


<<<<<<<<< switch......case >>>>>>>>>>>

let role = 'guest';

switch (role){
     case 'guest':
     console.log('Guest User');
     break;

     case 'moderator':
     console.log('Moderator User');
     break;

     default:
     console.log('Unknown User');
}

same program can be written using if...else condition like this and this looks really great

let role = 'moderator';

if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown User');


<<<<<<< For loops >>>>>>>

for (let i = 0; i<10; i++)
	console.log('Hey! how many times do I need to say that my name is Priyo..????', i);

<<<<<<< Odd number  >>>>>>>

for (let i=1; i<=100;i++)
	if (i%2 !== 0) console.log('Odd numbers',i);

<<<<<< even numbers >>>>>>

for (let i=1; i<=10;i++)
   if (i % 2===0) console.log('Even numbers',i);

<<<<<< Odd and Even in a same time >>>>>for (let i=1; i<=100;i++)

    for (let i=1; i<=50;i++)
	if (i%2 !== 0) console.log('Odd numbers',i);
    else console.log('Even numbers',i);


 <<<<< While loops >>>>>>

let i = 0;
while (i <=10){
  console.log('I hate you..!!!!',i);
  i++;
}

Or,

let i = 10;
while (i >=0){
	if (i%2===0) console.log('Even numbers',i);
	  else console.log('Odd numbers',i);
	  i--;
}


<<<<<< do-while loops >>>>>>


let i = 0;
do{
	if(i%2===0) console.log('Even',i);
	  else console.log('Odd',i);
	  i++;
} while (i<=12);


<<<<<<< for.....in loop (used in object) >>>>>>>

const person ={
	name : 'Priyo',
	age : 23
};

for (let key in person)
  console.log(key, person[key]);


// <<<<<<< for....of loops (used in array) >>>>>>>

const clothes=['shirt','pant','shoes','ties'];


for (let cloth of clothes)
	console.log(cloth);


<<<<<<<< Array >>>>>>>>

adding and removing elements 

(at the beginging)

let numbers = [3,4,5,6,7,8];

numbers.unshift(1,2) /*Adding*/

numbers.shift();     /*removing*/

console.log(numbers);

(in the middle)


let numbers = [1,2,5];

// numbers.splice(2,0,3,4); /*Adding*/

numbers.splice(2,1); /*Removing*/

console.log(numbers);

(at the end)

let numbers = [1,2,3];

// numbers.push(4,5); /*Adding*/

numbers.pop(); /*removing*/

console.log(numbers);


<<<<<< Combining two arrays with the spread operator >>>>>

const first =[1,2,3,4];
const second = [5,6,7,8];

const combined = [...first, ...second];
console.log(combined);

// copying an array 

const copy = [...combined];
console.log(copy);

// we can also add new elements by spread operator like thsi

const newCombined = [...first, 'priyo',361,'salamn',...second,'ha','ha','ha'];
console.log(newCombined);


<<<<<<<<< Mapping >>>>>>>>

let array = [5,8,3,20];

let mapArray = array.map((num)=>{
   return num*3
});
console.log(mapArray);

the best way to write this code is

let mapArray = array.map(num=> num*4);
console.log(mapArray);

<<<<<<< Filtering(Condition) >>>>>>>>

let array = [5,8,3,20];

let filterArray = array.filter (num=> num >2);
console.log (filterArray);

 <<<<<<< Reduce Array >>>>>>>>

const array = [5,8,3,20];

const reduceArray = array.reduce((accumulator,num)=>{
	return accumulator + num
},3);
console.log(reduceArray);

