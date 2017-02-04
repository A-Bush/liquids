import {Component, Input, Output, EventEmitter} from "@angular/core";

import {Cigarette} from "../../Model/cigarettes";
import {MdDialog} from "@angular/material";
import {CigaretteDialogComponent} from "../CigaretteDialog/cigaretteDialog.component";


@Component({
    moduleId: module.id,
    selector: 'cigarette-app',
    templateUrl: 'cigarette.component.html',
    styleUrls: ['cigarette.component.css']
})
export class CigaretteComponent {
    @Input() cigarette: Cigarette;
    @Output() onOrdered = new EventEmitter();


    constructor(public dialog: MdDialog) {

    }

    openDialog() {
        let dialogRef = this.dialog.open(CigaretteDialogComponent);
    }

    order() {
        this.onOrdered.emit(this.cigarette);
        this.cigarette.quantity = 1;
        this.cigarette.amount = this.cigarette.price;
        this.cigarette.onCart = true;
        let checked:any = document.getElementsByClassName("md-ripple-active");
        for (let i = 0; i < checked.length; ++i) {
            let check = checked[i].parentElement.parentElement;
            check.setAttribute('disabled', 'true');
            check.classList.add('onCart' + this.cigarette.name);
            let goToCart = check.parentElement.getElementsByClassName('go-to-cart');
            for(let i = 0; i< goToCart.length; ++i) {
                goToCart[i].style.visibility = 'visible';
            }
        }

    }

}