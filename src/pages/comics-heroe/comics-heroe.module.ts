import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComicsHeroePage } from './comics-heroe';

@NgModule({
    declarations: [
        ComicsHeroePage,
    ],
    imports: [
        IonicPageModule.forChild(ComicsHeroePage),
    ],
})
export class ComicsHeroeModule {}
