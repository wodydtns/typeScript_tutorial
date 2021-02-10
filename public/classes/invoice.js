export class Invoice {
    constructor(client, // 읽기만 가능
    details, // 클래스 내부에서만 사용(java private와 동일)
    amount // public이 기본 값
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
