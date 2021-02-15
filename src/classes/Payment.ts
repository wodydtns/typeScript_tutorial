import {HasFormatter} from '../interfaces/HasFormatter'

export  class Payment implements HasFormatter{
    constructor(
        readonly recipient:string, // 읽기만 가능
        private details:string, // 클래스 내부에서만 사용(java private와 동일)
        public amount:number // public이 기본 값
    ){}
    format(){
        return `${this.recipient} is owed ${this.amount} for ${this.details}`
    }
}
