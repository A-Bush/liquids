export class Cigarette {
    id: number;
    name: string;
    description: string;
    price: string;
    amount: number;

    constructor (name, description, price, amount){
        this.name = name;
        this.description = description;
        this.price = price;
        this.amount = amount;
    }
}