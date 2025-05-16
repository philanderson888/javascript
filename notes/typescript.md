# typeScript

## contents

- [typeScript](#typescript)
  - [contents](#contents)
- [install](#install)
  - [compile ts to js](#compile-ts-to-js)
  - [run](#run)
  - [constants](#constants)
  - [types](#types)
  - [interface](#interface)
  - [class](#class)
  - [config](#config)
  - [functions](#functions)

# install

```bash
npm install -g typescript
```

then run

```ts
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
```

## compile ts to js

```ts
tsc helloworld.ts
// helloworld.js
```

## run

```tsx
<!DOCTYPE html>
<html>
    <head><title>TypeScript</title></head>
    <body>
        <script src="helloworld.js"></script>
    </body>
</html>
```

## constants

```ts
const instance: x = {field: "value"}
declare const instance: x
```

infer type from structure

## types

```ts
type x = "a"|"b"
type y = 1|2|3
type z = array<string>
type t = array<{field:string}>
```

## interface

We can use interfaces as a predicted class structure

```ts
interface X {field: string}
```

```ts
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
```

## class

typescript has full support for ES6 classes

```ts
class x { 
    constructor(){
        this.field = field
    }
}
```



```ts
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
```

## config

tsconfig.json sits at project root. 

tsconfig specifies

- root files
- compiler options

```json
{
    strict: true,
    noimplicitany: true,
    StrictNullCheck: true
}
```


## functions

```ts
fn x(): string // return type 
```

type inferred parameter

```ts
fn x(a:string; b?.c: string})
// ? = nullable
// ```


## async

```ts
async fn()
```