import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, Platform} from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ComicsPage} from '../pages/comics/comics';
import {HeroesPage} from '../pages/heroes/heroes';
import {ComicDetails} from '../pages/comic-details/comic-details';
import {HeroeDetails} from "../pages/heroe-details/heroe-details";
import {HeroesComicPage} from "../pages/heroes-comic/heroes-comic";
import {ComicsHeroePage} from "../pages/comics-heroe/comics-heroe";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth"
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {FIREBASE_CONFIG} from "../assets/data/firebase.config";
import {RegisterPage} from "../pages/register/register";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ComicsPage,
        HeroesPage,
        ComicDetails,
        HeroeDetails,
        HeroesComicPage,
        ComicsHeroePage,
        LoginPage,
        RegisterPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule,
        AngularFireModule.initializeApp(FIREBASE_CONFIG),
        AngularFireAuthModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ComicsPage,
        HeroesPage,
        ComicDetails,
        HeroeDetails,
        HeroesComicPage,
        ComicsHeroePage,
        LoginPage,
        RegisterPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
