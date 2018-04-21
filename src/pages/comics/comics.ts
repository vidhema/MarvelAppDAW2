import { Component, ViewChild } from '@angular/core';
import {Content} from "ionic-angular";
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {ComicDetails} from "../comic-details/comic-details";
import {MarvelService} from "../../app/services/marvel.service";

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-comics',
    templateUrl: 'comics.html'
})
export class ComicsPage {
    @ViewChild(Content) content: Content;
    comics: any;
    page: any;
    totalComics:any;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private marvelService: MarvelService,
                private loadingController: LoadingController) {

        this.page = 0;
        this.totalComics=100;

    }
    ionViewDidLoad() {
        this.getComics();

    }
    scrollToTop() {
        this.content.scrollToTop();
    }
    getComics(){
        let loader = this.loadingController.create({
            content: 'Loading Comics ...',
            spinner: 'circles'
        });
        loader.present().then(()=>{
            this.marvelService.getComics().subscribe(
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
            content: 'Loading Page '+((this.page/10)+1)+' ...',
            spinner: 'circles'
        });
        loader.present().then(()=>{
            this.marvelService.getPageComics(this.page.toString()).subscribe(
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
    itemTapped(item){
        this.navCtrl.push(HomePage,item);
    }
}
