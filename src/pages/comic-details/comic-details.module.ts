import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComicDetails } from './comic-details';

@NgModule({
    declarations: [
        ComicDetails,
    ],
    imports: [
        IonicPageModule.forChild(ComicDetails),
    ],
})
export class ComicsPageModule {}
