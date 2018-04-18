import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {ComicsPage} from "../pages/comics/comics";
import {HeroesPage} from "../pages/heroes/heroes";
import {MarvelService} from "./services/marvel.service";
import {Keys} from "../assets/data/keys";

@Component({
    templateUrl: 'app.html',
    providers:[MarvelService,Keys]
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen) {
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
    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}


