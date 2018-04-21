import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {HeroeDetails} from "./heroe-details";

@NgModule({
    declarations: [
        HeroeDetails,
    ],
    imports: [
        IonicPageModule.forChild(HeroeDetails),
    ],
})
export class HeroeDetailsModule {}
