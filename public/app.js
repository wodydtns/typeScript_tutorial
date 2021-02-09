"use strict";
//classes
var Invoice = /** @class */ (function () {
    function Invoice(client, // 읽기만 가능
    details, // 클래스 내부에서만 사용(java private와 동일)
    amount // public이 기본 값
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
var Invoices = [];
Invoices.push(invOne);
Invoices.push(invTwo);
//invOne.client='yoshi';
//invTwo.amount=400;
Invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
    //console.log(inv.client,inv.details,inv.amount,inv.format());
});
var anchor = document.querySelectorAll('a');
// typescript는 dom의 node값을 알지 못한다
// console.log(anchor.href);<= 에러 발생
//html Element로 인식
//const form = document.querySelector('form')!;
// element로 인식
//as HTMLFormElement  => 이 element를 HTMLFormElement로 type 변환
var form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
