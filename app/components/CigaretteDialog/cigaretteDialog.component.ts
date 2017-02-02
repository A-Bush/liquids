import {Component, Input} from "@angular/core";
import {Cigarette} from "../../Model/cigarettes";

@Component({

    moduleId: module.id,
    selector: 'cigarette-dialog',
    templateUrl: '../CigaretteDialog/cigaretteDialog.component.html',
    styleUrls:['cigaretteDialog.component.css']
})
export class CigaretteDialogComponent {
    @Input() cigarette: Cigarette;

    /*constructor (public dialogRef: MdDialogRef<CigaretteDialogComponent>){}*/
}
