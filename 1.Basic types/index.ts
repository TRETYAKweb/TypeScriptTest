// Базовые типы

import { type } from "os";

const str: string = "Hello world";

const isFetching:boolean = true;
const isLoading:boolean = true;

let int:number = 14;
let float:number = 14.2;
let num:number = 3e12;

const arr:string[] = ['asdsad', 'lol', 'wtf'];
const arr2:number[] = [1,32,4,6,23,2];
const arr3:Array<boolean> = [true, false, true, false, true, false];

// Tuple 

const contact: [string,number] = ['Misha', 123421341];

// Any

let variable:any = 42;

variable = true;

variable = 'new string';

// ====

function sayMyName (name:string):void {
  console.log(name);
}

sayMyName("Хайзенберг");

// Never

function error (err:string):never {
  throw new Error (err);
}

// error(`Error function`);

function infiniti():never {
  while(true) {

  }
};

// Type

type Login = string;

const login:Login = "tretyak";

type ID = string | number;

const id1:ID = "asdsadasdasd";
const id2:ID = 123;

type SomeType = string | null | undefined;





