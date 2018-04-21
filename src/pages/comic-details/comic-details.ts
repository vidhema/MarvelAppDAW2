import { Component, ViewChild } from '@angular/core';
import {Content} from "ionic-angular";
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";

@IonicPage()
@Component({
    selector: 'page-comic-details',
    templateUrl: 'comic-details.html'
})
export class ComicDetails {
    @ViewChild(Content) content: Content;
    comic: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {
        this.comic = this.navParams.data;
        console.log(this.comic);


    }
    ionViewDidLoad() {


    }

    itemTapped(item){
        this.navCtrl.push(HomePage,item);
    }
}
