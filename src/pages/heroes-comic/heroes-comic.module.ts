import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {HeroesComicPage} from "./heroes-comic";

@NgModule({
    declarations: [
        HeroesComicPage,
    ],
    imports: [
        IonicPageModule.forChild(HeroesComicPage),
    ],
})
export class HeroesComicModule {}
