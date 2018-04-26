import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {ComicDetails} from "../comic-details/comic-details";
import {HeroeDetails} from "../heroe-details/heroe-details";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(private authentication: AngularFireAuth, public navCtrl: NavController, private toast: ToastController) {

    }
    ionViewWillLoad(){

        try{
            this.authentication.authState.subscribe(data => {

                if(data && data.email && data.uid){
                    this.toast.create({
                        message:`Welcome to marvel world, ${data.email}`,
                        duration: 3000
                    }).present()
                }
            })
        }
        catch(error){
            console.log(error)
        }
    }
    comics(){
        return JSON.parse(localStorage.getItem('comics'));
    }
    heroes(){
        return JSON.parse(localStorage.getItem('heroes'));
    }
    checkComics(){
        return localStorage.getItem('comics') !== null;
    }
    checkHeroes(){
        return localStorage.getItem('heroes') !== null;
    }
    comicViewDetails(item){
        this.navCtrl.push(ComicDetails,item);
    }
    heroeViewDetails(item){
        this.navCtrl.push(HeroeDetails,item);
    }
    removeComicToFavorites(comic){

        let comics = JSON.parse(localStorage.getItem('comics'));
        comics = comics.filter( res => res.id !== comic.id);
        localStorage.setItem('comics', JSON.stringify(comics));
    }
    removeHeroeToFavorites(heroe){

        let heroes = JSON.parse(localStorage.getItem('heroes'));
        heroes = heroes.filter( res => res.id !== heroe.id);
        localStorage.setItem('heroes', JSON.stringify(heroes));
    }


}
