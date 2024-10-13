# Javascript

## Contents

- [Javascript](#javascript)
  - [Contents](#contents)
  - [author](#author)
  - [introduction](#introduction)
  - [resources](#resources)
    - [official documentation](#official-documentation)
    - [related topics](#related-topics)
    - [random terms](#random-terms)
    - [glossaries](#glossaries)
    - [links](#links)
  - [types](#types)
  - [dates](#dates)
  - [Temporal native date object](#temporal-native-date-object)
  - [2023 update](#2023-update)
  - [Dates](#dates-1)
  - [operators](#operators)
  - [equality](#equality)
  - [loops](#loops)
  - [arrays, also map, filter, reduce](#arrays-also-map-filter-reduce)
  - [dates](#dates-2)
  - [setTimeout setInterval](#settimeout-setinterval)
  - [exceptions](#exceptions)
  - [Function](#function)
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
  - [archive](#archive)

## author

Phil Anderson @philanderson888

## introduction

repositories from which to learn the basics of javascript 

## resources

### official documentation 

[docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### related topics

[nodejs](https://github.com/philanderson888/nodejs)

[jQuery](https://github.com/philanderson888/jquery)

[react](https://github.com/philanderson888/react)

[typescript](notes/typescript.md)

[libraries](notes/libraries.md)

[resources](notes/resources.md)

### random terms

[random programming terms](notes/random-programming-terms.md)

[random web programming terms](notes/random-web-terms-and-glossary.md)

### glossaries

[glossary programming non-web](notes/glossary-programming.md)

### links

- [reason](notes/reason.md)
- [deno](notes/deno.md)

## types

[variables and types](/notes/variables-and-types.md)

## dates

## Temporal native date object

## 2023 update

try https://date-fns.org

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



## operators

[operators](notes/operators.md)

## equality

```js
const a = true
a == true //true
a === true //true
1 === 1 //true
1 === '1' //false
```


## loops

```
While() loop

Do{}..while() loop

For(var x=0;x<10;x++){}

For(var item in myObject){ }
```

## arrays, also map, filter, reduce

[arrays](arrays.md)

## dates

[dates](notes/dates.md)



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

```js
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

```js
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

```js
function x(){}
	var y = function x(){}
```
	
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

Find the code at [api/index.html](api/index.html)

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


## archive 

- [ajax](notes/ajax.md)
  - [demos](https://github.com/philanderson888/ajax)
- [Angular 1](notes/angular-version-1.md)
