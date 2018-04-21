import { Component, ViewChild } from '@angular/core';
import {Content} from "ionic-angular";
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-hero-details',
    templateUrl: 'hero-details.html'
})
export class HeroDetails {
    @ViewChild(Content) content: Content;
    hero: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {
        this.hero = this.navParams.data;
        console.log(this.hero);
    }

}
