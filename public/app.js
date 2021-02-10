const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I Spend ${amount}`);
        return amount;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log(`hello ${person.name}`);
};
import { Invoice } from './classes/invoice.js';
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let Invoices = [];
Invoices.push(invOne);
Invoices.push(invTwo);
//invOne.client='yoshi';
//invTwo.amount=400;
Invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
    //console.log(inv.client,inv.details,inv.amount,inv.format());
});
const anchor = document.querySelectorAll('a');
// typescript는 dom의 node값을 알지 못한다
// console.log(anchor.href);<= 에러 발생
//html Element로 인식
//const form = document.querySelector('form')!;
// element로 인식
//as HTMLFormElement  => 이 element를 HTMLFormElement로 type 변환
const form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
