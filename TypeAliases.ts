/**
//typeAliases : 타입을 변수처럼 사용해서 타입 알리아스 주기
type StringOrNum = string |number;
type objWithName = {name:string,uid:StringOrNum};

const logDetails = (uid:StringOrNum,item:string)=>{
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user:objWithName)=>{
    console.log(`${user.name} say hello`);
}

const greetAgain = (user:objWithName)=>{
    console.log(`${user.name} say hello`);
}
 */