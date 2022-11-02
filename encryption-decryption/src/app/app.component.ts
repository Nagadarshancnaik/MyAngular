import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'encryption-decryption';
  public message: string ='';

  public key: string ='' ;

  public encryptedMessage: string ='';

  public decryptedMessage: string ='';

  encrypt() {

   this.encryptedMessage = CryptoJS.AES.encrypt( this.message.trim(), this.key.trim()).toString();

  }

  decrypt(){

    this.decryptedMessage = CryptoJS.AES.decrypt( this.encryptedMessage,  this.key.trim() ).toString(CryptoJS.enc.Utf8);



  }
}
