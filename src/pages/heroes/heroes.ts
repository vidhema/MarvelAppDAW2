import { Component, ViewChild } from '@angular/core';
import {Content} from "ionic-angular";
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {MarvelService} from "../../app/services/marvel.service";
import {HeroeDetails} from "../heroe-details/heroe-details";

@IonicPage()
@Component({
    selector: 'page-heroes',
    templateUrl: 'heroes.html'
})
export class HeroesPage {
    @ViewChild(Content) content: Content;
    heroes: any;
    page: any;
    totalHeroes:any;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private marvelService: MarvelService,
                private loadingController: LoadingController) {

        this.page = 0;
        this.totalHeroes=100;

    }
    ionViewDidLoad() {
        this.getHeroes();

    }
    scrollToTop() {
        this.content.scrollToTop();
    }
    getHeroes(){
        let loader = this.loadingController.create({
            content: 'Loading Heroes ...',
            spinner: 'circles'
        });
        loader.present().then(()=>{
            this.marvelService.getHeroes().subscribe(
                (response) => {
                    this.heroes = response.data.results;
                    this.totalHeroes=response.data.total;
                    console.log(this.heroes);
                    loader.dismiss();
                }
            );
        })
    }
    getNextPage(){
        if(this.page < parseInt(this.totalHeroes)){
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
            content: 'Loading Page '+((this.page/10)+1)+' ...',
            spinner: 'circles'
        });
        loader.present().then(()=>{
            this.marvelService.getPageHeros(this.page.toString()).subscribe(
                (response) => {
                    this.heroes = response.data.results;
                    loader.dismiss();
                    this.scrollToTop();
                }
            );
        })
    }
    viewDetails(item){
        this.navCtrl.push(HeroeDetails,item);
    }
}
