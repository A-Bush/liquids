import {Headers, Http} from "@angular/http";
import {Injectable, Input} from "@angular/core";
import 'rxjs/add/operator/toPromise';

import {Cigarette} from "../Model/cigarettes";
import {Order} from "../Model/order";

@Injectable()
export class MainServiceComponent {
    @Input() selectedCigarette: Cigarette;

    private cigaretteUrl = 'app/cigarettes';
    private haeders = new Headers({'Content-Type': 'application/json'});
    private handleError(error:any):Promise<any> {
        console.error("An error occured", error);
        return Promise.reject(error.message || error);
    }

    private orders:Array<Order> = [];

    constructor (private http: Http) {
    }

    getCigarettes():Promise<Cigarette[]> {
        return this.http.get(this.cigaretteUrl)
            .toPromise()
            .then(response => response.json().data as Cigarette[])
            .catch(this.handleError);
    }

    addItemToOrder(item:Cigarette) {
        if (!this.orders.length) {
            this.addOrder(new Order());
        }
        this.orders[0].addItem(item);
    };

    getOrders():Order[] {
        return this.orders;
    };

    addOrder(order:Order) {
        return this.orders.push(order);

    };

}
