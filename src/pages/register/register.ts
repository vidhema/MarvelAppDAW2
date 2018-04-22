import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {User} from "../../models/user";
import {AngularFireAuth} from "angularfire2/auth";
import {LoginPage} from "../login/login";

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    user = {} as User;
    constructor(private authentication: AngularFireAuth,
                public navCtrl: NavController,
                public navParams: NavParams,
                private toast: ToastController) {
    }

    async registerUser(user: User){
        try{
            const result = await this.authentication.auth.createUserWithEmailAndPassword(user.email.toString(),user.password.toString());
            if(result){
                this.navCtrl.push(LoginPage);
            }
        }
        catch (error){
            this.toast.create({
                message:error.message,
                duration: 3000
            }).present()
        }
    }

}
