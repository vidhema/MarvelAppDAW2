import { Component, ViewChild } from '@angular/core';
import {Content} from "ionic-angular";
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {MarvelService} from "../../app/services/marvel.service";
import {HeroDetails} from "../hero-details/hero-details";

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
                private loadingController: LoadingController) {
        this.comicName = this.navParams.data.name;
        this.comicID = this.navParams.data.id;
        console.log(this.comicName, this.comicID);

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
                    console.log(this.heroes);
                    loader.dismiss();
                }
            );
        })
    }
    viewDetails(item){
        this.navCtrl.push(HeroDetails,item);
    }

}
