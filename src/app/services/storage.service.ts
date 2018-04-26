import {Injectable} from "@angular/core";
import {AlertController} from 'ionic-angular';
import 'rxjs/Rx';
@Injectable()
export class FavoriteService {

    constructor(private alertCtrl: AlertController){

    }
    addComicToFavorites(comic){
        if(!this.comicIsInFavorites(comic)){
            if(localStorage.getItem('comics') === null ){
                let array = [];
                array.push(comic);
                localStorage.setItem("comics",JSON.stringify(array))
            }else{
                let array = JSON.parse(localStorage.getItem('comics'));
                array.push(comic);
                localStorage.setItem("comics",JSON.stringify(array))
            }
        }
    }
    comicIsInFavorites(comic){
        if (this.searchComic(comic)) {
            let alert = this.alertCtrl.create({
                title: 'Attention',
                subTitle: '\n' +
                'This comic is already in favorites',
                buttons: ['OK']
            });
            alert.present();
            return true;
        }
        return false;
    }
    searchComic(comic){
        if(localStorage.getItem('comics') !== null){
            let array = JSON.parse(localStorage.getItem('comics'));
            return array.find(response => response.id === comic.id) !== undefined;
        }else{
            return false;
        }
    }
    addHeroeToFavorites(heroe){
        if(!this.heroeIsInFavorites(heroe)){
            heroe.favorite=true;
            if(localStorage.getItem('heroes') === null ){
                let array = [];
                array.push(heroe);
                localStorage.setItem("heroes",JSON.stringify(array))
            }else{
                let array = JSON.parse(localStorage.getItem('heroes'));
                array.push(heroe);
                localStorage.setItem("heroes",JSON.stringify(array))
            }
        }
    }
    heroeIsInFavorites(heroe){
        if (this.searchHeroe(heroe)) {
            let alert = this.alertCtrl.create({
                title: 'Attention',
                subTitle: '\n' +
                'This heroe is already in favorites',
                buttons: ['OK']
            });
            alert.present();
            return true;
        }
        return false;
    }
    searchHeroe(heroe){
        if(localStorage.getItem('heroes') !== null){
            let array = JSON.parse(localStorage.getItem('heroes'));
            return array.find(response => response.id === heroe.id) !== undefined;
        }else{
            return false;
        }
    }

}
