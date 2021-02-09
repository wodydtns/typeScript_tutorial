//classes
class Invoice {
    

    constructor(
        readonly client:string, // 읽기만 가능
        private details:string, // 클래스 내부에서만 사용(java private와 동일)
        public amount:number // public이 기본 값
    ){}
    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}
const invOne = new Invoice('mario','work on the mario website',250);
const invTwo = new Invoice('luigi','work on the luigi website',300);

let Invoices:Invoice[] = [];
Invoices.push(invOne);
Invoices.push(invTwo)
//invOne.client='yoshi';
//invTwo.amount=400;
Invoices.forEach(inv=>{
    console.log(inv.client,inv.amount,inv.format());
    //console.log(inv.client,inv.details,inv.amount,inv.format());
});



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

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    console.log(
        type.value,tofrom.value,
        details.value,amount.valueAsNumber
        
        );
});

