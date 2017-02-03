import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {Cigarette} from "../../Model/cigarettes";
import {Order} from "../../Model/order";
import {MainServiceComponent} from "../../Service/mainService.component";

@Component({

    moduleId: module.id,
    selector: 'cigarette-dialog',
    templateUrl: '../CigaretteDialog/cigaretteDialog.component.html',
    styleUrls: ['cigaretteDialog.component.css']
})
export class CigaretteDialogComponent implements OnInit {
    private orders: Order[];
    @Output() onMinusQuantity = new EventEmitter();
    @Output() onPlusQuantity = new EventEmitter();

    ngOnInit(): void {
        this.getOrders();
    }

    constructor(private mainService: MainServiceComponent) {
    }

    getOrders() {
        this.orders = this.mainService.getOrders();
        return this.orders;
    }

    minusQuantity(item: Cigarette, order: Order) {
        this.onMinusQuantity.emit(item);
        item.quantity -= 1;
        item.amount = item.quantity * item.price;
        this.setTotalPrice(order);
    }

    plusQuantity(item: Cigarette, order: Order) {
        this.onPlusQuantity.emit(item);
        item.quantity += 1;
        item.amount = item.quantity * item.price;
        this.setTotalPrice(order);
    }

    setTotalPrice(order:Order) {
        let items = order.items;
        let totalPrice = 0;
        for (let item of items) {
            totalPrice += item.amount;
        }
        return order.totalPrice = totalPrice;
    };

}
