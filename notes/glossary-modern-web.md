# modern web glossary

## contents

- [modern web glossary](#modern-web-glossary)
  - [contents](#contents)
  - [Hacker News](#hacker-news)
  - [MeteorJS](#meteorjs)
  - [NativeScript](#nativescript)
  - [Node Streams](#node-streams)
  - [Password Generator](#password-generator)
  - [PWA Progressive Web Apps](#pwa-progressive-web-apps)
  - [Typescript](#typescript)
  - [Typescript interfaces](#typescript-interfaces)
  - [Typescript Classes](#typescript-classes)
  - [Typescript tsconfig.json](#typescript-tsconfigjson)
  - [Webpack](#webpack)
  - [Canvas](#canvas)
  - [Selenium](#selenium)
  - [Three.js](#threejs)
  - [Webpack](#webpack-1)
  - [Yarn](#yarn)



[NativeScript](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#nativescript)

[PWA Progressive Web App](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#pwa)

## Hacker News

[https://news.ycombinator.com](https://news.ycombinator.com/)

## MeteorJS

```
# Windows
choco install meteor
# Linux
curl <https://install.meteor.com/> | sh

# create app
meteor create testapp
cd testapp
meteor
```

## NativeScript

We can use nativescript to build native Android and IOS apps from scratch using regular Javascript code; namely Typescript, Vue, Angular etc.

Try it out at [https://www.nativescript.org](https://www.nativescript.org/)

## Node Streams

Streams are similar to Unix Piping | whereby we `pipe` the output from one command into another

.pipe() is used

## Password Generator

[https://passwordwolf.com/api/](https://passwordwolf.com/api/)

[https://passwordwolf.com/](https://passwordwolf.com/)

## PWA Progressive Web Apps

PWA Progressive Web App : is a web app which behaves as if it's a native app with offline support.

Native apps are used a lot but people are loth to install new web apps! Also Google/Facebook/Amazon have the lions' share of the most popular apps

## Typescript

Install via NPM or VS Nuget

Note that Visual Studio has full intellisense for typescript

```
npm install -g typescript
```

Create typescript file helloworld.ts

```
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

## Typescript tsconfig.json

The presence of tsconfig.json indicates this is the root of a project.

tsconfig specifies
root files
compiler options

## Webpack

Webpack takes multiple files like `index.js` etc and bundles them into one `bundle.js` file

Code splitting then allows for different parts of the application to be loaded on demand

## Canvas

[canvasjs.com](http://canvasjs.com/)

## Selenium

£30 Selenium Testing course [https://www.udemy.com/selenium-real-time-examplesi…](https://www.udemy.com/selenium-real-time-examplesi%E2%80%A6)

## Three.js

Three.js is a javascript framework for producing 2d and 3d graphics

## Webpack

Webpack and Yarn are the recommended replacement for Bower package manager which helps establish the correct dependency relationships for your dependent packages, and maintain them correctly for you. See <a href="#bower">Bower</a> and <a href="#yarn">Yarn</a> for details.

## Yarn

Yarn is a package install manager

Yarn can be used in a similar manner to npm and bower to install libraries and their dependencies into your project, and manage and maintain the correct dependency relationships for you
Yarn and Webpack are recommended as an alternative to Bower. See <a href="[https://bower.io/blog/2017/how-to-migrate-away-from-bower](https://bower.io/blog/2017/how-to-migrate-away-from-bower)">[https://bower.io/blog/2017/how-to-migrate-away-from-bower](https://bower.io/blog/2017/how-to-migrate-away-from-bower)</a> for more details.


