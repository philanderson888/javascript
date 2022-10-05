# dates

## contents

- [dates](#dates)
  - [contents](#contents)
  - [Dates](#dates-1)

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