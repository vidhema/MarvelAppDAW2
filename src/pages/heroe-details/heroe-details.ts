import { Component, ViewChild } from '@angular/core';
import {Content} from "ionic-angular";
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ComicsHeroePage} from "../comics-heroe/comics-heroe";
import {FavoriteService} from "../../app/services/storage.service";

@IonicPage()
@Component({
    selector: 'page-heroe-details',
    templateUrl: 'heroe-details.html'
})
export class HeroeDetails {
    @ViewChild(Content) content: Content;
    heroe: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private favoriteService: FavoriteService) {
        this.heroe = this.navParams.data;
    }
    sendHeroeID(id,name){
        let items = {
            id: id,
            name: name
        };
        this.navCtrl.push(ComicsHeroePage,items);
    }
    addToFavorites(heroe){
        this.favoriteService.addHeroeToFavorites(heroe);
    }
}
