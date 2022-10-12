# arrays

## contents

- [arrays](#arrays)
	- [contents](#contents)
	- [ways to create an array](#ways-to-create-an-array)
	- [isArray()](#isarray)
	- [for loop over array](#for-loop-over-array)
	- [array.join](#arrayjoin)
	- [push](#push)
	- [pop](#pop)
	- [unshift](#unshift)
	- [shift](#shift)
	- [splice](#splice)
	- [slice](#slice)
	- [loop](#loop)
	- [sort](#sort)
	- [reverse](#reverse)
	- [indexOf](#indexof)
	- [jagged array](#jagged-array)
	- [map](#map)
	- [reduce](#reduce)
	- [spread operator](#spread-operator)
		- [split an array into sub-arrays](#split-an-array-into-sub-arrays)
		- [flatten an array of arrays](#flatten-an-array-of-arrays)


## ways to create an array

```js
array1 = ["item1","item2"];
array2 = [];
array3 = ();
array4 = [5];  
array5 = (5);
```

## isArray()

```js
if item.isArray() {}
```

## for loop over array

```js
for (var i=0;i<myArray.length;i++){
	console.log('myArray[' + i + '] = ' + myArray[i]);
}
```


## array.join

OUTPUTS THE ARRAY ELEMENTS AS ONE LONG STRING

```js
MYARRAY.JOIN()			==>		1,2,3
MYARRAY.JOIN(',')		==>		1,2,3
MYARRAY,JOIN(';')		==>		1;2;3
```

## push

adds elements to an array at the end

```
array.push(22)       TO END
array1.push("extra1","extra2");
```

## pop

removes last element from array

```js
array.pop
```

## unshift

adds element at start of array

```js
array1.unshift("extra item at start1","2");
```

## shift

removes element from start of array

```shift
array.shift()
```

## splice

add element at index x 
optionally removes y elements

```js
array1.splice(2,2,"extra1","extra2","extra3");
```

removes third and fourth items (index 2 and 3) and then adds three items at index 2,3,4

## slice

copies all or part of array to new array


```js
// copies from index x up to the index before y
var newArray = array1.slice(x,y) 

// get the first character of an array  
// (second number is index AFTER last character)
slice(0,1) 

// second minus first number gives length of slice
slice(2,5) // on Boston gives letters s(2) t(3) o(4)

slice(2) // goes from index 2 to end
```

## loop

```js
console.log(`looping through array of length ${myArray.length}`)
for (var i=0;i<myArray.length;i++){
	console.log('myArray[' + i + '] = ' + myArray[i]);
	if (condition) {
		break;
	}
	if (condition) {
		continue;
	}
}
```

## sort

```js
array.sort()
// descending
array.sort((a,b) => b-a);
```

## reverse

```js
array.reverse()
```

## indexOf

find the index of a given item if it's in the array


```js
myArray=["banana","pear","apple"]
console.log(myArray.indexOf('banana'))
// 0
```

## jagged array

is an array of arrays of differing lengths

```js
var arr = [[value1, value2, value3], [value1, value2]]
```

or inside an object

	
```js
var obj = { "key": [value1, value2, value3], "key2": [value1, value2] }
```

or

```js
var obj = {};
obj.key = [value1, value2, value3];
obj["key2"] = [value1, value2];
```

## map

map creates a new array from the old, mapping every item 1-1 from the old array into the new array

```js
myNewArray = myOldArray.map(function(item))
```

*- note -*
*- map returns array -*
*- for/foreach can just iterate over the original array, not returning anything -*


### map example

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

## reduce

reduces array to one scalar value

```js
const total = myArray.reduce((x,y)=>x+y)
```

## spread operator

spread allows input of an array as a parameter into a function

spread(...myArray) passes the elements of `myArray` into the function

```js
doThis(a,b,c){}
var arr=[1,2,3];
doThis(...arr);
```

and can use ... spread operator data with normal data

```js
var arr1=[1,2,3];
let arr2 = [...arr1,4,5,6];
```

### split an array into sub-arrays

can split larger array into smaller arrays

```js
[a,...b] = [1,2,3,4,5] 
// a=1 
// b=[2,3,4,5]
```

### flatten an array of arrays

```js
output = [].concat(...arr);
```

