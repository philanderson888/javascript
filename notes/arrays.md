# arrays

## contents

- [arrays](#arrays)
  - [contents](#contents)
  - [Array](#array)
  - [map](#map)
  - [Reduce](#reduce)


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
