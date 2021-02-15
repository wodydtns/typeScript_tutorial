export class Payment {
    constructor(recipient, // 읽기만 가능
    details, // 클래스 내부에서만 사용(java private와 동일)
    amount // public이 기본 값
    ) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}
