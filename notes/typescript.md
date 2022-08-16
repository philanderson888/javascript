# TypeScript

## Contents

- [TypeScript](#typescript)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Warning - Use ReasonML not Typescript](#warning---use-reasonml-not-typescript)
- [TypeScript .ts](#typescript-ts)
- [install typescript](#install-typescript)
- [compile typescript to Javascript](#compile-typescript-to-javascript)

## Introduction

Typescript

    Javascript is valid typescript
    Microsoft created
    Typescript is not valid javascript unless compiled
    Brings strict checking
    Write elegant javascript in the compiler
    App Building

NativeScript

    Nativescript can compile Javscript to native Android and iOS apps very quickly.  
    Each page has a source code of XML, Javascript and CSS and that's it!!!
    https://play.nativescript.org/?template=groceries-js&tutorial=groceries-js&id=8cWlB7

## Warning - Use ReasonML not Typescript

https://reasonml.github.io/

Typescript adds types to Javascript but still retains backwards compatibility with all of the poor design flaws and bugs inherent in raw Javascript.

For this reason, ReasonML is a better choice than Typescript if starting out!

This article discusses some of the failings of Typescript in more details

https://medium.com/swlh/typescript-will-make-you-suffer-7cc6ca4b1233

# TypeScript .ts

# install typescript

```js
npm install -g typescript

function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
```


Now compile this typescript file to javascript

```
# typescript compile to javascript the typescript file `helloworld.ts` 
tsc helloworld.ts
```

Now run this with HTML :

```
<!DOCTYPE html>
<html>
    <head><title>TypeScript</title></head>
    <body>
        <script src="helloworld.js"></script>
    </body>
</html>
```

## Typescript interfaces

We can use interfaces as a predicted class structure

```
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

## Typescript Classes

Typescript has full support for ES6 classes

```
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

## tsconfig.json

tsconfig.json sits at project root. 

tsconfig specifies

- root files
- compiler options
