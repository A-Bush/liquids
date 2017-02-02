import {Component, Input, Output} from "@angular/core";

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

    constructor (public dialog: MdDialog){
    }

    openDialog() {
        let dialogRef = this.dialog.open(CigaretteDialogComponent);

    }
}