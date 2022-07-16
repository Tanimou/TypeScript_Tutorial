var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var a = "1";
console.log("aaaa");
var hello = "world";
//*in typescript we change only variables to the same type
//hello is a string so we can only change hello to another string. hello=true will lead us to an error
//it's highly recommanded to specify the type of the variable but not a mandatory
var hey = "hello";
//!Function in typescript
//*it is the same as in javascript but again, we can specify the type
var getfullname = function (name, surname) {
  return name + " " + surname;
};
//console.log(getfullname("tanimou",4)) here we get an error because 4 is not a string, while in javascript we'll get no error
console.log(getfullname("tanimou", "cisse"));
var user = {
  //{ name: string; age: number } = {
  name: "Affane",
  age: 30,
  getMessage: function () {
    return "hello" + name;
  },
};
var user2 = {
  //instead of doing { name: string; age: number } we can just say User
  name: "tata",
  age: 20,
};
//!union operator
//we can specify one or more differents types a variables is allowed to have
var unsername = "1"; //so username can be either a string or number
var user3 = null;
var popular = ["dragon", "cofee"];
var dragonTag = "FemalDragon";
//!void/unknown
//*void type
var doSomething = function () {
  console.log("do something");
};
//*unknown type
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
//*let s2:string=vUnknown//here we get an error. we can't assign type string to type unknown
//!type assertion: conversion of types
var s2 = vUnknown; //as does the assertion
var pageNumber = "1";
var numericPageNumber = pageNumber;
var Userr = /** @class */ (function () {
  function Userr(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangeableName = firstName;
  }
  Userr.prototype.chanUnchangebleName = function () {
    //* this.unchangeableName="foo"//error because unchangeableName is a readonly variable
  };
  Userr.prototype.getfullname = function () {
    return this.firstName + " " + this.lastName;
  };
  Userr.maxAge = 50;
  return Userr;
})();
var user5 = new Userr("Tanimou", "cisse");
console.log(user5.getfullname());
console.log(Userr.maxAge);
//!Inheritance in typescript
var Admin = /** @class */ (function (_super) {
  __extends(Admin, _super);
  function Admin() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  return Admin;
})(Userr);
var admin = new Admin("affane", "cisse");
console.log(admin.firstName);
//!Generics in typescript
//*generic data type is all kind of type that includes many type like interfaces. so when we want to specify the type of a variable as a generic data type we use <>
//!const addId = <T>(obj:T) => {//all generic data type are written inside <> and so we can specify that it is a string or an interface or whatever
var addId = function (obj) {
  // here we specify that we want only an object type
  var id = Math.random().toString(16);
  return __assign(__assign({}, obj), {
    //spread operator
    id: id,
  });
};
var userrr =
  //we are passing an object as a generic data type for interface
  //so we clearly say that userrr must be an object with name and data properties
  {
    name: "Jack",
    data: {
      meta: "foo",
    },
    meta: "haloooo",
  };
var result = addId(userrr);
console.log(result);
