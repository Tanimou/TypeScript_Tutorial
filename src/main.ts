const a = "1";
console.log("aaaa");
let hello = "world";
//*in typescript we change only variables to the same type
//hello is a string so we can only change hello to another string. hello=true will lead us to an error

//it's highly recommanded to specify the type of the variable but not a mandatory
let hey: string = "hello";

//!Function in typescript
//*it is the same as in javascript but again, we can specify the type
const getfullname = (name: string, surname: string): string => {
  return name + " " + surname;
};
//console.log(getfullname("tanimou",4)) here we get an error because 4 is not a string, while in javascript we'll get no error
console.log(getfullname("tanimou", "cisse"));

//!Interfaces in typescript
//*create objects
//Again same thing as in javascript but always safer to specify the type
//interface is a special entity inside typescript which helps us create objects with some properties
interface User {
  name: string; //we must have name property when creating objects with User type
  age?: number; //by putting "?" after age we say that age is not a mandatory...
  getMessage?(): string; //
}
const user: User = {
  //{ name: string; age: number } = {
  name: "Affane",
  age: 30,
  getMessage() {
    return "hello" + name;
  },
};
const user2: User = {
  //instead of doing { name: string; age: number } we can just say User
  name: "tata",
  age: 20, // ...so we can safely delete the property here
};
//!union operator
//we can specify one or more differents types a variables is allowed to have
let unsername: string | number = "1"; //so username can be either a string or number
let user3: User | null = null;
//!types aliases
//*we can create our own types
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;
const popular: PopularTag[] = ["dragon", "cofee"];
const dragonTag: MaybePopularTag = "FemalDragon";

//!void/unknown
//*void type
const doSomething = (): void => {
  console.log("do something");
};
//*unknown type
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
//*let s2:string=vUnknown//here we get an error. we can't assign type string to type unknown

//!type assertion: conversion of types
let s2: string = vUnknown as string; //as does the assertion
let pageNumber: string = "1";
let numericPageNumber: number = pageNumber as unknown as number;//we have to convert pageNumber's type into unknown type before convert it into number type

//!working with DOM
//*let's say we want to select an input element from html file and log his value

//?const someElement = document.querySelector(".foo") as HTMLInputElement; //we convert our element from generique type to an html input element
//?console.log("some Element:", someElement.value);

//!adding a listener
//?const SommeElement = document.querySelector(".foo");
//?SommeElement.addEventListener("blur", (event: Event) => {
//?const target = event.target as HTMLInputElement;
//?console.log("event", target.value);
//?});

//!class in typescript
interface UserClass {
  getfullname(): string;
}
class Userr implements UserClass {
  firstName: string;
  private lastName: string;
  readonly unchangeableName: string;
  static readonly maxAge: number = 50;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangeableName = firstName;
  }
  chanUnchangebleName(): void {
    //* this.unchangeableName="foo"//error because unchangeableName is a readonly variable
  }
  getfullname(): string {
    return this.firstName + " " + this.lastName;
  }
}

const user5 = new Userr("Tanimou", "cisse");
console.log(user5.getfullname());
console.log(Userr.maxAge);
//!Inheritance in typescript
class Admin extends Userr {}
const admin = new Admin("affane", "cisse");
console.log(admin.firstName);

//!Generics in typescript
//*generic data type is all kind of type that includes many type like interfaces. so when we want to specify the type of a variable as a generic data type we use <>

//!const addId = <T>(obj:T) => {//all generic data type are written inside <> and so we can specify that it is a string or an interface or whatever

const addId = <T extends object>(obj: T) => {
  // here we specify that we want only an object type

  const id = Math.random().toString(16);
  return {
    ...obj, //spread operator
    id,
  };
};
interface Userinterface<T, V> {
  //we say that our interface can be any type of type
  name: string;
  data: T; //this variable has any type as a type. it have a generic data type
  meta: V; //we can pass many data types
}
const userrr: Userinterface<{ meta: string }, string> =
  //we are passing an object as a generic data type for interface
  //so we clearly say that userrr must be an object with name and data properties
  {
    name: "Jack",
    data: {
      meta: "foo",
    },
    meta: "haloooo",
  };
  
const result = addId(userrr);
console.log(result);
