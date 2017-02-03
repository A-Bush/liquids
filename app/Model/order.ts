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
        this.setTotalPrice(item.price);
    };
    setTotalPrice(price:number = 0) {
        this.totalPrice += price;
    };

}