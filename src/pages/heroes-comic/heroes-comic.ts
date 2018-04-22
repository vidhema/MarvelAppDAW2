import { Component, ViewChild } from '@angular/core';
import {Content} from "ionic-angular";
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {MarvelService} from "../../app/services/marvel.service";
import {HeroeDetails} from "../heroe-details/heroe-details";
import {FavoriteService} from "../../app/services/storage.service";

@IonicPage()
@Component({
    selector: 'page-heroes-comic',
    templateUrl: 'heroes-comic.html'
})
export class HeroesComicPage {
    @ViewChild(Content) content: Content;
    comicName:any;
    comicID: any;
    heroes: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private marvelService: MarvelService,
                private loadingController: LoadingController,
                private favoriteService: FavoriteService) {
        this.comicName = this.navParams.data.name;
        this.comicID = this.navParams.data.id;

    }
    ionViewDidLoad() {
        this.getHeroes();

    }
    getHeroes(){
        let loader = this.loadingController.create({
            content: 'Loading Heroes ...',
            spinner: 'circles'
        });
        loader.present().then(()=>{
            this.marvelService.getHeroesByComicID(this.comicID).subscribe(
                (response) => {
                    this.heroes = response.data.results;
                    loader.dismiss();
                }
            );
        })
    }
    viewDetails(item){
        this.navCtrl.push(HeroeDetails,item);
    }
    addToFavorites(heroe){
        this.favoriteService.addHeroeToFavorites(heroe);
    }

}
