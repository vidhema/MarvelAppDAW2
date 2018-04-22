import { Component, ViewChild } from '@angular/core';
import {Content} from "ionic-angular";
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HeroesComicPage} from "../heroes-comic/heroes-comic";
import {FavoriteService} from "../../app/services/storage.service";

@IonicPage()
@Component({
    selector: 'page-comic-details',
    templateUrl: 'comic-details.html'
})
export class ComicDetails {
    @ViewChild(Content) content: Content;
    comic: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private favoriteService: FavoriteService) {
        this.comic = this.navParams.data;
        console.log(this.comic);

    }

    sendHeroToHeroDetails(id,name){
        console.log(id);
        let items = {
            id: id,
            name: name
        };
        this.navCtrl.push(HeroesComicPage,items);

    }
    addToFavorites(comic){
        this.favoriteService.addComicToFavorites(comic);
    }

}
