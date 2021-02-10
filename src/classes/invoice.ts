export  class Invoice {
    constructor(
        readonly client:string, // 읽기만 가능
        private details:string, // 클래스 내부에서만 사용(java private와 동일)
        public amount:number // public이 기본 값
    ){}
    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}
