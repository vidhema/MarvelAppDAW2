import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";

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


}
