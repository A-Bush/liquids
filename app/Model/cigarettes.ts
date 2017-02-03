export class Cigarette {
    id: number;
    name: string;
    description: string;
    price: number;
    amount: number;
    onCart: boolean;

    constructor (name, description, price, amount){
        this.name = name;
        this.description = description;
        this.price = price;
        this.amount = amount;
        this.onCart = false;
    }
}