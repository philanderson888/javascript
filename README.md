# Javascript

## Contents

- [Javascript](#javascript)
	- [Contents](#contents)
	- [Author](#author)
	- [Introduction](#introduction)
	- [Resources And Further Notes](#resources-and-further-notes)
	- [types](#types)
	- [TypeOf](#typeof)
	- [Operators](#operators)
	- [Maths](#maths)
	- [equality](#equality)
	- [Loops](#loops)
	- [Array](#array)
	- [map](#map)
	- [Reduce](#reduce)
	- [Dates](#dates)
	- [types](#types-1)
	- [String](#string)
	- [Boolean to string](#boolean-to-string)
	- [Date to string](#date-to-string)
	- [String To Number](#string-to-number)
	- [Number(date)](#numberdate)
	- [truthy falsy](#truthy-falsy)
	- [setTimeout setInterval](#settimeout-setinterval)
	- [exceptions](#exceptions)
	- [Function](#function)
	- [this](#this)
	- [globalThis](#globalThis)
	- [dom](#dom)
	- [svg](#svg)
	- [canvas](#canvas)
	- [websockets](#websockets)
	- [Spread Operator](#spread-operator)
	- [find](#find)
	- [findIndex](#findindex)
	- [forEach](#foreach)
	- [Filter](#filter)
	- [JSON](#json)
	- [serialize](#serialize)
	- [for..in](#forin)
	- [valid JSON?](#valid-json)
	- [UNDEFINED](#undefined)
	- [Fetch](#fetch)
	- [Collections](#collections)
	- [Sets](#sets)
	- [Events](#events)
	- [event.type](#eventtype)
	- [environment variables](#environment-variables)
	- [Google Calendar](#google-calendar)
	- [Google Maps](#google-maps)
	- [Javascript flow 2 - decrement](#javascript-flow-2---decrement)
	- [Forms](#forms)
	- [Serializing Form Data](#serializing-form-data)
	- [FORMS](#forms-1)
	- [DOM Capture And Bubble](#dom-capture-and-bubble)
	- [GEOLOCATION](#geolocation)
	- [Audio](#audio)
	- [Video](#video)
	- [Navigator](#navigator)
	- [performance](#performance)
	- [Storage](#storage)
	- [Cookies](#cookies)
	- [Local Storage](#local-storage)
	- [Session Storage](#session-storage)
	- [Cookies](#cookies-1)
	- [HTML5 localStorage](#html5-localstorage)
	- [Session State](#session-state)
	- [cookie](#cookie)
	- [location](#location)
	- [websockets](#websockets-1)
	- [jQuery](#jquery)
	- [Array](#array-1)
	- [Classes](#classes)
	- [dependency injection](#dependency-injection)
	- [try.catch.finally](#trycatchfinally)
	- [async](#async)
	- [map](#map-1)
	- [page load](#page-load)
	- [Delete](#delete)
	- [classList](#classlist)
	- [forEach](#foreach-1)
	- [Object.seal()](#objectseal)
	- [Object.freeze()](#objectfreeze)
	- [Object.preventExtensions()](#objectpreventextensions)
	- [querySelectorAll](#queryselectorall)
	- [scope](#scope)
	- [Javascript Switch](#javascript-switch)
	- [Or just 'return'](#or-just-return)
	- [Javascript If..Else](#javascript-ifelse)
	- [document.querySelector](#documentqueryselector)
	- [Set A Listener](#set-a-listener)
	- [classList.remove](#classlistremove)
	- [getPropertyValue](#getpropertyvalue)
	- [getAttribute](#getattribute)
	- [this](#this)
	- [Dates](#dates-1)
	- [dom](#dom-1)
	- [string includes](#string-includes)
	- [Prototype](#prototype)
	- [VIDEO](#video-1)
	- [exceptions](#exceptions-1)
	- [Functions](#functions)
	- [Web Worker](#web-worker)
	- [webworker](#webworker)
	- [dom](#dom-2)
	- [ajax](#ajax)
	- [Google sheets](#google-sheets)
	- [Send Gmail](#send-gmail)
	- [Glossary](#glossary)
	- [AJAX](#ajax-1)
	- [ChartJS](#chartjs)
	- [Console](#console)
	- [String format](#string-format)
	- [DATETIME](#datetime)
	- [Debounce](#debounce)
	- [Closures](#closures)
	- [AppCache](#appcache)
	- [Image ISMAP](#image-ismap)
	- [Image USEMAP](#image-usemap)
	- [XmlHttpRequest](#xmlhttprequest)
	- [svg](#svg-1)
	- [canvas](#canvas-1)
	- [jQuery](#jquery-1)


## Author

Phil Anderson

@PhilAnderson Web Enterprises 2020

## Introduction

This is a series of notes from which to learn from scratch all about Javascript.

## Resources And Further Notes

### javascript docs

[docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### nodejs

[nodejs](https://github.com/philanderson888/nodejs)

### jQuery

[jQuery](https://github.com/philanderson888/jquery)

### reactjs

[react](https://github.com/philanderson888/react)

### typescript

[typescript](notes/typescript.md)

### libraries

[libraries](notes/libraries.md)

### random terms

[random programming terms](notes/random-programming-terms.md)
[random web programming terms](notes/random-web-terms-and-glossary.md)

### other notes and topics

- [reason](notes/reason.md)
- [ajax](notes/ajax.md)
  - [demos](https://github.com/philanderson888/ajax)
- [Angular 1](notes/angular-version-1.md)


## types

Primitives
- number
- string
- boolean
- null  
- undefined
- BigInt
- Symbol

Object
- Object

Regular Expression 
- var myRegularExpression = /test/g

Date
- var d = new Date()
	
Function
- var x = function(){//code}
	
Exponential
- var x = 1.23e5       123000

NaN Not a number
- isNaN(x) 		TRUE OR FALSE  		TRUE => IT IS NOT A NUMBER!
		
Infinity
- Infinity

Array

```js
var arr = []    or   ()
var arr = [3];      
var arr = [1,2,3, "hello" , {} , [] ];
var arr = [,]
var arr = [,,]
```	

Object

```js
var obj = {}
var obj = new Object();

var myObject = {
	var1: "value1";
	var2: "value2";
	var3: 15;
};

var obj = { "key": [value1, value2, value3], "key2": [value1, value2] }
or

var obj = {};

	obj.key=value;
	
		key also called 'property' which has attribute
		obj.property=attribute
	
	obj.key = [value1, value2, value3];

	or
	
	obj["key2"] = [value1, value2]; 

myObject.var2= 23 / "string" / false / [val1,val2,val3] / undefined

delete myObject.var3;
		
JSON.parse     ==> String to JSON
JSON.stringify ==> JSON to String
	

	Note : root object is 'Object' and everything is a child of this object
			and its methods eg .toString();
```

Other object types

	Error 
	
	Global
	
	Math
	
	Arguments array passed to a function
	
	

## TypeOf

```
Variable can change its type

	var x = 1;
	var x = "hi";

	
typeof(x)  declares its type 

	var str1 = "Welcome to my Application" ; 
	var num1 = 25 ; 
	var num2;
	
		typeof(str1)           String
		       num1            Number 
			   num2            undefined 
			   
	var x = function (){}
	
		typeof(x)				function
```

## Operators

```
Arithmetic evaluates to a number

String evaluates to a string

Logical evaluates to true/false

INTEGER DIVISION RETURNS AN INTEGER

int/int = int eg 5/2 = 2 so must use float instead

DOUBLE/FLOAT DIVISION RETURNS A DOUBLE/FLOAT
```

## Maths

```
Rounding Numbers
	Math.round to nearest integer
	Math.ceil to next highest integer
	Math.floor truncates anything after decimal point
ABS()

	ABSOLUTE VALUE     MAKE ALL NUMBERS ZERO OR POSITIVE
	
				
					+99 => 99
					-99 => 99
					
	
Random numbers
	Math.random()  between 0 and 1
		var numRandom=Math.floor((Math.random()*6)+1);
		

POW(X,Y)		RAISE X TO THE POWER Y

	Math.pow(3,2)   Three squared

SQRT

	Math.sqrt()

	
MAX/MIN

		max(1,2,3)
		min(1,2,3)
			
toFixed
toPrecision

	toPrecision(5)   gives number to 5 significant digits
toExponential 

		
Math.e;  

	e = 2.7 Euler

Math.PI  3.141

Math.LN2/10

		ln2 = .69
		ln10 = 2.3
Math.LOG2E/10E

exp(x)
log(x)  natural logs (to the base e)

Math.sin(x)/cos/tan/asin..

Infinity !!!
	<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity>
```




## equality

```js
const a = true
a == true //true
a === true //true
1 === 1 //true
1 === '1' //false
```



## Loops

```
While() loop

Do{}..while() loop

For(var x=0;x<10;x++){}

For(var item in myObject){ }
```

## Array

```
array1 = ["item1","item2"];
array2 = [];
array3 = ();
array4 = [5];  
array5 = (5);

Looping through Array  (Parse an array)
	for (var i=0;i<myArray.length;i++){
		console.log('myArray[' + i + '] = ' + myArray[i]);
	}
	
JOIN

	OUTPUTS THE ARRAY ELEMENTS AS ONE LONG STRING
	
		MYARRAY.JOIN()			==>		1,2,3
		MYARRAY.JOIN(',')		==>		1,2,3
		MYARRAY,JOIN(';')		==>		1;2;3
		

PUSH

	array.push(22)       TO END
	array1.push("extra1","extra2");

POP

	array.pop            FROM END

UNSHIFT

	unshift adds element at start of array   array1.unshift("extra item at start1","2");

	array.unshift(22)    TO START

SHIFT

	shift removes element from start of array

	array.shift()        FROM START 

SPLICE

	splice inserts element at position x and optionally removes y elements eg 
	
		array1.splice(2,2,"extra1","extra2","extra3");   
		
				removes third and fourth items (index 2 and 3) and then 
				adds three items at index 2,3,4
SLICE

	slice copies from existing array to create new array 
	
		var newArray = array1.slice(x,y) 
		
				copies from index x up to the index before y
		slice(0,1) will get the first character of an array  
		
				(second number is index AFTER last character).  
				
		Second minus first number gives length of slice.  eg 
				
			slice(2,5) on Boston gives letters s(2) t(3) o(4)
		
	slice(2) goes from index 2 to end
		
Looping through Array  (Parse an array)
	for (var i=0;i<myArray.length;i++){
		console.log('myArray[' + i + '] = ' + myArray[i]);
	}
		flag with initial value and changes if value found eg var found=false;
			break out of a loop if match found
length of array.length;
nested loops

SORT

	array.sort()
		
REVERSE

	array.reverse()

indexOf : can be used to locate the index of a given item in the array

	myArray=["banana","pear","apple"]

	myArray.indexOf('banana')   ==> 0

Jagged Array
	
	var arr = [[value1, value2, value3], [value1, value2]]
	
	or
	
	var arr = [];   arr.push([value1, value2, value3]);
Object containing arrays of differing length
	
	var obj = { "key": [value1, value2, value3], "key2": [value1, value2] }
	or
	
	var obj = {};
	obj.key = [value1, value2, value3];
	obj["key2"] = [value1, value2];
```

## map

maps to new array

map is like a foreach loop over an array

    creates a new array by iterating the old array

    myNewArray = myOldArray.map(function(item))

*Note:*
*- map is used when we want to return an array mapped from the original array*
*- forEach is used when we want to iterate but do not want to return anything*

```js
<p>Click the button to get a new array with the full name of each person in the array.</p>
<button onclick="myFunction()">Try it</button>

<p>New array: <span id="demo"></span></p>

<script>
var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];

function myFunction() {
    document.getElementById("demo").innerHTML = persons.map(function(item,index) {
        var fullname = [item.firstname,item.lastname].join(" ");
        return fullname;
    });
}
</script>
```

## Reduce

To get the sum of items in an array we write

```js
const total = myArray.reduce((x,y)=>x+y)
```


## Dates

```js
var myDate = new Date();

var myDate = new Date(yyyy,mm,dd,hh,mm,ss,ms);
var myDate = new Date("11/22/2014 18:25:35")  
var futureDate = new Date("June 20, 2017");

var anotherDate = new Date("March 06, 2022 08:17:55")

getFullYear
getMonth   0-11
getDay     0-6

	var today = myDate.getDay();
	
getDate       1-31
getHours   0-23
getMinutes  0-59
getSeconds   0-59
getMilliseconds 0-999
Offset from GMT
Time Zone
getTime = UNIX time = milliseconds since 1 Jan 1970 at midnight

toString(date)    returns full date and time
toDateString(date) returns date
toTimeString(date) returns time
	js_77_date.htm
	
	js_78_set_date.htm
	
	also '24'  
	
	search for word 'date' 
	
			
			
			
var todaysDate = today.getTime();
var millisecondDiff = futureDate - todaysDate
var dayDiff = math.Floor(millisecondDiff/(1000*60*60*24))  //days
setFullYear / setMonth / setDate / setHours / setMinutes / setSeconds / setMilliseconds
```

Inputting a date

```html
<input type="date"> 
<!-- set default date to today -->
<input type="date" id="datePicker"> 
<script>
	document.getElementById('DatePicker').valueAsDate = new Date();
</script>
```

ISO Date

```js
const date01 = new Date('07 November 2020 13:30 GMT`);
console.log(date01
/*
Sat Nov 07 2020 13:30:00 GMT+0000 (Greenwich Mean Time)
*/
console.log(date01.toISOString())
/*
2020-11-07T13:30:00.000
*/
console.log(date01.toGMTString())
/*
Sat, 07 Nov 2020 13:30:00 GMT
*/

```

## types

primitive types
- Number
- String
- Boolean
- Symbol

Object type is
- Object

## String

```js
String(10) //"10"

(10).toString() //"10"
```

## Boolean to string

```js
String(true) //"true"
true.toString() //"true"
String(false) //"false"
false.toString() //"false"
```

## Date to string

```js

String(new Date('2019-01-22'))
//"Tue Jan 22 2019 01:00:00 GMT+0100 (Central European Standard Time)"

(new Date('2019-01-22')).toString()
//"Tue Jan 22 2019 01:00:00 GMT+0100 (Central European Standard Time)"
```



## String To Number

```js
Number("1") //1
Number("0") //0
Number(" 1 ") //1
Number("") //0
Number("12.2")
Number("abc"") // NaN
Number(true) //1
Number(false) //0
```

## Number(date)

Converts date to UNIX timestamp


## truthy falsy

Any value can be converted to boolean passing it to `Boolean()`.

All values will resolve to `true` except:

```
Boolean(false) //false
Boolean(0) //false
Boolean(NaN) //false
Boolean("") //false
Boolean(null) //false
Boolean(undefined) //false
```



## setTimeout setInterval

```js
setTimeout("fnClock()", 1000);   delay

setInterval(function () {
	somethingElse();
}, 2000); 				
// clear
var mytimer = setInterval(fnDothis(),1000);
function fnStop = clearInterval(mytimer);
// parameters

	SETINTERVAL(DO_THIS, 2000, "STRING-TO-PASS-IN");
```

## exceptions

```
try{
  // CODE WHICH MAY FAIL		
}

catch(e){
	console.log("Your error is" + e);
	console.log("Error message is " + e.message);
}

finally{}
```

THROW AN EXCEPTION MANUALLY
TRY
THROW 'EXCEPTION HAS BEEN THROWN BY ME';

```
throw("this is an error");
			throw new ArgumentException("This is an argument exception");
			
	CATCH(E)
	
			HANDLE EXCEPTION E
			
	FINALLY
	
	
	
Other
Optional parameters
	if (typeof optionalArg === 'undefined') { optionalArg = 'default'; }

	Number.MIN_VALUE
	Number.MAX_VALUE
Input Validation eg with Regular Expressions
```

## Function

Declare Named Function

```
function x(){}
	var y = function x(){}
	
	
Declare Anonymous (not named) function

	function(){}
	() => {}                  //Lambda (anonymous)
	

Run a function

	x(); 
	
	
	
	Run an ANONYMOUS (NAMELESS) FUNCTION RIGHT NOW USING
		   ....... function(){}

Pass parameters

	x('Param1',a,b,c)
	
		arguments is the name of the array passed into the function
		
		arguments.length = expected number of parameters [arity]
		
											function x(a,b,c) ==> x.length=3
		
		arguments[0]
		
		
		

Return

	return <value>;    halts execution of the function

						can return a JSON 
						
						
	Best practice : ALWAYS PASS VARIABLES TO FUNCTIONS AND USE RETURN STATEMENT
Scope

	global var declared OUTSIDE FUNCTION
	
	local var declared WITHIN FUNCTION
	
	let is valid within { block of code }  (even private within a function)
	
	

IIFE Immediately Invoked Function
	(function(){});   RUN RIGHT NOW AND RETURN THE OUTPUT OF THAT FUNCTION AS A 	LITERAL INPUT INTO THE COMPILED CODE
	

Callback Function
	$(this).on('click',function(){})
	
	$(this).on('click',callback)
					note : NO QUOTES SURROUNDING CALLBACK 
					
					
					
					
					
					
					
					
/**
* Given a scope (typically $(document)) all sheets are scanned until requested rule is found
* 
* @author Adam Yanalunas
* @since  2010-01-24
* 
* @param  string|array      Rules to be returned
* @return CSSStyleRule|null
*/
```

## this

When we use a function, `this` refers to the current object that is in scope at this present time

## globalThis

as expected, `globalThis` refers to the global value of `this` which does not change, and refers to the window within which we are creating our web application

## dom


Window is root element

```
window is the (default) object that is always present in every command but omitted from being explicitly stated.

eg  alert() can be written window.alert()

Create new Window

	window.open()
	
	window.open(URL)
	
	window.open(about:blank)    
	
	window.open(URL,_blank)    NEW WINDOW (DEFAULT)
	
	window.open(URL,_self)     SAME WINDOW
```

Working with Web Documents
When a page is loaded into a browser it is treated as an HTML Document

```
Window => Document 

	Think of Window as structure onto which we will place a moving advertisement.
	
	Document will be the content of that advert actually displayed
	
	document.createElement()
	document.baseURI   base URL   (Uniform Resource Identifier)
	document.getElementById  Select an item on the page
                       sByTagName
                       sByClassName
					   sByName 
					   
	document.write()   create a new page containing this content
	
DOM uses 4 elements to create a page

	Document 
	Element 
	Text
	Attribute with Value 
	
Add an element to page using Javascript 

	HTML : <div id="x">
	
	Javascript var newPara = document.createElement("p");
	var node = document.createTextNode("some text here");
	newPara.appendChild(node);
	OR newPara.innerHTML="some text";
	document.getElementById('x').appendChild(newPara);
	
	<div id=x>
		<p>some text here</p>
		
		
		<http://www.w3schools.com/js/js_htmldom_nodes.asp>
		
insertBefore an element 
parentElement.removeChild(childElement);
parent.replace(new,old);

		<https://jsfiddle.net/philanderson888/m797tLhk/>
		

	
ChildNodes[]
		
	('parent').childNodes 				==> ARRAY OF ALL CHILD NODES
	
	
	('parent').childNodes[0]    etc
	
	childNodes[0] = firstChild
	
	lastChild will be childNodes[childNodes.length-1]
	
	
	
	
ParentNode
	('id').parentNode

Sibling Nodes

	nextSibling 
	
	previousSibling

White space

	NOTE : WHITE SPACE CAN CONSTITUTE PART OF THE DOM SO TAKE CARE WITH CERTAIN ELEMENTS !!!!
	
		SOLUTION : JUST REMOVE THE WHITE SPACE AND YOUR PROBLEMS WILL BE FIXED!
	OR
	
	Filter by NodeType
				parentNode = document.getElementById('x');
				childNodes = parentNode.childNodes
				for(var i=0;i<childNodes.length;i++){
				  if(childNodes[i].nodeType===1){
						console.log("It's a real node!");
						console.log("Node Name is " + childNodes[i].nodeName);
						console.log("Node Value is " + childNodes[i].nodeValue);			  	
				  }
				  elseif(childNodes[i].nodeType===3){
				        console.log("We hit white space!");					  
				  }
				}
	
Node Name By Tag Name

	nodeName   is the interior of the <tag> name ie tag
	
			if (nodeName.toLowerCase==="img"){console.log('Picture');
	
Node Value
	nodeValue = just the bit immediately inside the node (first part only not the full html)

InnerHTML

	innerHTML = all the HTML inside tag, including html inside it
	
Selecting multiple elements

	document.getElementsByTagName('li')          ==> ARRAY with LENGTH property
	
	getElementsByTagName("p")
		
	getElementsByTagName("*")[3].style.backgroundColor="red"
	getElementsByTagName("p")
	var par = getElementsByTagName("p") returns an array par[0],par[1] of paragraphs so can address par[0].innerHTML = "Hi";
	var pics = getElementByTagName("img"); is an array of all images
	
	Get all cells inside a table
		(1) var myTable = Get table by ID
		(2) var myCellsArray = Get by Tag (td)
		(3) for loop from 0 to myCellsArray.length-1 => set [i].style.backgroundColor to eg pink

Attributes
	
	hasAttribute   ('id').hasAttribute("class")
	getAttribute   ('id').getAttribute("class")  gets value of class attribute
	setAttribute   ('id').setAttribute("class","myClass")
	array of attributes ('id').attributes - get length, nodeName, nodeValue

	
Adding Nodes
	var newElement = document.createElement("div")
	newElement.setAttribute("class","thisClass")
	var newText = document.createTextNode("This is my text")
	newElement.appendChild(newText)
	
	example
	var parentDiv = ..('id');
	var newP = document.createElement("p")
	var newText = document.createTextNode("extra text")
	newP.appendChild(newText)
	parentDiv.appendChild(newP)
	parentDiv.insertBefore(newP,parentDiv.firstChild)             //first
	parentDiv.insertBefore(newP,parentDiv.firstChild.nextSibling) //second
	
Removing Nodes
	('id').removeChild(thisNode)    

window.onload=function(){}
DOM has 4 nodes which create a page : document, element, text, attribute
node = any element
getElementById
getElementByTag
document.write replaces whole page
document.writeln("Text");   adds a new line of text
document.write("Text"); writes text to current line
document.write("<p>Text</p>");
<noscript> displayed if JS disabled
Window object is highest level object
Status displayed in status bar
Windows object => document object
Document object within <body> tag
Document => image object
document.getElementById(id);
span.firstchild.nodeValue  changes value of this item
SpanID.firstChild is the text element in <span>
SpanID.firstChild.nodeValue = "text"  to change <span> text
```

## svg

[SVG](notes/svg.md)

## canvas

[canvas](notes/canvas.md)

## websockets

full duplex communications over http

ws://
wss://

```js
var mysocket = new WebSocket('ws://url')
mysocket.onmessage = function(e){ // e.data }
mysocket.send('message')
```

1) STRING
2) BLOB EG FILE
3) BUFFER
READYSTATE

var mySecureSocket = 'wss://mysecuresite.com';

CONNECTING

	1	GOOD (OPEN AND READY)
	2	CLOSING
	3	CLOSED
	
```js
mysocket.onopen = function(){}
mysocket.addEventListener('open',function(){})
    error
    message
   close


## dom


('parent').childNodes	==> ARRAY OF ELEMENTS
('parent').childNodes[0]	FIRST ELEMENT
[array.length-1 ]
nextSibling
previousSibling
white space : CAN BE PART OF DOM WITH UNEXPECTED RESULTS SO TAKE CARE!
<DIV> </DIV>
<DIV></DIV>
\s	WHITE SPACE WITH REGEX
^\s	NOT WHITE SPACE
\S	NOT WHITE SPACE

```
NODE NAME == > TAG NAME
	<img>		NODE NAME = IMG
NODE VALUE
	<p>----IN HERE---</p>  
	INPUT ELEMENT   
	 	INPUT BOX : TEXT INSIDE BOX ENTERED BY USER IS
				
				<element>.value
		                $('SELECT').val()
innerHTML/innerText   eg inside div, p
	element.innerHTML="<p>hi</p>";
Attributes
	element.hasAttribute('x')		t/f
```

var boxwidth = document.getElementById('inputbox1').getAttribute('width');
setAttribute('x','value')
CSS 'attr'

## arrays

## Array.of

```jsx
let myArray = Array.of(1,2,3);
```

## Spread Operator

Use to pass in elements of an array into a function

```jsx
let myArray = Array.of(1,2,3);

function getSum(a,b,c){
  return a+b+c
}

getSum(...myArray)
```

## find

```jsx
var output = myArray.find(item=>item>1000)
```

## findIndex

```jsx
var output = myArray.findIndex(item=>item>1000)
```

## forEach

```jsx
let total = 0;
myArray.forEach( item => total += item ) 
```


## Filter

To get the minimum value in an array we can use

```js
fetch("https://jsonplaceholder.typicode.com/users")
	.then(response=>response.json())
	.then(data=>{
		const users = data
		let idMax = users.reduce( (max, user) => parseInt(user.id)>max ? parseInt(user.id) : max, parseInt(users[0].id))
	})
```

## JSON

generate

http://www.json-generator.com/#generate

https://www.mockaroo.com/

http://jsonschema.net/#/
		
	


## serialize

HTML FORM : POST DATA TO SERVER (FORM ACTION ="" METHOD='POST')

	==> 'SERIALIZE FORM FIELDS AND SEND AS STRING'
	

## for..in
		
```js		
console.log('\n\n');
for (var person in people){
	if(people.hasOwnProperty(person)){
		var friendList = '';
	for (var friend in people[person].friends){
		if(people[person].friends.hasOwnProperty(friend)){
		if (friendList.length>0){
			friendList += ', ';
		}
			friendList += people[person].friends[friend].name;
		}
	}
		console.log('Record ' + 
			person +  
			' has name ' + people[person].name + 
			' who has ' + people[person].eyeColor + 
			' eyes and ' + people[person].friends.length + 
			' friends called ' + friendList + "\n\n"
			);
	}
}
```
		
	
## valid JSON?

{"property",value}
	
There are a few rules to remember when dealing with data in JSON format. There are several gotchas that can produce invalid JSON as well.

Empty objects and arrays are okay

Strings can contain any unicode character, this includes object properties

null is a valid JSON value on it's own

All object properties should always be double quoted

Object property values must be one of the following: String, Number, Boolean, Object, Array, null

Number values must be in decimal format, no octal or hex representations

Trailing commas on arrays are not allowed

These are all examples of valid JSON.

```json
{"name":"John Doe","age":32,"title":"Vice President of JavaScript"}
["one", "two", "three"]
// nesting valid values is okay
{"names": ["John Doe", "Jane Doe"] }
[ { "name": "John Doe"}, {"name": "Jane Doe"} ]
{} // empty hash
[] // empty list
null
{ "key": "\uFDD0" } // unicode escape codes
```
	
Invalid JSON 
	Functions
	Dates
	Hex  eg 0x...
	
	
				node_18_writefile_readfile.js
	
	
## UNDEFINED 

Any function without an explicit RETURN STATEMENT ALWAYS RETURNS UNDEFINED 

```js
function x(){}
	
	x();    RETURN UNDEFINED
```

## Fetch

```js
<h2>Javascript Fetch</h2>
<p><button class="btn btn-primary" id="load">Load</button></p>
<div id="grid"></div>
<div id="customer-list">Customer list</div>
<div id="which-customer">
    <button class="btn btn-primary customer" id="customer-0" value="0">0</button>
    <button class="btn btn-primary customer" id="customer-1" value="1">1</button>
    <button class="btn btn-primary customer" id="customer-2" value="2">2</button>
    <div id="customer-data"></div>
</div>
@section scripts{
    <script>
        document.getElementById('load').addEventListener('click', () => {
            fetch('https://raw.githubusercontent.com/philanderson888/data/master/customers.json')
                .then((response) => {
                    return response.text();
                })
                .then((result) => {
                    document.getElementById('grid').innerHTML = result;
                });
        });

        $(function () {

            fetch('https://raw.githubusercontent.com/philanderson888/data/master/customers.json')
                .then(
                    function (response) {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                            return;
                        }
                        response.json().then(function (customers) {
                            console.log(customers);
                            customers.forEach(customer => {
                                var item = `<li><strong>${customer.CustomerID} ${customer.CustomerName} ${customer.Address}</strong></li>`;
                                $('#customer-list').append(item);
                            });
                        });
                    }
                )
                .catch(function (err) {
                    console.log('Fetch Error :-S', err);
                });
        });

        function getCustomerData(event) {
            console.log(event.type);
            // return the ID of the button
            console.log(event.target.value);
            fetch('https://raw.githubusercontent.com/philanderson888/data/master/customers.json')
                .then(
                    function (response) {
                        response.json()
                            .then(function (customers) {
                                var customer = customers[event.target.value];
                                console.log('customer id = ' + customer.CustomerID);
                                var item = `<li><strong>${customer.CustomerID} ${customer.CustomerName} ${customer.Address}</strong></li>`;
                                $('#customer-data').append(item);
                            });
                    });  
        }

        var customerButtons = document.getElementsByClassName('customer');

        Array.from(customerButtons).forEach(function (button) {
            button.addEventListener('click', getCustomerData);
        });

    </script>
}
```

## Collections

Before ES6 we had arrays and objects

Now we also have `sets`, `maps`, `weak sets` and `weak maps`

## Sets 

- unordered
- unindexed
- unique

```jsx
const mySet = new Set()
mySet.add(10)
mySet.add(10) // ignores duplicates!

# property
.Size

# method
.Add()
.Clear()
.Delete()
.Entries()
.forEach()
.Has('search-for-this-value')
.Keys()  // show keys
.Values()  // show values
```

## Events

```
EVENT
	<div onmouseover="fndothis()">
	element.addEventListener('mouseover',fndothis)
	$(..).on('mouseover',function(){});
	$(  ).click(function(event){   event.x  })
		
	REMOVE LISTENER
	element.removeEventListener('mouseover',<<named-function>>)
	$('..).off('mouseover',<<named funtion>>)
	
	
	
	Events
Button

	Get Event (from user)
	
	Event Source 
	
				You know an object is the event source if it has addAction/Key/MouseListener
	
	Accepts Registration From Listeners who want to be told when event occurs
	
	Calls the Listener's Event-Handling Method
	
PAGE LOAD EVENTS
	onload()
	onunload()
MOUSE EVENTS
	onclick/dblclick/mouseover/mouseenter/mouseout/mousemove
	onmousedown/up
KEYBOARD EVENTS
	onkeyup/down/press
	
	keyPressed
	keyReleased
FORM EVENTS
	onsubmit
	onfocus/blur		CLICK INTO OR OUT OF AN INPUT BOX
	onchange		SELECT DROWN BOX : MAKE SELECTION
	onselect		ITEM GETS SELECTED ((CHECKBOX/RADIO))		

		DISABLED 	EG BUTTON
		READONLY	EG INPUT FIELD
EVENT DATA AND TYPE
	event.data
	event.type

Event Onclick

<button onclick="dothis()">
		
		<form onsubmit="dothis()">
		
		<div onMouseOver="function-to-run">
	
LISTENER which is active on the OBJECT listening for EVENTS 
	
		object.addEventListener('EVENT',handler);
		<div>.addEventListener("mouseover",function-to-run)
		
		<element>.removeEventListener('mouseover',named-function)
PAGE EVENTS
	ONLOAD
	
		<body onload="dothis()">
		
	
	ONUNLOAD
		
		
		
		
METHOD click()          (Can call this method in code to trigger the click 
								event)
								
			$(this).click();	//BUTTON
	
			$(this).submit();    //FORM
			
			$(this).trigger('click',function(){});
		
		
		
		
Mouse Events 
	event.x and event.y will hold the coordinates of the event
	
		canvas.onmousedown=function(e){//e.x,e.y}
		
		
	onclick
	ondblclick
	
	onmousedown
	onmouseup
	
	onmousemove           
	
	onmouseover
	onmouseout
	
Keyboard Events

	keyPressed
	keyReleased
	onKeyDown  
	onKeyPress  
	onKeyUp 
	
Form Events
	onfocus
	onblur
	onsubmit
	onchange
	onselect
	focus() sets the focus
	disabled()  make field read only
	

Using the onLoad and onUnload Events
	window.onload 
	
		<body onload="fnDoThisOnLoad()">  in HTML 
	
	window.onunload
```



Keyboard Events

  KeyPress
  KeyDown
  KeyUp
  shiftKey/ctrlKey/altKey
  charCode : Keyboard Letters, Numbers and Characters : KeyPress
  scanCode : Special Keys like Escape : KeyUp/Down
  http://javascript.info/tutorial/keyboard-events

Mouse Events

  mouseMove
  mouseDown
  mouseUp
  mouseEnter
  mouseLeave
  mouseOut
  click
  dblClick

Finger Events : Gestures

  TouchStart
    Finger is placed on the screen

  TouchMove
    Finger is dragged across screen

  TouchEnd
    Finger is removed from screen

  Testing Finger Events : Using An Emulator
    Hold down shift in these emulations to simulate multiple finger touches
    http://cdn.rawgit.com/hammerjs/touchemulator/master/tests/manual/hammer.html
    http://cdn.rawgit.com/hammerjs/touchemulator/master/tests/manual/leaflet.html



## event.type 

(eg click), event.target  (eg button), event.target.value (eg button value)

```js
<h2>Ajax Example</h2>
<div id="customer-list">Customer list</div>
<div id="which-customer">
    <button class="btn btn-primary customer" id="customer-0" value="0">0</button>
    <button class="btn btn-primary customer" id="customer-1" value="1">1</button>
    <button class="btn btn-primary customer" id="customer-2" value="2">2</button>
    <div id="customer-data"></div>
</div>
@section scripts{

        function getCustomerData(event) {
            console.log(event.type);
            // return the ID of the button
            console.log(event.target.value);

            fetch('https://raw.githubusercontent.com/philanderson888/data/master/customers.json')
                .then(

                    function (response) {

                        response.json()
                            .then(function (customers) {
                                var customer = customers[event.target.value];
                                console.log('customer id = ' + customer.CustomerID);
                                var item = `<li><strong>${customer.CustomerID} ${customer.CustomerName} ${customer.Address}</strong></li>`;
                                $('#customer-data').append(item);
                            });
                    });                
        }

        var customerButtons = document.getElementsByClassName('customer');

        Array.from(customerButtons).forEach(function (button) {
            button.addEventListener('click', getCustomerData);
        });

    </script>
}
```

## environment variables

List all environment variables (MAC)

```js
printenv
```

Create `app-env` file

```js
export API_KEY="..."
export TOKEN="..."
```

Add this file into the environment variables

```js
source app-env
```

Now using whatever code syntax is applicable for example in node

```js
var api-key = process.env.API_KEY
```

and also ignore the file in .gitignore

```js
app-env
```

## Google Calendar

Find the code at [api\index.html](api\index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Calendar Detail</title>
    <link rel="stylesheet" href="style.css" />
    <script src="https://apis.google.com/js/api.js"></script>
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="../../../data.js"></script>
</head>
<body>
    <div class="container">
        <h1>Google Calendar API Interrogation</h1>
        <div id="nav-placeholder"> </div>    
    </div>
    <script>
        $(function(){
        $("#nav-placeholder").load("nav.html");
        });
    </script>
    <div class="container">
        <button onclick="authenticate().then(loadClient).then(listCalendarEntries)">Calendar List Entries</button>
        <h3>Calendar Object</h3>
        <div id="calendar-object"></div>
        <h3>Events Listed Here</h3>
        <div id="events">Events listed here</div>
        <h3>Time Differences Listed Here</h3>
        <div id="time-difference"></div>
        <h3>Total Time Differences Listed Here</h3>
        <div id="totalTimeDifference">Total Time Difference</div>
    </div>
    <script>
    function authenticate() {
        return gapi.auth2.getAuthInstance()
            .signIn({scope: "https://www.googleapis.com/auth/calendar"})
            .then(function() { console.log("Sign-in successful"); },
                function(err) { console.error("Error signing in", err); });
    }
    function loadClient() {
        gapi.client.setApiKey(API_KEY);
        return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
            .then(function() { console.log("GAPI client loaded for API"); },
                function(err) { console.error("Error loading GAPI client for API", err); });
    }
    // Make sure the client is loaded and sign-in is complete before calling this method.
    function listCalendarEntries() {
        return gapi.client.calendar.calendarList.list()
            .then(function(response) {
                    // Handle the results here (response.result has the parsed body).
                    console.log("Response", response.result);
                    let output = '';
                    for(calendar of response.result.items){
                        output += calendar.summary + '<br/>' + calendar.id + '<br/>' + JSON.stringify(calendar) + "< br/><br /><br /><br/>"
                        getTimeDifferences(calendar.summary,calendar.id)
                    }
                    document.getElementById('calendar-object').innerHTML=output;
                    
                },
                function(err) { console.error("Execute error", err); });
    }
    function getCalendarMetadata(){
        return gapi.client.calendar.calendarList.list()
            .then(function(response) {
                    // Handle the results here (response.result has the parsed body).
                    console.log("Response", response);
                },
                function(err) { console.error("Execute error", err); });
    }
    function getTimeDifferences(calendarSummary,calendarId){
        return gapi.client.calendar.events.list({calendarId})
            .then(function(response) {
                    const events = response.result.items.slice(0,5).map(event=>event)
                    console.log("Response.result.items", events);
                    let eventData = '';
                    let totalDiff = 0;
                    document.getElementById('time-difference').innerHTML += `<br/><br/>${calendarSummary}<br/>${calendarId}<br/><br/>`
                    for(const event of events){
                        if (event===undefined) continue
                        if (event.status==='cancelled') continue
                        if (event.start==='undefined') continue
                        if (event.start.dateTime===undefined) continue
                        const start = event.start.dateTime
                        const end = event.end.dateTime
                        const diff = (new Date(end)) - (new Date(start))
                        totalDiff += diff
                        const days = Math.floor(diff/86400000)
                        const hours = Math.floor((diff%86400000) / 3600000)
                        const mins = Math.floor(((diff % 86400000)%3600000)/60000)
                        const output = `${days} days, ${hours} hours, ${mins} minutes\n`;
                        eventData += output
                        console.log(output)
                        document.getElementById('time-difference').innerHTML += output + "<br/>"
                    }
                    document.getElementById('events').innerText=eventData
                    const totalDiffDays = Math.floor(totalDiff/86400000)
                    const totalDiffHours = Math.floor((totalDiff%86400000) / 3600000)
                    const totalDiffMins = Math.floor(((totalDiff % 86400000)%3600000)/60000)
                    const output = `difference ${totalDiffDays} days, ${totalDiffHours} hours, ${totalDiffMins} minutes\n`;
                    document.getElementById('time-difference').innerHTML += output + '<br/>'
                },
                function(err) { console.error("Execute error", err); });
    }
    gapi.load("client:auth2", function() {
        gapi.auth2.init({client_id: CLIENT_ID});
    });
    </script>
</body>
</html>
```




## Google Maps

This page shows a map, zooms in and out, can set the latitude and longitude and even search for a new place on the map

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Calendar Detail</title>
    <link rel="stylesheet" href="style.css" />
    <script src="https://apis.google.com/js/api.js"></script>
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="../../data.js"></script>
</head>
<body>
    <div class="container">
        <h1>Google Maps API Interrogation</h1>
        <div id="nav-placeholder"></div>
        <h3>Google Maps</h3>
        <button type="button" class="buttonSeparate" id="showMap" onclick="showGoogleMap()">Show Google Map</button>
        <button type='button' class='buttonSeparate' id='goHome'>Go Home</button>
        <button type='button' class='buttonSeparate' id='zoomIn'>Zoom In</button>
        <button type='button' class='buttonSeparate' id='zoomOut'>Zoom Out</button>
        <input type="text" id="search" class="input" placeholder="location" />
        Lat
        <input type="number" id="latitude" class="input" placeholder="latitude" />
        Long 
        <input type="number" id="longitude" class="input" placeholder="longitude" />
        <input type="number" id="zoom" class="input" placeholder="zoom" value="5" step="0.5" />
        <div id="map"></div>
    </div>
    <script>
        $(function(){
            let zoom = 5;
            let positionCurrent = {
                lat: -25.344,
                lng: 131.036
            }
            $("#nav-placeholder").load("nav-google-maps.html");
            $('#showMap').click(()=>{
                $('#showMap').text((i,text)=>{
                    return text === 'Show Google Map' ? 'Hide Google Map' : 'Show Google Map';
                })
            })
            $('#zoomIn').click( () => {
                if ( $('#map').is(":hidden")) {
                    $('#map').show();
                }
                zoom+=0.5;
                const map = new google.maps.Map(document.getElementById('map'), {
                    zoom,
                    center: positionCurrent,
                })
                const marker = new google.maps.Marker({
                    position: positionCurrent,
                    map,
                })
            })
            $('#zoomOut').click( () => {
                if ( $('#map').is(":hidden")) {
                    $('#map').show();
                }
                zoom-=0.5
                const map = new google.maps.Map(document.getElementById('map'), {
                    zoom,
                    center:positionCurrent,
                })
                const marker = new google.maps.Marker({
                    position: positionCurrent,
                    map,
                })
            })
            $('#goHome').click( ()=>{
                if ( $('#map').is(":hidden")) {
                    $('#map').show();
                }
                console.log('showing home')
                if(navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition);
                } else {
                    console.error(`geolocation is not possible`)
                }
            })
            $('#latitude').change(()=>{
                if ( $('#map').is(":hidden")) {
                    $('#map').show();
                }
                positionCurrent.lat = parseFloat($('#latitude').val());
                console.log('positionCurrent',positionCurrent)
                if(navigator.geolocation) {
                    showPosition2()
                } else {
                    console.error(`geolocation is not possible`)
                }
            })
            $('#longitude').change(()=>{
                if ( $('#map').is(":hidden")) {
                    $('#map').show();
                }
                positionCurrent.lng = parseFloat($('#longitude').val());
                console.log('positionCurrent',positionCurrent)
                if(navigator.geolocation) {
                    showPosition2()
                } else {
                    console.error(`geolocation is not possible`)
                }
            })
            $('#zoom').change(()=>{
                if ( $('#map').is(":hidden")) {
                    $('#map').show();
                }
                zoom = parseFloat(document.getElementById('zoom').value);
                console.log('new zoom',zoom)
                const map = new google.maps.Map(document.getElementById('map'), {
                    zoom,
                    center: positionCurrent,
                })
                const marker = new google.maps.Marker({
                    position: positionCurrent,
                    map,
                })

            })
            showPosition = (position) => {
                positionCurrent = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }
                const map = new google.maps.Map(document.getElementById('map'), {
                    zoom,
                    center:positionCurrent,
                })
                const marker = new google.maps.Marker({
                    position:positionCurrent,
                    map,
                })
            }
            showPosition2 = () => {
                const map = new google.maps.Map(document.getElementById('map'), {
                    zoom,
                    center:positionCurrent,
                })
                const marker = new google.maps.Marker({
                    position:positionCurrent,
                    map,
                })
            }
            $('#search').keyup(()=>{
                console.log('input has changed to ',$('#search').val())
                if ( $('#map').is(":hidden")) {
                    $('#map').show();
                }
                
                // places api
                let map = new google.maps.Map(document.getElementById("map"), {
                    center: positionCurrent,
                    zoom,
                });
                const request = {
                    query: $('#search').val(),
                    fields: ["name", "geometry"],
                };
                let service = new google.maps.places.PlacesService(map);
                console.log('service',service)
                service.findPlaceFromQuery(request, (results, status) => {
                    console.log('google places api request',google.maps.places.PlacesServiceStatus)
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (let i = 0; i < results.length; i++) {
                        //createMarker(results[i]);
                    }
                    map.setCenter(results[0].geometry.location);
                    }
                });
            })
        });
        showGoogleMap = () => {
            $('#map').toggle();
        }
        initMap = () => {
            const position = {
                lat: -25.344,
                lng: 131.036
            }
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: position,
            })
            const marker = new google.maps.Marker({
                position,
                map,
            })
        }
        createMarker = (place) => {
            const marker = new google.maps.Marker({
                map,
                position: place.geometry.location,
            });
            google.maps.event.addListener(marker, "click", () => {
                infowindow.setContent(place.name);
                infowindow.open(map);
            });
        }        
        const mylink = `https://maps.googleapis.com/maps/api/js?key=${API_KEY_GOOGLE_MAPS}&callback=initMap&libraries=places&v=weekly`
        $.getScript(mylink, function() {  });
    </script>
</body>
</html>
```




## Javascript flow 2 - decrement

## Forms

```

FORM VALIDATION
	VALIDATE ON CLIENT AND SERVER
		WHY ON CLIENT?   INSTANT USER FEEDBACK (NO SERVER DELAY)
		WHY ON SERVER?   CLIENT CAN TURN OFF JAVASCRIPT!!!
COMMUNICATING WITH THE USER USING CSS 
	input{}			ALL INPUT TAGS
	input:required{}	IF INPUT IS REQUIRED
	input:valid{}		VALIDATION HAS FAILED
	input:invalid{}		VALIDATION HAS PASSED
STOP FORM SUBMITTING IF VALIDATION
	<form onsubmit="return x()">        
	function x(event){
	    event.preventDefault();   STOP DEFAULT BEHAVIOUR
	    return false;
	}
VALIDATION EXAMPLE
	<form onsubmit="return validate()"
		<input type="text" name="input01" />
	function validate(){
		validated = false;
		myRegExp = /[a-z]{5}/
		var input = $('input01').val();
		if(input.test(myRegExp)){
			input.attr('background-color','green');
			validated=true;
		}
		return validated;
	}
NIL VALIDATION

	USE HTML REQUIRED FIELD
	
	OR 
	
	JAVASCRIPT input.value
	
			if(document.getElementById(id).value==="")
	
	
	
	
	
GETTING DATA FROM USER
						JAVASCRIPT				

	INPUT				(element).value			
	
	CHECKBOX			(element).checked
	RADIO				(element).checked
		
SUBMITTING A FORM
	HTML
			<form name="myform" id="x" action="url" 							onsubmit="..">
			<submit>		==> data to url
	JAVASCRIPT
			document.myform.submit();
RESET A FORM
	HTML
		 	<button type="reset">				
	JAVASCRIPT
			document.myform.reset()
```

CAPTURE / BUBBLE
addEventListener('click',fnA,true)
CAPTURE IS ON SO WORKS FROM OUTSIDE TO INSIDE
addEventListener('click',fnA,false)
CAPTURE IS OFF SO WORKS FROM INSIDE TO OUTSIDE

```
(BUBBLE IS ON HERE)
*** CAPTURE IS RARELY USED ***
<div id="parent">
    <div id="child">
    </div>
</div>
<script>
    document.getElementById('parent').addEventListener('click', parent,true);
    document.getElementById('child').addEventListener('click', child,true);
    function parent() {
        alert('parent');
    }
    function child() {
        alert('child');
    }
TRIGGER CHILD ONLY BUT NOT PARENT (IN BUBBLE)
addEventListener('click',handler,<CAPTURE_BOOLEAN>)
PARENT

	CHILD
	
		CLICK HERE
		
	DEFAULT : <CAPTURE_BOOLEAN=FALSE>		
		CLICK IN CHILD
				ALERT IN CHILD FIRST, PARENT SECOND

	CHANGE CAPTURE_BOOLEAN TO TRUE
		CLICK IN CHILD
				ALERT IN PARENT FIRST, THEN CHILD
```

FORM VALIDATION
LAB CHALLENGE
IDEA TO BUILD A SIMPLE FORM
1) WITH PATTERN REGEX ON ONE TEXT FIELDS
2) ANOTHER FIELD WITH PLAIN TEXT AND NO REGEX VALIDATION
FORM ONSUBMIT="return validate()"
function validate(){
validateOK = false;
if ( <<< VALUE IN TEXTBOX PASSES
REGEX VALIDATION :
3 NUMBERS - 4 LETTERS >>> )
then validateOK = true
return validatedOK;
}
KEY THINGS TO LOOK FOR : IF VALIDATION FAILS THEN FORM
DOES NOT SUBMIT!!!
EXTRA : USE #element:invalid to style CSS
if failed !!!
#element:valid if passed!!!

MODULE 4 : FORMS
<FORM NAME="MYFORM" ID METHOD="GET/POST" ACTION="URL">
<INPUT NAME= ID=

```
NAME REQUIRED ON SUBMISSION

<LABEL FOR="name">

<LABEL>TEXT
	<INPUT...>
</LABEL>

NOTE : INPUT BOX : IF TYPE IS NOT SUPPORTED THEN FALLS BACK TO TEXT

<DATALIST>
	<OPTION VALUE="X">X</OPTION>
	<OPTION VALUE="Y">Y</OPTION>
	
</DATALIST>

<TEXTAREA COLS="50" ROWS="3" />

<SELECT>
	<OPTGROUP LABEL="X">
		<OPTION VALUE="X1">X1</OPTION>
		<OPTION VALUE="X2">X2</OPTION>
	</OPTGROUP>
```

FORM VALIDATION (4-6)
VALIDATE ON CLIENT AND SERVER

```
WHY ON CLIENT ??? INSTANT  
	
	WHY ON SERVER ???  CLIENT CAN BE HACKED
	
	
REQUIRED : FIELD CANNOT BE EMPTY

	TEXT/URL/TEL/EMAIL/PASSWORD/NUMBER/CHECKBOX/RADIO/FILE/DATE/MONTH/TIME
	
NUMBER   MIN   MAX   STEP

PATTERN="[0-9]{2}"

STYLE 

	INPUT{}
	INPUT:REQUIRED{}
	INPUT:VALID
	INPUT:INVALID
	input:text    just style textbox elements
	textarea      style textarea elements
```

VALIDATING FORM INPUT USING JAVASCRIPT (4-10)
FORM ONSUBMIT=""

```
TO PREVENT FORM SUBMITTING WHEN VALIDATION FAILS

	FORM ONSUBMIT = "RETURN FUNCTIONX()"
	
	
	
LISTEN FOR INPUT : ADDEVENTLISTENER

	IT IS POSSIBLE TO VALIDATE EACH CHARACTER AS IT IS TYPED
	WITH
	
	$('INPUT').addEventListener('input',function(){})
	
	
	
FORM VALIDATION WITH REGEXP

	FORM ONSUBMIT="RETURN VALIDATE()"
	
	FUNCTION VALIDATE(){
		VAR PASSED=FALSE;
		var myRegExp = //
		PASSED = (String(myLongText).search(myRegExp) != -1);			
		RETURN PASSED;		
	}
	
	

		
	
	
	
SET CSS IN VALIDATION

	FORM METHOD="GET" ACTION="" ONSUBMIT="RETURN VALIDATE()"
	
	FUNCTION VALIDATE()
	
		VALIDATED = FALSE;
		
		VALIDATED = (STRING.TEXT(REGEXP))
		
		IF(VALIDATED){
																																														$

	
('INPUT').className="styleMeGreen"
													
													
			ELSE
		
						$('INPUT').className="styleMeRed"
	
		
		RETURN VALIDATED;
```

FORMS, INPUT AND VALIDATION

```
<form id="x" name="x" method="GET/POST" action="URL">
<input..name="y"
<button type="submit">

	GET = >URL.PHP?y=22&z=33&a=hello
	
	POST => URL.PHP 
	
	<?php
	if($_SUBMIT){
		$y = $_POST['y'];
		INSERT y to database using MYSQL
	}
	
	?>
```

Scripting Form Elements
<form name="form1">

```
form1.submit;
form1.reset;

onFocus
onBlur
onChange
onSelect
onMouseover
onHover
onTouch..
onClick
onDblClick 

focus()  SETS THE FOCUS 
<input type="text" autofocus>    AUTO-SET FOCUS ON FORM LOAD
disabled makes form read-only 
<input  type =  date
				number 
				text
<textarea>  
checkbox   onclick 
select     drop-down box 
myListBox.value => value of selected item in list box 
textarea.value ==> text inside text area 

myForm.elements[] is array of all elements of a form
```

Displaying Data from a Form
inputTextBox1.value ==> holds value entered by user in box

```
radiobutton.checked = true/false

checkbox1.checked = true/false 

span.firstchild.nodevalue   may be from label

<input type="text" id="first" name="first" required placeholder="first name" />

<div id="x">
<script>document.getElementById(x).innerHTML="display this"

TEST FOR NULL EG VALIDATION

	if(document.getElementById('id').value===""){}
	if(document.getElementById(id).value==="")
```

Form Validation
validate a field using <input type="text" pattern="">

```
Regular Expression /RegExp/ can do input validation

if (isNaN(textbox1.value)){  REJECT  }

	
	
\\w   match alphabetical or numeric or underscore 

\\s   match whitespace

/g   global 

CAN USE

	a href="javascript:void(0)" onclick="fnValidate"
	
	
	Submitting A Form 
<button type="submit"

or

document.myForm.submit()
```

Preventing A form from submitting
<button type="submit" onsubmit="return fnValidate">

```
function fnValidate(){
	if (valid){
		return true;
	}
	else{
		return false;       
	}
}

EVENT.PREVENTDEFAULT()

	Can also use event.preventDefault to stop submission.

	See example at js_form_validation_03.htm for a working example

CHANGING THE CSS WHEN VALIDATION FAILS

	CAN SET 
	
		JS 		==> CLASSNAME = "FAILEDCLASS"
		JS          CLASSLIST.ADD("FAILEDCLASS")

CHANGE CSS USING INPUT:INVALID PSEUDO CLASS
```

Reset a form to default state
<button type="reset"

```
document.myForm.reset()
```

## Serializing Form Data

Turning form data into a string ready to be sent to the server is called `serializing` and can be done with a command as well

## FORMS

Checkbox Y/N

Radio 

checked is T/F

radiobutton.checked

select  when text is selected

submit

Reset restores default values

Select   can have one or multiple choices

Textarea

Form : onReset, onSubmit, length,

Checkbox : onClick()

Text/Area  onBlur/Focus/Change/Select

Radio : onClick/Checked/name/value

Select = drop-down

document.getElementById("TextBoxID").value   gets the text which is currently in a text box

TextBoxID.disabled=true - disables a text box

ID.focus   gives focus to an element

RadioButton.value  gives text value of Radio Button

RadioButton.checked true / false

List.value   gives text of currently selected list box item

TextArea.value = text in TextArea

onchange

onselect

RadioButtonID.checked = true to set a box as selected

CheckBoxid.checked = true  to check a box

TextAreaID.value = "Text"   sets text in Text Area

prompt() gets value from user

## DOM Capture And Bubble

Capture means the event is fired at the TOP OF THE DOM FIRST, THEN fires in each element until the EVENT.TARGET is reached.

Bubble means event is handled first at the child, then its parent
	then its parent until it bubbles up to the root element.

```js
addEventListener('event',handler_function,capture)
```	
	
TRUE => EVENTS ARE CAPTURED 

FALSE => EVENTS BUBBLE UP TO THE TOP OF THE DOM
			
CAPTURE         TOP => MIDDLE => BOTTOM
	
	RARELY USED

BUBBLE          BOTTOM MIDDLE TOP

	EVENT IN CHILD ALSO TRIGGERS PARENT ALSO
	
	EVENT.TARGET ===> ELEMENT THAT'S ACTUALLY CLICKED IN (THE SOURCE ELEMENT)  ==> THIS REMAINS THE SAME AND DOES NOT CHANGE
	
		THIS ==>  BUBBLES UP TO THE TOP ELEMENT SO CHANGES FROM THE ITEM AT THE BOTTOM THROUGH TO THE ITEM AT THE TOP
		
	EVENT.STOPPROPOGATION()   STOPS THE EVENT BUBBLING UP or 
						OR EVENT.CANCELBUBBLE() IN IE (DEPRECATED)
	
	
	
```html

<div id='div1'>
	Outer div
	<div id='div2'>
		Inner div
	</div>
</div>

<script>
	function capture(e){
		alert('capture at ' + this.id);
	}
	
	
	function bubble(e){
		alert('bubble at ' + this.id);
	}

	var div1 = document.getElementById('div1');
	var div2 = document.getElementById('div2');
	
	div1.addEventListener('click',capture,true);
	div2.addEventListener('click',capture,true);
	div1.addEventListener('click',bubble,false);
	div2.addEventListener('click',bubble,false);
	

</script>
```

## GEOLOCATION

JAVASCRIPT
NAMESPACE
PROBLEM : DUPLICATION EG OF NAMES, VARIABLES ETC
SOLUTION : BLOCK CODE WITHIN NAMESPACE
JAVASCRIPT
var myNamespace {
myFunction1:function(){},
myFunction2:function(){},
var1:'hi',
num1:22
}
CALL WITH myNamespace.myFunction1()
NOTE : PUTS CODE IN PUBLIC NAMESPACE SO BE WARNED!!!
SINGLETON
Special construct to ensure only ONE INSTANCE OF CLASS EXISTS
TWO EXAMPLES
Math.
JSON.
Global Function
parseInt()
CLASSES : DECLARE
function myClass(x,y){
this.x=x;
this.y=y;
this.getArea=function(){return(this.x*this.y;)}
}
: INSTANTIATE A NEW OBJECT
var myNewObject = new myClass(5,6);
CALL METHOD
myNewObject.getArea()
THIS KEYWORD : REFERS TO EACH UNIQUE INSTANCE

```
EXAM TIP : TAKE NOTE
	ANONYMOUS FUNCTION INSIDE FUNCTION DOES NOT HAVE ACCESS
	TO ENCLOSING FUNCTION'S THIS OBJECT
	function myClass(x){
		this.x=x;
		// declare new variable here
		var newValue = this.x;
		var y = function(){
			this.x       	NOT VALID HERE
			newValue	IS VALID HERE
		}
	}
	newValue  NOT VALID IN THIS SCOPE HERE
PROTOTYPE
	Used to add 
		fields (properties)
		methods
		to an existing object AFTER IT HAS BEEN CREATED
	myClass.prototype.field=value;
	myClass.prototype.method=function(){};
	
	ALSO JSON STYLE
	myClass.prototype={
		field:value
		method:function(){}
	}	
	NOTE : CAN ABSOLUTELY EXTEND ALL EXISTING OBJECTS INCLUDING
		PRE-EXISTING CORE JAVASCRIPT OBJECTS 
		SO BEWARE !!! CHECK IF METHOD EXISTS ALREADY OTHERWISE
		YOU COULD OVERWRITE IT!!!
	WHY WOULD WE USE PROTOTYPES???
		MEMORY ALLOCATION
		EXAMPLE
			if method is declared inside original constructor
			then a copy of this method is created for
			each and every instance
		BUT IF A PROTOTYPE IS USED AFTERWARDS
			THEN IN MEMORY A SHARED INSTANCE OF THAT ONE
			METHOD IS CREATED, FOR ALL INSTANCES TO USE
	
ENCAPSULATION
	YOU DON'T WANT TO POLLUTE THE GLOBAL NAMESPACE WITH UNNECCESSARY
	VARIABLES SO HIDE ALL VARIABLES UNLESS REQUIRED
	function myfunction(y){
		//PRIVATE VARIABLE : DELCARE WITH VAR HERE
		var myPrivateVar = ...
		var myPrivateMethod = function(){}
		this.y=y
		// DELCARE PUBLIC
		return myPublicVar;
		or
		return {
			a:..
			myPublicMethod:function(){}
			myPublicMethod2:myPrivateMethod
		}
	}

	myPrivateVar 	NOT VALID HERE
	myfunction.myPublicVar    	valid 
	myfunction.myPublicMethod/2     valid
	var newVar = myFunction()

	
GETTER AND SETTER
	function x(y){
		var privatey;
		this.gety=function(){
			return privatey;
		}
		this.sety=function(param1){
			if(param1<100) privatey = param1
		}
	}
	
INHERITANCE
	DOES JAVASCRIPT HAVE INHERITANCE????  NOT LIKE BASE-DERIVED
		BUT MORE LIKE IMPLEMENTED OOP WHERE A CLASS CAN
		'IMPLEMENT' THE METHODS OF A NON-RELATED CLASS
	var ParentClass=function(a,b){
		this.a=a
		this.b=b;		PARENT CONSTRUCTOR
		this.dosomething=function(){}
	}
	var ChildClass=function(a,b,c){
		this.a=a
		this.b=b;
		this.c=c		CHILD CONSTRUCTOR
	}
	
		CHILD CLASS AT THE MOMENT DOES NOT INHERIT ANTHING
		FROM PARENT CLASS
	// NOW INHERIT
	ChildClass.prototype = new ParentClass();
		(ALSO INHERIT PARENT CONSTRUCTOR)
	// GET CHILD CONSTRUCTOR BACK
	ChildClass.prototype.constructor = ChildClass;

	NOW HAVE ACCESS TO dosomething function
	var newObject = new ChildClass(1,2,3)
		newObject.a   .b   .c   and   .dosomething()   method
APPLY/CALL/BIND
	THIS  BY DEFAULT RELATES TO THE GLOBAL WINDOW OBJECT 
	HOW CALL A FUNCTION BUT MOVE 'THIS' TO BE THE FUNCTION INSTANCE
	APPLY OR CALL OR BIND   ALL DO THIS
	APPLY	 WITHOUT PARAMETERS
		function x(){
			console.log(this)
			this.....	
		}
			THIS ==> GLOBAL WINDOW
		x.apply({a:1})
			THIS  ==> OUTPUT {a:1}
	APPLY WITH PARAMETERS
		function y(a,b){
		
		}
		
		y.apply({id:1},[a,b])	
				[a,b]	INPUT PARAMETERS
	CALL IS THE SAME BUT PARAMETERS ARE WRITTEN DIFFERENTLY
		y.call({<<object>>},a,b)
	BIND 
		PERMANENTLY BINDS THE OBJECT TO THE FUNCTION SO 
		CAN RUN MULTIPLE TIMES
		var boundfunction = myfunction.bind({<<object>>})
		call boundfunction()  AND ALWAYS WILL REFER TO SCOPE
					OF <<object>>
OVERRIDE A METHOD
	note : if inherit from another class then OVERRIDE THE METHOD
		BY REDECLARING IT IN DERIVED OBJECT

	<NOSCRIPT>WARN YOUR USER HERE THAT JS IS DISABLED</NOSCRIPT>
```

JAVASCRIPT : MODULE 7
SCOPE

```
GLOBAL 
	
		OUTSIDE FUNCTION
		
	LOCAL SCOPE (INSIDE A FUNCTION)
	
		VAR X = 2; ANYWHERE IN FUNCTION
		
		even if inside another block of code, the variable is 'hoisted'
		to the start of the function block
		
		
	LOCAL SCOPE (INSIDE A BLOCK OF CODE)
	
		LET DEFINES VARIABLE INSIDE AN ISOLATED BLOCK OF CODE
	
		function x(){
			if(x==2){
				let y=7;
			}
			console.log(y)  ==> undefined
		}

KEEPING YOUR GLOBAL NAMESPACE CLEAN

	USE STRICT;
	
		WON'T DECLARE GLOBAL VARIABLES BY MISTAKE
		

	IMMEDIATELY INVOKED FUNCTIONS IIFE
	
		(function(x){})		==> GETS RUN AT COMPILE TIME AND ANSWER
								PUT IN CODE INSTEAD OF THE FUNCTION ITSELF

			REASON : ANY VARIABLES INSIDE FUNCTION DO NOT EXIST SO 
					CANNOT POLLUTE GLOBAL NAMESPACE
					
	
	
	
	
	NAMESPACE
	
		VAR myNamespace = {
		
			myFunction1:function(){},
			myFunction2:function(){}		
			var1:"hi",
			num1:22
		}
	
	
		CALL WITH myNamespace.myFunction1()
		
		
				==> NOTE : CODE IS PUBLIC SCOPE SO BE WARNED!
				
				
				
	SINGLETON
	
		ENSURES ONLY ONE INSTANCE OF YOUR CLASS EXISTS
		
			Math.
			JSON.
			
	GLOBAL FUNCTIONS
	
		parseInt()
```

CUSTOM OBJECTS (7-6)
var myObj = {}
{"a":1}	OBJECT LITERAL NOTATION
new Object();

```
myObj.x=1;

OBJECT.PROPERTY = VALUE

METHOD

	DECLARE
	
		myObj.method1=function(){}

	CALL
	
		myObj.method1()

		
THIS
	myObj = {
		x:1,
		dothis:function(){this.x=2}
	
	}
	
		THIS.X ATTACHED TO OBJECT IE MYOBJ.X
		
		
		
CONSTRUCTOR

		
	function myClass(x,y){
		this.x=x;
		this.y=y;
		this.dothis=function(){
			z=this.x+1;
			return z;
		}
	
	}
	
	var newObject01 = myClass(10,20);

	console.log(newObject01.x+newObject01.y+newObject01.dothis()
	THIS => REFERS TO THE OBJECT INSTANCE WHICH HAS BEEN CREATED
	
		this.id ==> will return the ID of this object
	

			
	
	
NOTE : anonymous function inside a function does not have access to the enclosing function's this object

		function class(x){
			this.x=x
			var y=function(){
				this.x   NOT VALID HERE
			}
		
		}

PROTOTYPE : ADDING FIELDS TO A CLASS

	PROTOTYPE CAN BE USED TO ADD PROPERTIES AND METHODS TO AN OBJECT AFTER
	IT HAS BEEN MADE
	
	prototype object can be used to extend a given object 
	
	<object>.prototype.field=value;
	<object>.prototype.method=function(){};  
	<object>.prototype={
		field:value,
		method:function(){}
	}
	
	Can think of prototypes as classes
	
		see js_prototype.htm
		

	PROTOTYPE
	

		NEED TO USE THEM BECAUSE WHEN DELCARE NEW OBJECTS WE DECLARE A NEW INSTANCE OF THE METHOD FOR EACH OBJECT ALSO WHICH IS WASTEFUL
		
		
		PROTOTYPE : CAN SHARE METHODS BETWEEN INSTANCES
		
		CONSTRUCTOR
		
		var person = function(name){
			this.name=name;
		}
		
		
		PROTOTYPE : CREATE A SINGLE METHOD TO BE SHARED AMONGST ALL INSTANCES OF THE OBJECT
		
		
		
		person.prototype={
			sayName:function(){
				alert(this.name);
			}
			
		}
		
		
		var bill = new person('bill');
		
		bill.sayName()						==> output 'bill'
		
		
	OBJECT.CREATE   TO APPLY EXISTING PROTOTYPE TO NEW OBJECT
	
	
		USE TO INHERIT PROPERTIES FROM ANOTHER OBJECT
		
		OBJECT.CREATE(PROTOTYPE,PROPERTIES)
		
		A) INHERIT FROM NULL TO SPECIFY ONLY PROPERTIES YOU WANT
		
			OBJECT,CREATE(NULL,{A:"1",WRITABLE:TRUE})
			
		B) INHERIT PROTOTYPE 
		
			OBJECT.CREATE(OBJECT.GETPROTOTYPEOF(BILL));
			
				==> WILL JUST HAVE PROTOTYPE METHOD SAYNAME() AND 
						NOTHING ELSE
						

ENCAPSULATION

	CLOSURE = FUNCTION WITH PRIVATE AND PUBLIC VARIABLES
	PRIVATE HIDDEN
	
	PUBLIC 
	
	FUNCTION X(Y){
		THIS.Y=Y;
	}
						NORMAL CONSTRUCTOR   Y IS PUBLIC
						
						
						
	CLOSURE
	
	FUNCTION X(Y){
		VAR _HIDDEN; 			//PRIVATE
		THIS.Y=FUNCTION(){
			RETURN _HIDDEN; 			Y IS NOW A PUBLIC FUNCTION
		}
	}
	
	
	
	GETTER AND SETTER
	
	FUNCTION X(Y){
		
		VAR PRIVATEY;
		
		THIS.GETY=FUNCTION(){
			RETURN PRIVATEY
		}
		
		THIS.SETY=FUNCTION)(Y){
			IF(Y>100) PRIVATEY = Y
		}
		
	
	}
```

INHERITANCE OF ALL PROPERTIES AND METHODS

```
PROTOTYPE CHAINING

	PROBLEM WITH OBJECT.CREATE : INHERITS PROTOTYPE OBJECTS ONLY
	
		THIS DOES NOT GIVE US ACCESS TO EVERY FIELD THOUGH
		
	
	VAR PARENTCLASS = FUNCTION(A,B){
		THIS.A=A;
		THIS.B=B;
		THIS.DOTHIS=FUNCTION(){};
	}

	
	
	VAR CHILDCLASS=FUNCTION(A,B,C){
		THIS.A=A;
		THIS.B=B;
		THIS.C=C;
	}

	CHILDCLASS.PROTOTYPE = NEW PARENTCLASS();
	CHILDCLASS.PROTOTYPE.CONSTRUCTOR = CHILDCLASS;
	
	VAR X = NEW CHILDCLASS(1,2,3)
		X.A
		X.B
		X.C
		X.DOTHIS()
	
	

PROTOTYPE : ADD FUNCTIONALITY TO EXISTING OBJECT

	
	
	VAR PARENTCLASS=FUNCTION(A,B,C){
		THIS.A=A;
		THIS.B=B;
		THIS.C=C;
	}
	
	
	PARENTCLASS.PROTOTYPE={
		DOTHIS:FUNCTION(){}
	}
	
	
	PARENTCLASS.PROTOTYPE.DOTHIS=FUNCTION(){}
		

APPLYING AN OBJECT TO A FUNCTION

	FUNCTION X(){
		CONSOLE.LOG(THIS)   ==> WINDOW GLOBAL ELEMENT
	}
	
	
	X.APPLY({A:1})			==> RUNS FUNCTION AND OUTPUTS {A:1}
	
	
APPLY WITH PARAMETERS

	FUNCTION X(PARAM1){
		CONSOLE.LOG(THIS)			==> WINDOW GLOBAL
		CONSOLE.LOG(PARAM1)			
	}
	
	X.APPLY({A:1},[VALUE1])				==> RUNS X AND OUTPUTS {A:1} 
													AND VALUE1

CALL WITH PARAMETERS

	FUNCTION X(PARAM1,PARAM2,PARAM3){
	}

	SAME THING BUT 
	
	X.APPLY({A:1},[1,2,3])
	X.CALL({A:1},1,2,3)
```

EXTRA : OVERRIDING A METHOD
Can use prototype to cause a class to inherit

```
function A(){}
A.prototype.method01 = function(){}

function B(){}
B.prototype=new A()   ==> now inherit method01

But now can override A's method01 with 

B.prototype.method01 = function(){}
```

MODULE 8 : HTML5 API
FILES
VIDEO
AUDIO,
GEOLOCATION
DEBUG

FILES
4 WAYS TO INTERACT WITH FILES

```
BLOB		BINARY OBJECT DATA
	
	FILE		METADATA ABOUT A FILE
	
	FILELIST	LIST OF FILES
	
	FILEREADER	GET DATA
```

USERS UPLOAD FILE

```
BUTTON 

	HTML INPUT TYPE="FILE"
	
		 INPUT TYPE="FILE" NAME="FILES[]" MULTIPLE
	BROWSE BUTTON
	
		ONCHANGE=""
	
	
DRAG 

			DIV ON PAGE

					ONDROP=""  			DROP FILE ONTO PAGE EG EBAY IMAGE
```

FILEREADER
READASTEXT()

```
OUTPUT CONTENTS OF TEXT FILE

READASDATAURL()
		
					READ AN IMAGE FILE AND ASSIGN THE FILE AS THE SOURCE
						TO AN IMAGE ELEMENT TO DISPLAY THE IMAGE
```

DRAG AND DROP
FROM

```
HTML DRAGGABLE=TRUE
	IMG DRAGGABLE=TRUE
	
	ONDRAGSTART=FUNCTION(EVENT){}
	
		SET DATA 
		
				EVENT.DATATRANSFER.SETDATA("TEXT",EVENT.TARGET.ID);

TO
	HTML 
	
	ONDRAGOVER
	
		CHANGE THE IMAGE OF THE CURSOR TO APPEAR THAT A DROP IS POSSIBLE
		
			EVENT.PREVENTDEFAULT
			
			BY DEFAULT WILL CHANGE ANYWAY BUT A CUSTOM IMAGE CAN BE SET
			
			SETDRAGIMAGE(IMAGE,X,Y)
			
			EFFECTALLOWED : COPY, MOVE, LINK
			
				EVENT.DATATRANSFER.DROPEFFECT="COPY"
			
			
	ONDROP
	
		EVENT.PREVENTDEFAULT
		
		GET THE DATA STORED IN THE 'SETDATA' ITEM
		
			VAR DATA = EVENT.DATATRANSFER.GETDATA("TEXT");
			EVENT.TARGET.APPENDCHILD(DATA);
			
			
			
	

FILE TYPES

	TEXT/PLAIN
	TEXT/HTML
```



## Audio

Codec

Codec is short for ENCODE / DECODE and is used to mean the art of taking a video or audio file, saving it for use as a single file (ENCODING) and then playing it back again on demand (DECODING).  A CODEC is a means of doing this ie different CODECS are used on different platforms to produce the same result ie to play the file

Compression

Is the art of making a file smaller

Data compression uses various techniques to reduce the size of data blocks

Video/audio/image compression may or may not reduce the image quality

Lossy WILL LOSE DATA (FOREVER!) eg BMP => JPG, WMA => MP3, WMV => MP4

Lossless means that ALL THE DATA IS SAVED even though the file takes up less space  EG WMA => M4A

        
```html
<audio preload="auto/none" controls autoplay autoloop metadata canplaytype(type) currentTime duration play() pause()></audio>
```

```js
function playAt(seconds){
var audio = document.getElementsByTagName("audio")[0];
audio.currentTime=seconds;
audio.play();
}

function restart(){
var audio = document.getElementsByTagName("audio")[0];
audio.currentTime=0;
audio.play();
}
```

```html
<audio controls="controls">
<source src="BuffaloChickenDip.mp3" />
Your browser does not support the audio element.
</audio>
<button title="Play at 15 seconds" onclick="playAt(4.5);" >4.5
Seconds</button>
<button title="Restart Audio" onclick="restart();">Restart</button>
```


## Video

- src multiple src elements can be used to define the file to be used to play the video.  The browser will use the first valid source file that it can play.
- width,height of the video
- controls : if present then the play/pause/forward/rewind controls are visible on the screen for the user to use
- poster : image to display while the initial video is downloading so the user is not staring at a blank screen but has something to look at 
- autoplay : automatically begins playing once the video has buffered (annoying adverts on pages do this also!)
- muted
- loop
- play
- pause
- paused
- preload = auto/none/metadata ie when the page loads, load either the full video, nothing or just the metadata
- seeking
- volume
- fullscreentoggle
- captions/subtitles
- track
- playbackrate()
- volume()
- paused()   boolean
- duration()
- currenttime()	
 
 
 ```html
<video width="320" height="240" controls="controls" poster="FrenchLesson1.png">
<source src="travelVideo1.mp4" type="video/mp4" />
<source src="travelVideo1.ogg" type="video/ogg" />
Your browser does not support the video tag.
</video>
```

Video events

1) LOADEDMETADATA EG LENGTH OF VIDEO
2) LOADEDDATA  FINISHED BUFFERING AND READY TO PLAY
3) TIMEUPDATE  SENDS TIME


            
        




```
VIDEO

	SRC
			WILL PLAY THE FIRST MATCH IF MULTIPLE ARE SPECIFIED
	
	TYPE="VIDEO/MP4"
	
		MP4
		OGG
		WEBM
	
	WIDTH
	
	HEIGHT
	
	POSTER = IMAGE WHILE LOADING
	
	CONTROLS : WHETHER VISIBLE OR NOT
	
	AUTOPLAY : AUTOMATICALLY START PLAYING ONCE BUFFERED
	
	LOOP : FOR EVER
	
	MUTED : NO AUDIO
	
	<VIDEO>TEXT GOES HERE IF VIDEO CANNOT PLAY</VIDEO>

JAVASCRIPT

	VAR MYVIDEO = DOCUMENT.CREATEELEMENT
	MYVIDEO.SRC=""
	$('#PARENT').APPEND(MYVIDEO)
	DOCUMENT.GETELEMENTBYID("PARENT").APPENDCHILD(MYVIDEO)
	
	MYVIDEO.PLAY()
	MYVIDEO.PAUSE()
	
	EVENTS 
		LOADEDMETADATA			CAN GET DURATION
		LOADEDDATA				CAN NOW PLAY
```

HTML AUDIO
CONTROLS
AUTOPLAY
LOOP

```
AUTOPLAY
VOLUME
PLAYBACKRATE
```

GEOLOCATION (8-12)
Geodata is to do with location

```
Geodetic data is a reference point from which measurements are made, in this case one's position on the earth

NAVIGATOR OBJECT HOLDS GEOLOCATION DATA

	CAN USE 
	
		IP
		WIFI
		GPS
		4G 

GETCURRENTPOSITION(FUNCTION(POSITION){})				ONE TIME SEARCH
	
	window.navigator.geoLocation.getCurrentPosition(function(position){
		var latitude=position.coords.latitude;
		var longitude=position.coords.longitude;	
	});
	
	
	
		POSITION.COORDS.LATITUDE/LONGITUDE/ALTITUDE/SPEED/HEADING
	
	
	
WATCHPOSITION(FUNCTION(POSITION){})

	CLEARWATCH()
	
	
	
	
ALLOW FOR SUCCESS AND FAILURE 

	navigator.geolocation.getCurrentPosition(gotPositionSuccess,gotPositionFailed);
	
	
	
OTHER FIELDS

	ENABLEHIGHACCURACY
	TIMEOUT(MS)
	MAXIMUMAGE(MS)   BEFORE DATA IS OUT OF DATE
```

PAGE VISIBILITY
CHECKS IF A PAGE IS VISIBLE OR NOT (USER IS LOOKING AT IT)

```
DOCUMENT.HIDDEN
	
		FALSE
		
	VISIBILITYSTATE : VISIBLE OR PREVIEW
		
	VISIBILITYCHANGE EVENT
```

ONLINE OR OFFLINE
NAVIGATOR.ONLINE

```
IF(NAVIGATOR.ONLINE){} ELSE {}
	

ONLINE EVENT WHEN COMES ONLINE

	WINDOW.ADDEVENTLISTENER('ONLINE',FUNCTION(){})

OFFLINE EVENT WHEN GOES OFFLINE

	WINDOW.ADDEVENTLISTENER('OFFLINE',FUNCTION(){})
```

## Navigator

```js
Navigator.userAgent => details about browser
navigator.appCodeName gives the name of the client browser
navigator.appName gives the name of the browser
navigator.cookieEnabled returns if cookies enabled or not
navigator.getUserMedia accesses audio, video, webcam hardware of the end user
```
See https://jsfiddle.net/philanderson888/z6p5fqga/ and https://jsfiddle.net/philanderson888/3f9k11gh/



## performance

```js
WINDOW.PERFORMANCE.NAVIGATION
// HOW DID USER NAVIGATE TO PAGE
WINDOW.PERFORMANCE.TIMING
```


## Storage

HTML is a STATELESS PROTOCOL

  it does not have any 'memory' of previous page visits

Persistence = STORING DATA BETWEEN CLICKS

Storing Data Between Clicks - The 'State' Of The Application or Session

Persistence is the ability to store data

Data can be stored on the SERVER and the CLIENT!

HTML

  Stateless protocol : does not have any inherent 'memory' of previous page visits

Look at

  1. Cookies
  2. Session Cookies
  3. Application State
  4. Local Storage

  
## Cookies

    SMALL TINY PIECES OF DATA
    
    4kb max

    SENT WITH EVERY PAGE REQUEST 

    DATA ACCESSIBLE BOTH BY CLIENT AND SERVER

      document.cookie = "username=John Doe";

      document.cookie = "username=John Doe; 
            expires=Thu, 18 Dec 2013 12:00:00 UTC";

      SESSION COOKIE HAS NO EXPIRY DATE; VALID FOR THIS SESSION ONLY

    ((COOKIE/SESSION DATA ==> VALID FOR ONE USER ONLY))

    Example at http://jsfiddle.net/user/philanderson888/fiddles/

## Local Storage

    FOR LARGE FILES WE WANT A WAY OF STORING DATA ON LOCAL CLIENT MACHINE

    5MB PERMANENTLY ON CLIENT

    localStorage.setItem("lastname", "Smith");

    localStorage.lastname

    localStorage.getItem("lastname")

  ## Session Storage

    
    same as local storage, destroyed after session

    sessionStorage.setItem("lastname", "Smith");

  Browser Cache (temporary internet files)

    Files downloaded eg CSS, Javascript can be stored in client cache for
        later use

## Cookies

Cookies are small text files which can be used to transmit data between the client and the server which reflect the state of the session or application.
Small file size (4kb)
Sent with every HTTP request
Can be accessed by both client and server code

Cookies are tiny (4kb max) pieces of text data

They are SENT WITH EVERY HTML REQUEST

create with

document.cookie="username=Phil";

  ((store data as key/value pair))

  IF NO EXPIRY DATE ==> SESSION COOKIE : DELETED WHEN YOU FINISH
    USING THIS SITE

expires="18 Dec 2017";

  THIS COOKIE NOW LAST UNTIL THAT DATE




## HTML5 localStorage

Local storage is the ability to store files and data permanently on the client machine.  
This is fully persistent ie it has no time span after which the data will expire, 
so in that sense the data is permanent although if the client clears their cache and temporary 
storage areas out which they are more than welcome to do at any stage, the data will be erased.
Can only be accessed by client browser code
Can timestamp and purge items from local storage cache in order to manage space effectively
Lab - Code on PDF : does your browser support local storage???

Up to 5MB max

localStorage.setItem("firstName","phil");
            

Get data (next time)

  localStorage.getItem("firstName");   ==> return "phil"

Shorten this

  localStorage.firstName   ==> return "phil"

HTML5 Session Storage

Same exists just for one session

sessionStorage.setItem..
              .getItem..    same syntax

Note : BROWSER CACHE WILL ALREADY STORE EG IMAGES, GIF, STYLESHEETS, JS, FROM 
  YOUR SITE ANYWAY ***********

Application State

The data pertaining to the application as a whole for all users

## Session State

The data pertaining to one user after they log in, relevant for that user for that logged in 'session' until they either log out or they stop using the application in which case after a certain time span the session will automatically log them out and the session data will cease to exist.
Storing Data Permanently On The Client Device




## cookie

```js
document.cookie="name=value"

Set-Cookie : name = value; expires = date; path = path; domain=domain; secure
```

EXPIRES
	
		MUST SET EXPIRY DATE IF WANT TO CLEAR THE COOKIE AT SOME POINT
		
		IF DON'T SET EXPIRY DATE IT WILL ONLY BE CACHED FOR THIS SESSION

	300 max 
	
	20 max per domain 
	
	4kb max size
	authentication, data, state maintenance
			
	<https://jsfiddle.net/philanderson888/d7zrqo30/>

	COOKIE STORED AS AN ARRAY OF STRINGS
	
		join will join elements of an array together as one long string separated by a given character eg a space or comma 
	

	
	
Session Storage
	same as local storage but just for one session; 
	
	sessionStorage.setItem('key','value');
	sessionStorage.getItem('key');
	sessionStorage.removeItem('key');
	
	ALSO
	
	sessionStorage.a=1;
	sessionStorage.key='value'
	var x = sessionStorage.key;

	SESSION.STORAGE.LENGTH = NUMBER OF ITEMS STORED
	
	KEY(0) IS FIRST KEY SO CAN ITERATE OVER FOR..LOOP TO OBTAIN ALL SESSION KEYS AND DATA
	
	
	
	
	SESSIONSTORAGE.CLEAR()   	MANUALLY
	
	
	

	JSON DATA SHOULD BE STORED AS A STRING SO DO JSON.STRINGIFY BEFORE STORING

Local Storage

	Also called web storage
	5MB limit
	Stored per domain (called 'per origin')
	
	localStorage.setItem('a','value');
	localStorage.setItem('key','value');
	localStorage.getItem('key');
	localStorage.removeItem('key');
	
	ALSO
	
	localStorage.key='value'
	var x = localStorage.key;
	
	
			localStorage.length
			
			for...      {localStorage.key(i)}
	CLEAR
	
		localStorage.clear()
		
		
			
STORAGE EVENT

	BOTH SESSION STATE AND LOCALSTORAGE SHARE THE SAME 'STORAGE' EVENT WHEN
		DATA IS STORED
		
		
		WINDOW.ADDEVENTLISTENER('STORAGE',FUNCTION(EVENT){})
			EVENT.KEY = WHAT HAS CHANGED
			EVENT.OLDVALUE
			     .NEWVALUE
				 .STORAGEAREA   =  SESSION OR LOCAL
				 

localstorage can be accessed only by browser
localStorage clear();
localStorage getItem(key)
localStorage persists between tabs
localstorage persists in the local browser file cache
LocalStorage provides up to 10MB of local storage
localStorage removeItem(key)
localStorage setItem(key,value)
localStorage setItem(key,value) / getItem(key) / removeItem / clear


## location

location is current URL

```js
location.assign loads a new document with the new URL
location.hostname            myhost
location.href is the current URL
location.path   c:\\wwwroot\\...
location.port   80 or 443
location.protocol   http  https
```




## websockets
```

WEB SOCKETS (MODULE 13)
ALLOW INSTANT HTTP COMMUNICATION WITHOUT THE HEADERS BEING SENT EACH TIME

```
WINDOW.WEBSOCKET => RETURNS TRUE IF BROWSER SUPPORTS

WS:
WSS:

CREATE 

	var mysocket = NEW WebSocket('ws://URL')
	
	
TEST FOR READINESS
	
readyState

	0	CONNECTING
	1	OPEN : ESTABLISHED
	2	CLOSING
	3	CLOSED
	
while (mysocket.readyState != 1){

}
or

mysocket.onopen=function(){
	
}

or
mysocket.addEventListener('open',function(){

})

SEND 

	mysocket.send('message here');
	
	
SEND DATA TYPES
	
	1) STRING
	
	2) BLOB EG FILE
	
		var file=document.querySelector('input[type="file"]').files[0]
		mysocket.send(file)
		
	3) BUFFER
	
	
	
bufferedAmount => amount of data still to send in bytes	
	
	
	
	
	
socket.onerror=function(event){//event.data}   if disconnect

socket.close()
socket.close(1000,'reason')

RECEIVE MESSAGE

	mysocket.onmessage=function(event){
		event.type
				TEXT		==> event.data is STRING
	}
	
	
	mysocket.binaryType
		BLOB
		BUFFER
```

WEB WORKER (MODULE 14)
SINGLE THREAD : CAN GET BLOCKED

```
PAGE (MAIN THREAD)

	WORKER 
	
		HAS NO ACCESS TO DOM OR PAGE ELEMENTS
		
		'GLOBAL' SCOPE IS LOCAL TO THIS PAGE
		
			CAN MAKE AJAX CALLS
		
		CAN ONLY COMMUNICATE VIA MESSAGES WITH PARENT
		
		DEDICATED WORKER : ONE PAGE ONLY
		
		
		
USES OF WEB WORKERS

	SLOW I/O EG READ LARGE FILE
	
	HIGH CPU INTENSIVE 
	
	MASTER WORKER 
		CHILD WORKERS USE DIFFERENT THREADS
		
		

SUPPORTED

	typeOf(Worker) != 'undefined'
	
	
	
	
CREATE

	var worker = new Worker(abc.js)
	
	

	
SEND MESSAGE

	worker.postMessage('my message');
	
	

	
RECEIVE MESSAGE

	worker.onmessage=function(){}
	
	
TERMINATE

	worker.terminate()		FROM PARENT
	
	self.close()			FROM WORKER
	
				THIS CAN BE SET TO DIFFERENT OBJECT
IN WORKER

	onmessage=function(event){//event.data}
	
	postMessage('abc')
	
	self.postMessage()
	
	CREATE EVENT HANDLER
		self.addEventListener('message',function(){})
		
	
	
CHECK FOR ERRORS IN PARENT PAGE

	worker.addEventListener('error',function(event){//event.data})
```

Web Worker
Parent

```
var worker = new Worker('abc.js');

	worker.postMessage({"field1":"message1"});   ==> SEND MESSAGE TO WORKER
												AS STRING OR JSON

	worker.onmessage = function(e){ alert('message ' + e.data);};  
									==> GETTING MESSAGE BACK FROM WORKER
									
	worker.terminate();

Worker

	In abc.js   worker file
	
	onmessage=function(e){console.log(e.data.field1);}  ==> RECEIVE A MESSAGE

		EXAM E.DATA !!!

	postMessage('hello')   ==> send a message
	postMessage({'field2':'message_returned'});

	self.onmessage...   is valid
	self.postMessage... is valid
	NOTE : worker file has NO ACCESS TO PARENT PAGE VARIABLES DIRECTLY INCLUDING DOM PAGE ELEMENTS OR CLIENT JAVASCRIPT VARIABLES!!!!  ANY VARIABLES IT USES HAVE TO BE PASSED TO IT AS PARAMETERS!!!!
```

RegExp Regular Expressions
Used to set a pattern in order to search and validate strings and user input

```
var myRegExp = /pattern/modifier

	var mypattern = /searchterm/i
	
				i = case insensitive
				g = global
				m = multiline
				
	var mystring = "This is some long text"
	
	var indexOfMatch = mystring.search(/long/);
	
		Will return 13 as the index where 'long' is found in mystring
		
Use with search() and replace()

<http://regexr.com/>

<http://www.regular-expressions.info/>
```

RegEx Regular Expressions RegExp.IsMatch(string,findmeinstring);
IsMatch
Regex [a-zA-Z0-9_] permits all lower, uppercase, numbers and underscore character
PATTERN="[A-Z]{2}[0-9]{3}" TITLE="PLEASE ENTER 2 UPPER CASE + 3 DIGITS"
START WITH ^ ==> MEANS 'START'
% ==> MEANS 'END'
[0-9]+ MEANS AT LEAST ONE ITEM BUT JUST HAS TO BE CONTAINED
^[0-9]+ ONLY PERMITS ONLY THIS
REGEX /^ %/

```
17
	\\D{4}   DIGITS, 4   but ABC1234 IS VALID
	^\\d{4}$  ONLY 4 DIGITS 1234
	/b{2}/g   ONLY 2 b present anywhere
	
		test => one hit
		match => all hits
	/^[abc]..........not finished
		{1,5}   at least one digit, up to five digits
		
		{5,}	AT LEAST 5 DIGITS

18
	REGEX
		A   LETTER A
		A?  OPTIONAL A
		A*  A : ZERO ONE OR MORE
		A+  A : ONE OR MORE TIMES
		.  ANY SINGLE CHARACTER
		[xyz]  x or y or z
	^[]$   start / end of input
	[^a]  not a
	w = word
	W = NOT WORD
	s white space
	S NOT WHITE SPACE
	/^   START OF INPUT       
		END OF INPUT    $/		
		
		
	TO PERMIT WHITE SPACE
	
	/^\\s*               \\s*$/
	
	
	TO PERMIT PLUS OR MINUS SIGN IN A NUMBER
	
	/   (\\+|-)?  /
	
	
	TO PERMIT DIGIT
	
	/    \\d     /
	
	
	
	PUT ALL TOGETHER
	
	/^\\s*(\\+|-)?\\d+\\s*$/
		
		
	
	
	TO FORCE TEXT TO BE PRESENT
	
	\\s is whitespace
	
	[^\\s] is not whitespace
	
	[^\\s]{1,}   requires minimum one characters to be non-whitespace
```

Websockets
websocket API full duplex comms without polling ie clicking

```
WebSockets are like XMLHTTPRequests but create a permanently open connection to the server (full duplex) rather than serve requests

websocket API provides full duplex communication over a single TCP channel to allow messages to be sent direct to the server without having to 'poll' the server ie click a button...

Socket

	Is the object which is created to handle 2-way communications
	
		ws://
		
		wss://
	
	var socket = new WebSocket("wss://URL");
	
Events

	open      onopen
	
	
		websocket.onopen
	
	
	message   onmessage
	
		websocket.onmessage=function(data){}
		
	send
	
		File types
		
			binary data var file = document.querySelector('input[type=”file”]').files[0];  socket.send(file);

	
		websocket send text data socket.send('message');
		
		
		
	close     onclose
	
		socket.onclose=function{}
```

Javascript Function with => Lambda
Lambda functions are always anonymous (not named)

```
Lambda functions are a shorter way of writing a function

function syntax

	function(){}
	
lambda syntax

	() => {}
	
	
Passing parameter

	function syntax
	
		function(a,b,c){}
		
	lambda syntax
	
		(a,b,c)=>{}
		

Passing one parameter

	brackets on left hand side are optional
	
		function(a){}
		
		becomes
		
		a => {}
		
		
		
Passing default parameters
	
	function syntax
	
		function(a=1,b,c){}
		
	lambda syntax
	
		(a=1,b,c) => {}
	
	
Returning a value 

	function syntax
	
		function(){ return x }
		
	lambda syntax
	
		() => x
		

Returning a LITERAL (STRING)

	function syntax
	
		function() { return {"a":1} }
		
	lambda syntax
	
		() => ({ "a" : 1 })
```

Reference VS Value Types
Value Types are simple objects eg number

```
COPY = A SEPARATE INSTANCE

Reference Types are complex types eg array, object
	COPY = SHORTCUT TO SAME INSTANCE 
	
		BEWARE!!!
```

Creating Read Only Variable
See [http://www.w3schools.com/js/js_strict.asp](http://www.w3schools.com/js/js_strict.asp)

```
For example

var myObject = {};
Object.defineProperty(myObject, "property1", {value:50, writable:false});
	this creates myObject.property1 = 50;  
	
or

var obj = {get x() {return 0} };
```

</STYLE>

# Javascript Dictionary

```jsx

	Bulma is a CSS framework based on Flexbox. This makes the placement and responsiveness of elements really easy.  It's also got a very simple class-naming scheme, similar to bootstrap, which makes creating different flavours of the same item very quick indeed.
	API with HAPI/Mongo/Node/GraphQL/Swagger https://medium.freecodecamp.org/how-to-setup-a-pow…
	Apollo replaces redux 
	Artwork : Zeplin : collaborative design with free licence [https://zeplin.io/why-zeplin](https://zeplin.io/why-zeplin)
	Async....await...
	Babel is amazing 
	Babel just changes the syntax only which is transpiling 
	Browserstack paid test site on 2000 platforms 
	Chrome dev tools . Media tab . Hard refresh of website. Reload site from 
	Cloudflare can is free to start 
	Corejs 
	domains : .ok
	domains : .tech 
	Facebook pixel ad tracking but beware of ad blockers
	Fake data generator : Mockaroo [Mockaroo](https://www.mockaroo.com)
	Fifo bottle upside down 
	fixer.io
	Flutter : Build dual IOS and Andoid apps https://flutter.io/get-started/codelab
	Formdata api conveys your form into an object 
	Github and HTTPS https://blog.github.com/2018-05-01-github-pages-cu…
	Go https://medium.freecodecamp.org/how-to-write-bulle…
	Go.tech 
	Google Flutter https://deanchalk.com/why-im-giving-up-everything-…
	GraphQL
	GraphQL : build API
	Gzip compresses duplicate content 
	HAPIJS
	Heroku 
	Htaccess redirect 
	iaas
	Icon to display when people bookmark your site 
	Image optimisation : Cloudinary image optimum
	Image optimisation : Imagemin 
	Image optimisation : Mozjpg
	Image optimisation : Svgo 
	Indie - small, independent project without funding or backing from large organisations
	Intersection observer tells when an item comes on screen from the DOM 
	Javascript Libraries : Top ones : Underscore, Lodash, Moment https://blog.bitsrc.io/11-javascript-utility-libra…
	Learn coding : [30 Days Of Code](https://www.hackerrank.com/domains/tutorials/30-days-of-code)
	Lighthouse in dev tools
	Lodash
	Minify code
	Mockaroo : fake data generator [Mockaroo](https://www.mockaroo.com) is a random data generator at [https://www.mockaroo.com/](https://www.mockaroo.com/)
	MomentJS
	Mongo Stitch : Create a Mongo Stitch ToDo App https://docs.mongodb.com/stitch/tutorials/?_ga=2.1…
	Mp4 only load after page load
	Nom package lock 
	Noordvpn/darknet. Promo darknet 3 years 
	openldap
	openvpn
	Page speed trst 
	Performance issues
	Progressive framework eg Vue can happily coexist alongside other frameworks
	Polyfill is new addition to language e.g. . Scroll and promises 
	Polyfill.io can detect browser and just Lord what is needed 
	Polyfills from mdn 
	postcodes.io
	Preset env 
	Productivity : Do the thing that terrifies you once!!! https://medium.com/the-mission/tell-me-what-you-di
	Productivity : Lose an hour and you will spend all day looking for it
	Productivity : Managers get others to do the work
	Productivity : Plan tomorrow today!!!
	Productivity : Read : Peak State Checklist https://d2saw6je89goi1.cloudfront.net/uploads/digi…
	Productivity : Read books!!!
	Productivity : Visualise goals at bedtime; write https://medium.com/the-mission/this-10-minute-rout…
	Productivity : Wake up early
	Productivity : What if you only had today left to live? This week? This month? This year?
	puppet
	React suspense 
	Resize observer when stuff resized 
	Robots.  Txt prevent indexing 
	Salts - always use a new salt per password. Salts do not have to be kept secret and can be stored alongside the hash itself.
	scala
	Sentry.io gives proper logging of your site e.g. browser in use etc    tadtytreat code gives 2 months free 
	Service worker - Don't run service workers on launch 
	Shopify
	Split code so only load when ready 
	Style,css?v=27      force a reload of css on client site 
	Swagger
	Teaching tool : Scrimba.com https://scrimba.com/c/cKp6LhL
	terraform
	Transpile Babel 
	Transpile is for new syntax 
	Transpile makes code downgraded 
	Underscore
	WebGazer.js
	Website : Do a soft launch before site is due to go live 
	Window.onscroll
  DateTime
  Debounce
  PNPM
```


## jQuery

[jQuery](notes/jquery.md)



## Array
		
```js
var x = [1,2,3];
x.push("first item");     ADDS FIRST ITEM TO ARRAY 
x[1]="second item";
iterate with for loop (preferred for speed) or foreach loop 
console.log(process.env.PATH.split(';').forEach(function(dir){console.log(dir);}));

FOR(var i=0;i<myarray.length;i++){ code [i]}
a = [ 1, 2, 3];
a.forEach(function (v) {
    console.log(v);
});
	
Object 	
	var x = {};         BLANK OBJECT 
	
	x.field1="value1";   MANUALLY ADDING FIELD 
	                     ENTRIES TO OBJECT 
	x.field2="value2";
	
	
	var x={
	  field1:"value1",
	  field2:"value2"
	}
	
	
	for (var item in x){
		if(x.hasOwnProperty(item)){
			console.log(item + " has value " + x[item]);
		}
	}
	
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
	
```	
	
## PASSING PARAMETERS
		
```javascript	
	function doThis(x,y,z)  {
		alert ('hello');
		alert(x);
	}
	doThis(x,y,z);
IF..ELSE IF..ELSE
	if(a==1){}
	else if (a==2){}
	else{}
	
	
	
	
DO..WHILE LOOP
	x=0;
	do{
	code;
	x++;
	}
	while(x<10);
WHILE LOOP
	x=0;
	while(x<10){
	code;
	x++;
	}
FOR LOOP
	for(var i=0;i<10;i++){}
	
	
FOR..IN  
	EQUIVALENT OF FOREACH
	
	for (var item in myArray){
		if(myArray.hasOwnProperty(item)){
			console.log(item);
		}
	}
	
		See node_89_json.js
	
	
	
FOREACH
	a = [ 1, 2, 3];
	a.forEach(function (v) {
		console.log(v);
	});
			js_28_foreach_loop_01.htm
			js_28_foreach_loop_02.htm
			js_28_foreach_loop_03.htm
			
	
	
Equivalent of string.format
	
		console.log("x is %d and y is %s", 1,"string");
		
		
```	

## Object Orientated Programming


Keep in mind that there will be patterns in this table that reference the concept of "classes". JavaScript is a class-less language, however classes can be simulated using functions.
The most common approach to achieving this is by defining a JavaScript function where we then create an object using the new keyword. this can be used to help define new properties and methods for the object as follows:

```js
// A car "class"
function Car( model ) {    
    model = model;
    this.color = "silver";
    this.year = "2012";
    this.getInfo = function () {
    return this.model + " " + this.year;
};
```    
	  
We can then instantiate the object using the Car constructor we defined above like this:

```js
	var myCar = new Car("ford");
	 
	myCar.year = "2010";
	 
	console.log( myCar.getInfo() );
```

## Classes

```js	
class x {
    constructor(height, width) {
    this.height = height;
    this.width = width;
    }
    getArea(){
    return this.height*this.width;
    }
}
```
			
	
## dependency injection
	
DI Dependency Injection is the opposite of top-down inheritance

	Inheritance 
	
		Parent
		
			Child
			
Dependency Injection
	
```js
function1(function2passedin(){}){}
```

dynamic dependency injection : type of function2 is not known until run time
			

## try.catch.finally


	
	
TRY..CATCH..FINALLY 
	SYNCHRONOUS CODE ONLY ==> NOT CALLBACK CODE!!!
	TRY{}
	CATCH(e){
		console.log(" error " + e);
	}
	
	FINALLY{}
				
	
	
		CATCH EG FILE_NOT_FOUND, DIVIDE_BY_ZERO ==> OPERATION IN JAVASCRIPT WHICH
					GIVES RUNTIME ERROR 
					
					
					
## async
	
	
		
ASYNCHRONOUS CODE - ERRORS AND CALLBACKS 
	FUNCTION X(input_parameters, callback(error,x,y,z){
			if(error){
				/handle error
				return;
			}
			code x,y,z
			
	})
	CALL X 
		
	DO OTHER STUFF AS WELL ..
		
	WAIT FOR CALLBACK TO RESPOND 
						
						
	WHEN RESPOND 
						
		2 OPTIONS
							
			1) ERROR ==> HANDLE IF IF(error){  LOG  }
								
			2) NO ERROR ==> PROCEED 
	
## map

Map stores key-value pairs

```js
	
var x = new Map();
x.set("a","first letter");
x.set("b","second letter");
x.set("c","third letter");
x.get("c");

for(var key of x.keys()){
	console.log(key + " has value \"" + x.get(key) + "\"");
}
```


## page load

1. skeleton structure
2. fuzzy images
3. full content


## Delete

```js
const myObject = {
	property01 : 'test',
    property02 : 'testing'
}

delete myObject.property02

or

delete myObject['property02']
```

## classList

Can be used to add a class to a list of existing classes.

```js
classlist.add('className')
```

```js
// make this the active class
document.querySelector('classname').classList.add('active');
```

## forEach

Set a listener on each element which matches the CSS class

```js
document.querySelectorAll('.chess-block').forEach(element => {
    element.onclick = horse;
})
```

## Object.seal()

This prevents properties being added or removed to an object

```js
const myObject = {}
myObject.property01 = 'test'
Object.seal(myObject)
myObject.property01 = 'testing2'
// cannot do
myObject.cantAddThis = 'some value' 
// cannot do
delete myObject.property01
```

## Object.freeze()

cannot change value of properties

## Object.preventExtensions()

cannot add properties

## querySelectorAll

Generates a collection of elements which each match the required criteria

```js

document.querySelectorAll('.chess-block').forEach(function(element) {
        element.onclick = horse;
    })

```

## scope

- global 
- function
- local

also

- Lexical scoping

value determined by position when written

- Dynamic scoping

value determined by position when called at runtime

## Javascript Switch

```js
const a = 2
switch(a) {
  case 1:
    //handle case a is 1
    break
  case 2:
    //handle case a is 2
    break
  case 3:
    //handle case a is 3
    break
  default:
    //handle all other cases
    break
}
```

## Or just 'return'

```js
const doSomething = (a) => {
  switch(a) {
    case 1:
      //handle case a is 1
      return 'handled 1'
    case 2:
      //handle case a is 2
      return 'handled 2'
    case 3:
      //handle case a is 3
      return 'handled 3'
  }
}
```

## Javascript If..Else

```js
if (a === true) {
  //do something
} else if (b === true) {
  //do something else
} else {
  //fallback
}
```





## document.querySelector

Use in preference to document.getElementById   ???

```js
document.querySelector('#field').innerHTML = '';
```

## Set A Listener

Set multiple listeners

```js
function doThis(){}

// add listener
document.querySelectorAll('.chess-block').forEach(function(element) {
        element.onclick = doThis;
    })

```

## classList.remove

Can be used to remove CSS classes from an item

```js
// remove CSS classes on all selected elements

document.querySelectorAll('.chess-block').forEach(function(element) {
        element.classList.remove('active');
        element.classList.remove('green');
    })
```

## getPropertyValue

Can be used to query a CSS value

```js
// CSS

:root Block of constants */

:root {
    --x-width: 8;
    --y-height: 8;
}

// JS

let horizont = styles.getPropertyValue('--x-width');
let vertical = styles.getPropertyValue('--y-height');

// This can be used to create a grid of elements using the values above

// CSS

#field {
    display: grid;
    grid-template-columns: repeat(var(--x-width), 1fr);
    grid-template-rows: repeat(var(--y-height), 1fr);
    width: 100%;
    height: 100%;
}
```

## getAttribute

```js
// Can be used to read the HTML attribute of an element, in particular a data item

// https://www.w3schools.com/tags/att_data-.asp 

<!DOCTYPE html>
<html>
<head>
<script>
function showDetails(animal) {
  var animalType = animal.getAttribute("data-animal-type");
  alert("The " + animal.innerHTML + " is a " + animalType + ".");
}
</script>
</head>
<body>

<h1>Species</h1>
<p>Click on a species to see what type it is:</p>

<ul>
  <li onclick="showDetails(this)" id="owl" data-animal-type="bird">Owl</li>
  <li onclick="showDetails(this)" id="salmon" data-animal-type="fish">Salmon</li>  
  <li onclick="showDetails(this)" id="tarantula" data-animal-type="spider">Tarantula</li>  
</ul>

</body>
</html>
```

## this

Can be used to send an item to a function when it's clicked on

```js
// https://www.w3schools.com/tags/att_data-.asp 

<!DOCTYPE html>
<html>
<head>
<script>
function showDetails(animal) {
  var animalType = animal.getAttribute("data-animal-type");
  alert("The " + animal.innerHTML + " is a " + animalType + ".");
}
</script>
</head>
<body>

<h1>Species</h1>
<p>Click on a species to see what type it is:</p>

<ul>
  <li onclick="showDetails(this)" id="owl" data-animal-type="bird">Owl</li>
  <li onclick="showDetails(this)" id="salmon" data-animal-type="fish">Salmon</li>  
  <li onclick="showDetails(this)" id="tarantula" data-animal-type="spider">Tarantula</li>  
</ul>

</body>
</html>

```

## Dates

Moment is for dates 

## dom

```jsx
const script = document.createElement("script")
script.src="https://www.paypal.com"
script.addEventListener("load")
document.body.appendChild(script)
```


## string includes

see if a string contains a substring

```js
var str = "Hello world, welcome to the universe.";
var n = str.includes("world");
```

## Prototype

To add a function to an existing function , use `prototype`

```jsx
// Make an input date default to today
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});
document.getElementById('datePicker').value = new Date().toDateInputValue();
```







## VIDEO

```
src="abc.mp4"
	src="abc.flv"
	src="abc.webm"
			==> file type is in url
			==> first video will play
				
		MIME TYPE USED ON WEB SERVER TO DELCARE WHICH
		FILE TYPES ARE HANDLED ON OUR SITE, AND WHICH
		APPLICATION PLAY THEM
	controls		VISIBLE : PLAY/PAUSE/FORWARD ETC
	autoplay		ON LOAD
	poster			IMAGE ON DISPLAY DURING LOAD
	width
	height
	loop			FOR EVER   boolean t/f
	muted			NO AUDIO
	preload			when page loads...
				NONE		VIDEO DOES NOT LOAD AT ALL
				AUTO		VIDEO LOAD FULLY
				METADATA	metadata loads eg length
	
	<EMBED SLIVERLIGHT/FLASH AS FALLBACK>
	
	EVENTS
		loadedmetadata		ONCE META DATA HAS LOADED,
					CAN USE 
		loadeddata		READY TO PLAY
						FINISHED BUFFERING
		timeupdate		time tracking
		onerror			function(event){//event.data}
		event.data
		event.type      mouseover, click, dblclick, keydown etc
```	
	
		
	


## BDI Right To Left Text

BDI - Bi-Directional Indicator

	(left to right, or right to left)


## Regex 

INPUT TYPE="TEXT" PATTERN="<<<REGULAR EXPRESSION<<<"

	[a-zA-Z]{6}   ALLOW UPPER, LOWER CASE
			{6,}	6 minimum
		{3,6}	3 to 6
	\\s		TEST FOR WHITESPACE
	\\w		TEST FOR WORDS INCLUDING _
	[0-9]{5}	number, 5 digits

"[a-zA-Z]{3}"   MUST BE THREE LETTERS
"[0-9]{5}"      MUST BE FIVE NUMBERS



## DATA-

	CUSTOM TAG FOR ANY DATA WE WANT
	DIV DATA-NAME="X"
		LOCATE
			$('div[data-name="x"]');



## debug

debugger;	pause live code


## types

String	var x="hi"

Number	var x=1;

Constant	const DO_NOT_CHANGE_ME = 557;

```
Boolean			1/0

Regular Expression	var myregexp = / /g     global match
				      /^     starts with
				        $/  finishes with

Date			var d = new Date()
			var d = new Date("literal")

Undefined		var t;
			var t=undefined
			
				NO VALUE ASSIGNED
				TYPE IS UNDEFINED

Null			var x = null    TYPE IS OBJECT

Exponential		var a = 1.23e5   123000

NaN			test item if number or not
			if (isNaN(x))
			if (!isNaN(x))
			
Finite
			isFinite()    is a finite legal number  
Infinity		a=1;b=0;c=a/b;
					c=infinity
					typeof(c)==> NUMBER
	-Infinity

Others
	Error
	Global
	Math
	Arguments

Array
	
	var myArray = new Array()
	var myArray = new Array(100)	new array size 100
	
	var myArray = [];				empty
	var myArray = [100]				one item
	
	var myArray = new Array(“1”,”2”,”3”);
	var myArray = ["hi",4,5]	multiple types	
	myArray[0] is first item
	
Object

	key-value pairs
	ARRAY : DATA STORED WITH INDEX 0,1,2,3  
		0 			IS FIRST ITEM
		myArray.length-1	IS LAST ITEM
		myArray[i]		IDENTIFY ELEMENT
	OBJECT : 
		STORE DATA WITH KEY-VALUE PAIR
		var myObject = {}
		var myObject = {
			"name":"bob",
			"age":21,
			"children":["peter","paul"],
			"childobject":{}
		}
		myObject.name    ==> "bob"
		myObject["name"] ==> "bob"
		myObject.newField=57;			add new field
		CONVERT TO AND FROM A JSON OBJECT
			JSON.parse	==> STRING to JSON
			JSON.stringify	==> JSON TO string
			serialize 	==> 
			serializeArray	==> 
	
				FORM SUBMISSION : TAKING FIELDS FROM
				SCREEN ==> OUTPUT AS STRING ==> 
				STRING SENT TO SERVER EG GET/POST
				DATA 
			JSON.stringify produces application/json data 
			from a JavaScript object or array.
				{id:1,name:"phil"}

				FORM INPUT DATA FROM SCREEN
				SUBMIT
				id=1&name=phil&..
```

## maths

Math.random	BETWEEN 0 AND 1
Pow(x,y)	x to the power of y
Sqrt		
Max/Min		Max(1,2,3) = 3   
toFixed(2)	toFixed(2)  ==>     123.4567 => 123.46
toPrecision(3)	==> to 3 significant digits   123456 => 123000
toExponential	123000 => 1.23e5
Math.e		Euler Number 2.7
Math.PI		PI = 3.1412
Math.ln2	.69
Math.ln10	2.3
exp(x)		
log(x)
Math.sin(x)/cos(x)/tan(x)/asin/acos/atan



## array


```
myArray.join()	
	if [1,2,3]  ==> OUTPUT ==> STRING "1,2,3"
change output delimiter
	JOIN(';')
		[1,2,3] ==> "1;2;3"
	JOIN('')
		[1,2,3] ==> "123"
myArray.push()	[1,2,3].push(15)  ==> [1,2,3,15]

myArray.pop()	var x = [4,5,6].pop()     x=6  [4,5]
myArray.unshift()   	add at start
myArray.shift()		remove from start
myArray.splice()	CUT OPEN ARRAY AND INSERT ONE OR MORE ITEMS
			THINK ROPE : SPLICE 
			INSERT ELEMENT AT POSITION X AND OPTIONALLY
			REMOVE Y ELEMENTS
			[4,5,6,7,8]
			array.splice(2,2,"add1","add2")
			output ==> [4,5,"add1","add2",8]
myArray.slice()
	[1,2,3,4,5]
	myArray.slice(2)	COPY FROM INDEX 2 TO END
			OUTPUT ==>  [3,4,5]
	myArray.slice(2,4)	==> FROM INDEX 2 TO INDEX 3 (4 MINUS 1)
				    [3,4]
myArray.length
for(var i=0;i<myarray.length;i++){ // myarray[i]}
myArray.sort		NUMERICALLY / ALPHABETICALLY
myArray.reverse		of sort()
indexOf('a')		[c,b,a]		==> RETURN 2
```

## strings

Number       string to matching number
	
toString()    number to String

toFixed(2)    number to 2DP

isNAN

textbox.value is text inside textbox

document.getElementById('').value

## escaping

\\b  backspace
\\f form feed  = printer : load next page
\\n new line (mostly)
\\r carriage return  (use both \\n\\r)
\\t tab
\\”
\\'
\\\\ backslash


## string operations


split creates array of substrings

substring() gets string within string

substring(initial pos, final pos+1)

```
substring(4)   creates a substring beginning at character 4
	
		substring(4,6) gives characters at point 4 and 5
	

substr(x,y) gives string beginning point x for y characters
```

SEARCHING USING A STRING
findme.test(mylongString)	T/F

```
findme.exec(mylongString)			STRING
	
	
	mylongstring.search(findme)			0 if found, -1 if not
	mylongstring.indexOf(findme) 		index of first hit
	mylongstring.indexOf(searchString,startpointofsearch)
		
	mylongstring.lastIndexOf(findme) 	index of last hit
					
	mylongstring.match(findme)			ARRAY OF STRINGS
	mylongstring.charAt(0)								FIRST CHARACTER 
	mylongstring.charAt(mylongstring.length-1) 		    LAST CHARACTER
```

SEARCHING USING REGEXP
var myregexp = new regexp(/test/);
var y = myregexp.test(mystring) t/f
var z = myregexp.exec(mystring) returns test if found

```
var a = mylongstring.match(myregexp/g)        returns test,test,test
	
	var newstring = mystring.replace('old','new')
	var newstring = mystring.replace(myregexp/g,'new')
	search
	indexOf
	lastIndexOf
	match
	myLongText.search(myRegExp) 			0 IF FOUND, -1 IF NOT
	CHARAT
```



```
Split()   splits a string into an array of substrings
			string.split(';')
concat()  joins two strings		

		concat(string1,string2,string3)
		
join 
		myarray.join()  	Creates a string containing the array
							elements separated by commas
							
		myarray.join('xyz') puts in a new separation element 
	
slice() produces a new string from a string
	
REPLACING

	replace  new=old.replace('old','new')
	replace()  new=old.replace('old','new')
	replace /g new=old.replace(new RegExp('old','g'),'new')
	textnew = textold.replace('find_this','replace_with_this');
	textnew = textold.replace(/find_these/g,'replace_with_this');
			
			

Reversing

    mystring.split.("").reverse().join("");
```

## regex

RegExp(pattern,modifiers) Regular Expression

var myRegExp = /test/ one match only

```
/test/g   global search (all matches)

                     /i  case insensitive
					 
					 /m  new search on every new line of text (multiline search)
					 

<html><input pattern="/regularexpression/">   

	
RegExp pattern 

	abc character ^abc not character    
RegExp example

	var regex = / expression goes in here /;
	
	var regex = /  [^\\w\\.@-]   /;
	regex.test(myString);
	
	
REGEXP TEST FOR NON-WHITESPACE CHARACTERS (IE THERE IS SOMETHING IN AN INPUT BOX)

	VAR MYREGEXP = /[^\\s]{1,}/    NOT WHITESPACE, MINIMUM ONE HIT
	
	MYSTRING.SEARCH(MYREGEXP)  ==> IF -1 THEN FAIL OTHERWISE PASS
	
	

	Regular Expression /RegExp/ can do input validation

if (isNaN(textbox1.value)){  REJECT  }

	<<<< WORK THROUGH PDF PAGE 63 ??? >>>
	
	
\\w   match alphabetical or numeric or underscore 

\\s   match whitespace

/g   global
```

## date

```js
var d = new Date();
var d = new Date(yyyy,mm,dd,hh,mm,ss);
var d = new Date("11/22/2014 18:25:36");
var d = new Date('June 20, 2016')
d.getFullYear() ==> 2016
d.getMonth();	ZERO BASED SO JANUARY IS MONTH 0
JULY ==> 6
d.getDay()	OF WEEK ZERO BASED COUNTING FROM SUNDAY
TUESDAY ==> 2
d.getDate()
Calendar date 1-31
d.getHours/Minutes/Seconds/Milliseconds
Offset from GMT ==> in MINUTES !!!
getTime()	==> UNIX TIME
SECONDS SINCE 1970
easy to add eg 2 weeks to date
toString(date)	return date and time
toDateString(date)	return date
toTimeString(date)	return time
```

## exceptions

```js
Try.Catch.Finally
try{
// DODGY CODE WHICH MIGHT FAIL
}
catch(e){
console.log(e);
}
finally{
}
Throw
try{
throw ("this is an exception");
}
catch(e){
console.log("exception caught");
}
Re-Throw
try{
try{
throw ("this is an exception");
}
catch(e){
throw e

```


## Functions

Named function

```js
function x () {}
var x = function (){}
var x = function(y,z){ return y+z;}
var x = new Function("y","z","return y+z;");
// iife immediately invoked function expression - returns literal
(function(){});
```


## Web Worker


JAVASCRIPT : SINGLE-THREADED APPLICATION
THREAD CAN GET BLOCKED BY HIGH INTENSIVE CPU OPERATIONS
CREATE WORKER TO RUN IN SEPARATE PROCESS SO PAGE DOES NOT HANG
WORKER
HAS NO ACCESS TO DOM ELEMENTS
CAN MAKE AJAX CALLS
NO ACCESS TO GLOBAL PAGE VARIABLES OR JAVASCRIPT LIBRARIES
FROM PARENT PAGE
WORKER : ATTACHED TO PARENT PAGE AND CAN ONLY COMMUNICATE
WITH PARENT PAGE
PARENT CLOSES : WORKER ALSO CLOSES
((( SHARED WEB WORKER DOES EXIST
var worker = new SharedWorker(abc.js)))
==> NOT USED BECAUSE OF SECURITY CONCERNS
CREATE
var worker = new Worker(abc.js)
SEND MESSAGE
worker.postMessage('hi')
EVENT DETECTED
onmessage = function(event){
// event.data
// event.type
}
INSIDE WORKER
SELF CAN BE USED TO REFERENCE ITSELF
self.postMessage
self.close()
TERMINATE FROM PARENT
worker.terminate()
CHECK FOR ERROR EVENT (ADD LISTENER)
worker.addEventListener('error',function(event){
[//event.data](notion://event.data/)[//event.type](notion://event.type/)
})

## webworker

```js
console.log("Inside webWorker");
onmessage = function (event) {
    console.log('worker has received a message ' + event.data);
}
setTimeout(function () {
    console.log(new Date());
    postMessage('Sending message back to main page ' + new Date());
}, 1000);
```

```html
<fieldset>
    <h1>Javascript - web worker</h1>
    <div id="worker" onclick="fnWorker()">Web Worker</div>
    <script>
        function fnWorker() {
            var w = new Worker("assets/js/webworker.js");
            w.onmessage=function(event){
                console.log(event.data);
            }
            w.postMessage("You are my worker and you will do whatever I command you");
            
        }
    </script>
</fieldset>
```


## dom

dom arrays

- document.forms
- document.images
- document.links
- document.anchors

```js  
DOCUMENT.FORMS	ALL FORMS ON PAGE
DOCUMENT.FORMS[0]	FIRST FORM ON PAGE (ZERO BASED COUNTING)
```

```html
<FORM NAME="X">
```

```js
DOCUMENT.FORMS['X']
DOCUMENT.FORMS.X
DOCUMENT.X
document.getElementById
DOCUMENT.GETELEMENTSBYNAME
document.createElement('p');
document.createTextNode(string)
document.createAttribute(name,value)
```

MODIFY ELEMENT

	create object with new data
	
	find parent
	
	append, insert or replace existing with new data
	
	
REMOVE ELEMENT

	FIND PARENT
	
	removeChild
	
		document.removeChild(document.getElementById('parent').firstChild
	
	removeAttribute
	
		var x = document.getElementById('y');
		 x.removeAttribute("id")
	
```js	
appendChild(newNode)
insertBefore(newNode, existingNode)
replaceChild(newNode, existingNode)
replaceData(string)
```

```js
childNodes[]
firstChild[]
lastChild[]
nextSibling[]
parentNode
previousSibling
```








## ajax







## Google sheets

```js
function myFunction() {
  var range, data, sheet, spreadsheetDocument, startRow, startColumn, numRows, numColumns, message;
  
  spreadsheetDocument = SpreadsheetApp.openById("1vy0A_Gu8u_Ba5tQbCcEbjuly0BTb6QVW7CKOIl47LJQ");
  sheet = spreadsheetDocument.getSheetByName('Daily Tasks'); 
  startRow = 1;
  startColumn = 1;
  numRows = 100;
  numColumns = 53;
  range = sheet.getRange(startRow,startColumn,numRows,numColumns); 
  data = range.getValues();
  message = '';
  message += '===============\\nDaily Tasks To Complete\\n========\\n\\n\\n\\n';
  for (i in data){
    var row = data[i];
    if (row[0].length>0) {
        message += row[0];
        message += '\\n\\r';
        counter++;
    }
  } 
  message += '\\n\\n\\n\\n===========\\nDaily Stats\\n===========\\n\\n\\n\\n';
  sheet = spreadsheetDocument.getSheetByName('Summary');
  for (var i = 2; i <= 20; i++){
    range = sheet.getRange(2,i);
    data = range.getValue();
    data =  Math.round(data * 100);
    message += data + '% : ';
    range = sheet.getRange(1,i);
    data = range.getValue();
    message += data + '\\n\\n';
  }
  

  
  
  message += '\\n\\n\\n\\n=====\\nWeekly Stats\\n=======\\n\\n\\n\\n';
  var range = sheet.getRange("I1");
  var data = range.getValue();
  message += data + ': ';
  var range = sheet.getRange("I2");
  var data = range.getValue();
  message += data + ': ';
  var lastRow = sheet.getMaxRows();
  var cellValue = "I" + lastRow;
  var range = sheet.getRange(cellValue);
  var data =  range.getValue();
  data =  Math.round(data * 100);
  message += data + '% Weekly Tasks Done';
  message += '\\n\\n';

 
  
  
  message += '\\n\\n\\n\\n==========\\nMonthly Stats\\n===========\\n\\n\\n\\n';  
  // Monthly Stats 
  var sheet = spreadsheetDocument.getSheetByName('Monthly Tasks');
  var lastRow = sheet.getMaxRows();
  // October
  var cellValue = "C" + lastRow;
  var range = sheet.getRange(cellValue);
  var data =  range.getValue();
  data =  Math.round(data * 100);
  message += data + '% October Monthly Tasks Done';
  message += '\\n\\n\\n\\n\\n';  

  
  
  
  message += '\\n\\n\\n\\n======\\nCount Number Of Tasks\\n========\\n\\n\\n\\n';   
  var sheet = spreadsheetDocument.getSheetByName('Tasks'); 
  var startRow = 1;
  var startColumn = 1;
  var numRows = 2000;
  var range3 = sheet.getRange(startRow, startColumn, numRows);
  var data = range3.getValues();
  var counter = 0;
  for (i in data){
    var row = data[i];
    if (row[0].length>0) {
        if(row[0] === 'Done November'){
          break;
        }
        message += row[0];
        message += '\\n\\r';
        counter++;
    }
  }
}
```

## Send Gmail

Email from Google Sheets

```js
// Set value
spreadsheetDocument.getSheetByName('Summary').getRange('B17').setValue(counter);
// Send email
var emailAddress = 'philanderson888@hotmail.com'; 
var subject = 'Regular Daily Tasks';    
MailApp.sendEmail(emailAddress,subject,message);
```


## Glossary

## AJAX

AJAX demos are in the Showcase folder

  Delete up to 10

  Ajax 10

  Serialize  : Ajax 11

  Live AJAX call : Ajax 12

AJAX USING XMLHTTPREQUEST

```js
    request = new XMLHttpRequest();       CREATE REQUEST OBJECT

    request.open('GET',url,true);
      // Get = read data
      // true = asynchronous

    request.onload=function(){
      callback(request.responseText);
    };
    request.send(data);   // Fire off request

   request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("demo").innerHTML =
          this.responseText;
        }
    };

Book example

function loadJSON(url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
        callback( JSON.parse(xhr.responseText) );
    }
    xhr.send( JSON.stringify(data) );
}
loadJSON("my.json", { id : 1 }, function(response) {
    setTitle(response.title); 
});

AJAX USING JQUERY

  $.ajax({
      method: "GET/POST",
      url: "some.php",
      data: { name: "John", location: "Boston" }
  })
  .success(function( msg ) {
        alert( "Data Saved: " + msg );
  });
    

  $.GET

    $.get("URL",function(data){
      // handle data
    });
  

  $.POST

    $.post("URL",dataOUT,function(dataIN){
      // handle dataIN
    });

  $.LOAD

    $('#divID').load("URL");
            DATA ==> PAGE ELEMENT

    

Parsing Data

var text="this;is;some;long;list;of;items";
var list=text.split(';');
for(var i = 0; i < list.length;i++){
  console.log(list[i]);
  console.log(list[i].trim());
}
```



## ChartJS

```bash
<fieldset>
	<h1>Javascript ChartJS : Displaying Charts - Bar Chart</h1>
	<style>
		.chart-js-01-container {
			width: 50vw;
			border: 2px solid rgba(247, 210, 4, 0.822);
		}
	</style>
	<div class="chart-js-01-container">
		<canvas id="chart-js-01"></canvas>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/chart.js@3.0.0-alpha/dist/Chart.min.js"></script>
	<script>
		new Chart(document.getElementById('chart-js-01'), {
			type: 'bar',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [{
					label: '# of Votes',
					data: [12, 30, 3, 5, 2, 6],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		});
	</script>
</fieldset>

<fieldset>
	<h1>Javascript ChartJS : Displaying Charts - Pie Chart</h1>
	<p>Credit : <a
			href="https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started">https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started</a>
	</p>
	<style>
		.chart-js-02-container {
			width: 50vw;
			border: 2px solid rgba(247, 210, 4, 0.822);
		}
	</style>
	<div class="chart-js-02-container">
		<canvas id="chart-js-02"></canvas>
	</div>

	<script>
		new Chart(document.getElementById("chart-js-02"), {
			type: 'pie',
			data: {
				labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
				datasets: [{
					label: "Population (millions)",
					backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
					data: [2478, 5267, 734, 784, 433]
				}]
			},
			options: {
				title: {
					display: true,
					text: 'Predicted world population (millions) in 2050'
				}
			}
		});
	</script>
</fieldset>

<fieldset>
	<h1>Javascript ChartJS - Line Chart</h1>
	<p>Credit : <a
			href="https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started">https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started</a>
	</p>
	<div class="chart-js-03-container">
		<canvas id="chart-js-03"></canvas>
	</div>
	<style>
		.chart-js-03-container {
			width: 50vw;
			border: 2px solid rgba(247, 210, 4, 0.822);
		}
	</style>
	<script>
		new Chart(document.getElementById("chart-js-03"), {
			type: 'line',
			data: {
				labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
				datasets: [{
					data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
					label: "Africa",
					borderColor: "#3e95cd",
					fill: false
				}, {
					data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
					label: "Asia",
					borderColor: "#8e5ea2",
					fill: false
				}, {
					data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
					label: "Europe",
					borderColor: "#3cba9f",
					fill: false
				}, {
					data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
					label: "Latin America",
					borderColor: "#e8c3b9",
					fill: false
				}, {
					data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
					label: "North America",
					borderColor: "#c45850",
					fill: false
				}]
			},
			options: {
				title: {
					display: true,
					text: 'World population per region (in millions)'
				}
			}
		});
	</script>
</fieldset>
```

## console logging
	
[notes/console-logging.md](notes/console-logging.md)


## String format

```js
// %d
console.log("variable x is %d", consoleOutputX);
// %o
console.log('object is %o', consoleObject1);
```



## DATETIME

```
<time>4h</time>
<time>2012</time>
<time datetime="2012-10-20">Today</time>
<time datetime="09:00:00">9am</time>
```

## Debounce

Prevents a method being called until a delay has occurred

```js
var output = debounce(DoThis(),250);
function DoThis(){
	console.log('Doing something')
}
for (let i=0;i<10;i++){
	output()
}
```

```js
var debounce = require('debounce');
window.onresize = debounce(resize, 200);
 
function resize(e) {
  console.log('height', window.innerHeight);
  console.log('width', window.innerWidth);
}
```


## Closures

```jsx
(function(){
// app code goes here
})();

```

Javascript variables can be global or local

Variables created without var are always global, even if declared within a function

Javascript inner function can solve the problem of wanting a private variable, which is not destroyed every time the function finishes

All functions have access to the scope 'above' them

Dilemma : create and initialise a variable only once - use a closure

```jsx
var add = (function () {
var counter = 0;
return function () {return counter += 1;}
})();
add();
add();
add();
// the counter is now 3

```

The function only runs once and returns a function. Calling add() does not run the closure again, just the part which returns, which accesses the private variable (does not reset it)

See https://gifted-haibt-065acd.netlify.app/#javascript-closures and https://codepen.io/philanderson888/pen/QJNwGN for a working example.


Javascript closures are inner functions which have access to the

Outer function parameters
		
	Outer function variables
		
	(but not the arguments array)


		
Key features of closures

	1. Access to parent function parameters
	
	2. Access to parent function variables
	
	3. Access to parent function variables even
			after the function has returned which
			means effectively the parent function 'stays' in RAM and we can use or increment the same variable in the same state that it was when the function returned ie is not re-declared but we still have access to it.




## AppCache

Allows offline data


## Image ISMAP

ISMAP is a flag set to TRUE or FALSE inside the <img> tag.  
  <img ismap>  
  If present then this tells the computer that a server-side image map 
  has been created which maps to different parts of the same image, so 
  in order to implement this mapping all that is required is to send the 
  coordinates of the click points to the server as part of the html
  information, in this case as part of the URL information sent.

  Note : relative image coordinates are sent (not absolute page coordinages)

  See W3 Schools ISMAP for working example of this

## Image USEMAP

Usemap is a CLIENT SIDE IMAGE MAP DEFINED HERE
Usemap="#map_region"
<map name="map_region">
  <area shape="rect" coords="0,0,10,10" href="abc.htm" />
  <area shape="circle" coords="10,10,2" ../>
  </map>


## XmlHttpRequest 

xhr = OBJECT WHICH  SEND DATA FROM US TO REMOTE SERVER

```js
var  xhr = new xmlHttpRequest
// listen for response status 200
// listen for data status 4
onreadystatechange ...
open('GET',URL,async t/f)
send()       
```

## svg

```
SCALAR VECTOR GRAPHICS
SCALES INDEPENDENT OF HOW BIG OR SMALL SCREEN IS
DRAWN WITH VECTOR MATHS
PURE IMAGE
CREATE DOM ELEMENT
THIS ELEMENT CAN BE PART OF DOM AND STYLE WITH CSS ETC
AS ANY OTHER ELEMENT
PERFORMANCE : BECAUSE DRAWING : MANY ITEMS, CAN SLOW PERFORMANCE
STATIC
DYNAMIC ITEMS : BETTER USING CANVAS (SIMILAR)
(BETTER FOR LIVE JAVASCRIPT)
```

```html
<svg>
<svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
STROKE : DRAW OUTSIDE
STROKE-WIDTH:
FILL : INSIDE CONTENT
```


```js
RECT : X Y WIDTH HEIGHT
CIRCLE : CX CY R
ELLIPSE : CX CY RX RY
POLYLINE : X1 Y1, X2 Y2, X3 Y3
CAN DO TEXT ALSO
	STROKE-WIDTH IS THICKNESS OF TEXT
	FILL INSIDE
	STROKE OUTSIDE
TEXTPATH : CURVED PATH FOR TEXT TO FOLLOW
TRANSFORM
	ROTATE(30DEG,X,Y)    	ROTATE ABOUT (X,Y)
	TRANSLATE(X,Y)		MOVE SHAPE BY X AND BY Y	
	SCALE(X,Y)		MULTIPLY BY FACTOR OF X HORIZONTAL
						      Y VERTICAL
	SKEW()			SHEAR IN X AND Y DIRECTION
```


## canvas

SVG BEST FOR STATIC ITEMS

CANVAS BEST FOR DYNAMIC INTERACTION WITH JAVASCRIPT ON PAGE

EG GAMES

<CANVAS ID="">
CANVAS{ // CSS }


```js
var canvas = document.getElementById('myCanvas')
var context = canvas.getContext('2d');

RECTANGE

	ctx.fillstyle="red"

	ctx.fillrect(x,y,width,height)

CLEAR

	ctx.clearrect(x,y,width,height)

STROKE : OUTSIDE
FILL   : INSIDE

PATH
	beginPath()
	MOVETO		STARTING POINT OF YOUR DRAWING
	LINETO(X,Y)
	LINETO(A,B)
	CLOSEPATH()
	STROKE()		DRAW OUTLINE
	FILL()			FILL SHAPE
LINE
	line(x,y,end-x,end-y)

TRIANGLE
	triangle(x,y,x1,y1,x2,y2)

TEXT
```


## jQuery

wrapper - ensures DOM is loaded before jquery runs

```js
// set value on element
$(document).ready( function() {
    $('#datePicker').val(new Date().toDateInputValue());
});​
```

input

```js
// input element
$(element).val()
```

css

```js
// css get value
$(..).attr('width')

// css set value
$(..).attr('width','value')

// css set class
ADDCLASS("FAILEDCLASS")
```

serialize form data

jQuery.serialize produces application/x-www-form-urlencoded data (the standard encoding for HTML form submissions) from a jQuery object containing an HTML Form Element or a set of form controls.

```js
('myForm').serialize()
```
