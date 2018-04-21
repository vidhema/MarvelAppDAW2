import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {HeroDetails} from "./hero-details";

@NgModule({
    declarations: [
        HeroDetails,
    ],
    imports: [
        IonicPageModule.forChild(HeroDetails),
    ],
})
export class HeroDetailsModule {}
