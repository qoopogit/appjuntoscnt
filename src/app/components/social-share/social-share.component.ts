import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { ModalController } from '@ionic/angular';
 import { SocialSharing } from '@awesome-cordova-plugins/social-sharing';
@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss'],
})
export class SocialShareComponent implements OnInit {

  public sharingList = environment.socialShareOption;
  loader: any = null;
  // eslint-disable-next-line max-len
  sharingText = 'You can download our app from playstore or use this link to download the app. And you can share awesome coupons with your loved once, Thank you';
  emailSubject = 'Download Apps';
  recipent = ['recipient@example.org'];
  sharingImage = ['https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg'];
  sharingUrl = 'https://store.enappd.com';

  constructor( private modal: ModalController ) {



  }

  ngOnInit() {}

  closeModal() {
    this.modal.dismiss();
  }
  async shareVia(shareData) {

      console.log('shareType', shareData.shareType);
    if (shareData.shareType === 'viaEmail')
      {
        console.log(' redirecionar con lin a mail', shareData.shareType);
      }


      if (shareData.shareType === 'shareViaWhatsApp')
      {
        console.log(' redirecionar con lin a mail', shareData.shareType);
        window.open('https://api.whatsapp.com/send?text=http://dimater.com', '_system', 'location=yes');
      }

    this.modal.dismiss();
  }




}
