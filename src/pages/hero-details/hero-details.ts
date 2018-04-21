import { Component, ViewChild } from '@angular/core';
import {Content} from "ionic-angular";
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ComicsHeroePage} from "../comics-heroe/comics-heroe";

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
    sendHeroeID(id,name){
        console.log(id);
        let items = {
            id: id,
            name: name
        };
        this.navCtrl.push(ComicsHeroePage,items);
    }

}
