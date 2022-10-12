# types

## contents

- [types](#types)
	- [contents](#contents)
	- [types](#types-1)
	- [Other object types](#other-object-types)
	- [TypeOf](#typeof)
	- [String](#string)
	- [Boolean to string](#boolean-to-string)
	- [converting types](#converting-types)
		- [Date to string](#date-to-string)
		- [String To Number](#string-to-number)
		- [Number to date](#number-to-date)
		- [truthy falsy](#truthy-falsy)


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

## Other object types

- Error 

- Global

- Math

- Arguments array passed to a function
	
	

## TypeOf

Variable can change its type

```
var x = 1;
var x = "hi";
```

typeof(x)  declares its type 

```
var str1 = "Welcome to my Application" ; 
var num1 = 25 ; 
var num2;
var x = function (){}
typeof(str1)
typeof(num1)
typeof(num2)
typeof(x)
/*
String
Number 
undefined
function
*/
```



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

## converting types

### Date to string

```js

String(new Date('2019-01-22'))
//"Tue Jan 22 2019 01:00:00 GMT+0100 (Central European Standard Time)"

(new Date('2019-01-22')).toString()
//"Tue Jan 22 2019 01:00:00 GMT+0100 (Central European Standard Time)"
```



### String To Number

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

### Number to date

Converts date to UNIX timestamp


### truthy falsy

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
