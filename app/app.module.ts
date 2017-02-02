import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {MainServiceComponent} from "./Service/mainService.component";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {CigarettesData} from "./Data/cigarettesData";
import {CigaretteListComponent} from "./components/CigaretteList/cigaretteList.component";
import {CigaretteComponent} from "./components/Cigarette/cigarette.component";
import {MaterialModule} from "@angular/material";
import {CigaretteDialogComponent} from "./components/CigaretteDialog/cigaretteDialog.component";


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(CigarettesData),
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        CigaretteListComponent,
        CigaretteComponent,
        CigaretteDialogComponent
    ],
    entryComponents: [CigaretteDialogComponent],
    bootstrap: [AppComponent],
    providers: [MainServiceComponent]
})

export class AppModule{}