import {Cigarette} from "./cigarettes";
export class Order {
    items: Cigarette[] = [];
    totalPrice: number = 0;
    name: string = '';
    surname: string = '';
    address: string = '';
    city: string = '';
    telephone: string = '';

    constructor (){
    }
    addItem(item:Cigarette) {
        this.items.push(item);
        this.setTotalPrice(item.price, item.quantity);
    };
    setTotalPrice(price:number = 0, quantity:number = 1) {
        this.totalPrice += (price * quantity);
    };

}