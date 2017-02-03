import {Component, OnInit} from "@angular/core";
import {MainServiceComponent} from "../../Service/mainService.component";
import {Cigarette} from "../../Model/cigarettes";

@Component({
    moduleId: module.id,
    selector: 'cigarettes-list',
    templateUrl: 'cigaretteList.component.html',
    styleUrls: ['cigaretteList.component.css']
})

export class CigaretteListComponent implements OnInit {
    cigarettes: Cigarette[];

    constructor (private mainService: MainServiceComponent){
    }
    ngOnInit():void {
    this.mainService.getCigarettes().then(cigarettes => this.cigarettes = cigarettes);
    }


    addItemToOrder(item:Cigarette){
        this.mainService.addItemToOrder(item);
    }
}