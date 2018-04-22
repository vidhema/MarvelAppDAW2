import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams,ToastController} from 'ionic-angular';
import {User} from "../../models/user";
import {RegisterPage} from "../register/register";
import {AngularFireAuth} from "angularfire2/auth"
import {HomePage} from "../home/home";

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    user = {} as User;
    loginError: String;
    constructor(private authentication: AngularFireAuth,
                public navCtrl: NavController,
                public navParams: NavParams,
                private toast: ToastController) {
    }

    loginUser(user: User){
        this.authentication.auth.signInWithEmailAndPassword(user.email.toString(), user.password.toString())
            .then(
                () => this.navCtrl.setRoot(HomePage),
                error => {
                    this.loginError = error.message
                    this.toast.create({
                        message:`Could not find User`,
                        duration: 3000
                    }).present()
                }
            )
    }
    registerUser(){
        this.navCtrl.push(RegisterPage)
    }
}
