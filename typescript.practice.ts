/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

let a: string = "my string";

let b:number = 2339;

let c: number[] = [1,2,3,4,5];

let d: string[] = ["one", 'two'];


type TString = string;

let e: TString = "st this is my string";

// type TUser = {
//     name: string;
//     email: string;
//     password: string;
//     role: "ADMIN" | "USER";
// }

interface TUser {
    name: string;
    email: string;
    password: string;
    role: "ADMIN" | "USER";
}

let obj1: TUser = {
    name: 'nasrullah',
    email: 'email@email.com',
    password: '123',
    role: "ADMIN",
}


let student1: TUser = {
    name: "name",
    email: 'email@email.com',
    password: "123",
    role: "USER"
}


let zz: string = "my string";



// type IStudent = string[];

// type IStudent = Array<string>;

type IStudent<param> = Array<param>;

let yy:IStudent<string> = ['one', 'two'];

let uu:IStudent<number> = [1,2,3,4];

type ICar<T> = Array<T>;

type ICarObj = {
    name: string;
    color: string;
    brand?: string;
}

let myCar1:ICar<ICarObj> = [{
    name: 'abc',
    color: 'red',
}]
