import {Component, Input, OnInit} from "@angular/core";
import {Cigarette} from "../../Model/cigarettes";
import {Order} from "../../Model/order";
import {MainServiceComponent} from "../../Service/mainService.component";

@Component({

    moduleId: module.id,
    selector: 'cigarette-dialog',
    templateUrl: '../CigaretteDialog/cigaretteDialog.component.html',
    styleUrls:['cigaretteDialog.component.css']
})
export class CigaretteDialogComponent implements OnInit{
    private orders:Order[];

    ngOnInit():void {
        this.getOrders();
    }

    constructor (private mainService: MainServiceComponent) {
    }

    getOrders(){
        this.orders = this.mainService.getOrders();
        return this.orders;
    }
    /*constructor (public dialogRef: MdDialogRef<CigaretteDialogComponent>){}*/
}
