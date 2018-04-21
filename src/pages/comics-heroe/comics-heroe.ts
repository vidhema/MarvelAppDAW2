import { Component, ViewChild } from '@angular/core';
import {Content} from "ionic-angular";
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {ComicDetails} from "../comic-details/comic-details";
import {MarvelService} from "../../app/services/marvel.service";

@IonicPage()
@Component({
    selector: 'page-comics-heroe',
    templateUrl: 'comics-heroe.html'
})
export class ComicsHeroePage {
    @ViewChild(Content) content: Content;
    comics: any;
    page: any;
    totalComics:any;
    heroeName:any;
    heroeID:any;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private marvelService: MarvelService,
                private loadingController: LoadingController) {
        this.heroeName = this.navParams.data.name;
        this.heroeID = this.navParams.data.id;
        console.log(this.heroeName, this.heroeID);
        this.page = 0;
    }
    ionViewDidLoad() {
        this.getComics();
    }
    scrollToTop() {
        this.content.scrollToTop();
    }
    getComics(){
        let loader = this.loadingController.create({
            content: 'Loading '+this.heroeName+' Comics...',
            spinner: 'circles'
        });
        loader.present().then(()=>{
            this.marvelService.getComicsByHeroID(this.heroeID).subscribe(
                (response) => {
                    this.comics = response.data.results;
                    this.totalComics=response.data.total;
                    console.log(this.comics);
                    loader.dismiss();
                }
            );
        })
    }
    getNextPage(){
        if(this.page < parseInt(this.totalComics)){
            this.page=this.page+10;
            this.loadPage();
        }
    }
    getPrevPage(){
        if(this.page >= 10){
            this.page=this.page-10;
            this.loadPage();
        }

    }
    loadPage(){
        let loader = this.loadingController.create({
            content: 'Loading '+this.heroeName+' Comic Page '+((this.page/10)+1)+' ...',
            spinner: 'circles'
        });
        loader.present().then(()=>{
            this.marvelService.getPageComicsByHero(this.heroeID.toString(),this.page.toString()).subscribe(
                (response) => {
                    this.comics = response.data.results;
                    loader.dismiss();
                    this.scrollToTop();
                }
            );
        })
    }
    viewDetails(item){
        this.navCtrl.push(ComicDetails,item);
    }
}
