export class Cigarette {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    amount: number;
    onCart: boolean;

    constructor (name, description, price){
        this.name = name;
        this.description = description;
        this.quantity = 0;
        this.price = price;
        this.onCart = false;
    }
}