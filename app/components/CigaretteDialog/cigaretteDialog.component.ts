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

    deleteOrderItem(item: Cigarette, order: Order) {
        let index: number = item.id;
        for (let currentItem of order.items) {
            let orderItems: Cigarette[] = order.items;
            let orderName = item.name;
            let orderDel = currentItem.id;
            if (index == orderDel) {
                let ind: number = orderItems.indexOf(currentItem);
                currentItem.quantity = 1;
                orderItems.splice(ind, 1);
                item.onCart = false;
                let checked: any = document.getElementsByClassName("onCart" + orderName);

                for (let i = 0; i < checked.length; ++i) {
                    checked[i].removeAttribute('disabled');
                    let goToCart = checked[i].parentElement.getElementsByClassName('go-to-cart');
                    for (let i = 0; i < goToCart.length; ++i) {
                        goToCart[i].style.visibility = 'hidden';
                    }
                    checked[i].classList.remove('onCart' + orderName);

                }
                this.setTotalPrice(order);

            }

        }
    }

    minusQuantity(item: Cigarette, order: Order) {
        this.onMinusQuantity.emit(item);
        if (item.quantity > 0) {
            item.quantity -= 1;
        }
        item.amount = item.quantity * item.price;
        this.setTotalPrice(order);
    }

    plusQuantity(item: Cigarette, order: Order) {
        this.onPlusQuantity.emit(item);
        item.quantity += 1;
        item.amount = item.quantity * item.price;
        this.setTotalPrice(order);
    }

    setTotalPrice(order: Order) {
        let items = order.items;
        let totalPrice = 0;
        for (let item of items) {
            totalPrice += item.amount;
        }
        return order.totalPrice = totalPrice;
    };

}
