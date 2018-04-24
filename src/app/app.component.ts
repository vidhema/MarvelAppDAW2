import { Component, ViewChild } from '@angular/core';
import {AlertController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {ComicsPage} from "../pages/comics/comics";
import {HeroesPage} from "../pages/heroes/heroes";
import {MarvelService} from "./services/marvel.service";
import {LoginPage} from "../pages/login/login";
import {AngularFireAuth} from "angularfire2/auth";
import {FavoriteService} from "./services/storage.service";

@Component({
    templateUrl: 'app.html',
    providers:[MarvelService, FavoriteService]
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage: any = LoginPage;

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                private authentication: AngularFireAuth,
                private alertCtrl: AlertController) {
        this.initializeApp();

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    goToHome(){
        this.nav.setRoot(HomePage);
    }

    goToComicsPage(){
        this.nav.push(ComicsPage);
    }
    goToHeroesPage(){
        this.nav.push(HeroesPage);
    }
    logOut(){
        let alert = this.alertCtrl.create({
            title: 'Confirm Sign Out',
            message: 'Do you want Sign Out?' +
            '\n everything saved will be lost',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Sign Out',
                    handler: () => {
                        this.authentication.auth.signOut();
                        localStorage.clear();
                        this.nav.setRoot(LoginPage);
                    }
                }
            ]
        });
        alert.present();
    }
    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}


