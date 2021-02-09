let greet:Function;
greet = ()=>{
    console.log('hello');
} 

const add = (a:number,b:number,c:number|string = 10) =>{
    console.log(a+b);
    console.log(c);
}

add(5,10,20);

//function(): type : 여기서 type은 return type 지정
// type값이 없으면 return이 void
const minus =(a:number,b:number):number=>{
    return a+b;
}

let result = minus(10,7);

//ex1
// gree(a,b) => a,b를 의미하는 것이 아니라 그냥 파라미터
let gree: (a:string,b:string)=> void;
gree = (name:string,greeting:string)=>{
    console.log(`${name} says greeting`);
}

//ex2
let calc:(a:number,b:number,c:string)=>number;

calc = (numOne:number,numTwo:number,action:string):number=>{
    if(action==='add'){
        return numOne + numTwo;
    }else{
        return numOne-numTwo;
    }
}

//ex3
let logDetails: (obj:{name:string,age:number})=>void;

type person ={name:string,age:number};

logDetails = (ninja:person) =>{
    console.log(`${ninja.name} is ${ninja.age} old`);
}