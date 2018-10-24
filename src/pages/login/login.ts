import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
email;
password;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
//login(){
 // firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(User =>{
   // this.navCtrl.push("HomePage")
     
  // })
////}

register(){
  this.navCtrl.push("RegisterPage");
}
google(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(User =>{
    this.navCtrl.push("HomePage");
  })
}
reset(){
  this.navCtrl.push("ResetPage");
 }

}



