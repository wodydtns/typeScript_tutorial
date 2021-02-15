
import {Invoice} from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';

const anchor = document.querySelectorAll('a')!;

// typescript는 dom의 node값을 알지 못한다
// console.log(anchor.href);<= 에러 발생

//html Element로 인식
//const form = document.querySelector('form')!;
// element로 인식
//as HTMLFormElement  => 이 element를 HTMLFormElement로 type 변환
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    let values:[string,string,number];
     values = [tofrom.value,details.value,amount.valueAsNumber];

    let doc:HasFormatter;
    if(type.value ==='invoice'){
        doc = new Invoice(...values)
    }else{
        doc = new Payment(...values)
    }
    list.render(doc,type.value,'end');

});

// Generics
const addUID = <T extends {name:string}>(obj:T)=>{
    let uid = Math.floor(Math.random()*100);
    return {...obj,uid};
}
let docOne = addUID({name:'yoshi',age:40});

console.log(docOne);

//with interfaces
interface Resource<T> {
    uid:number;
    resourceName:string;
    //flexiable type 
    data:T;
}

const docThree :Resource<string> = {
    uid:1,
    resourceName : 'person',
    data:'shaun'
}

const docFour:Resource<string[]> = {
    uid:2,
    resourceName:'shoppingList',
    data: ['string','test']
}
// Enums
enum ResourceType{
    BOOK,AHTHOR,FILM,DIRECTOR,PERSON
}

interface Resource2<T>{
    uid:number;
    resourceType:ResourceType;
    data:T;
}

const docOne : Resource<object> ={
    uid:1,
    resourceType:1,
    data:{title:'name of the wind'}   
}

//tuples

let arr = ['ryu',24,true];
arr[0] = false;

//type fixed array
let tup:[string,number,boolean] = ['ryu',25,true]
tup[0] = 'false';

let student: [string,number] = [];
student['chu',0];