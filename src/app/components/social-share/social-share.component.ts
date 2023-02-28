import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { ModalController } from '@ionic/angular';
import { TestimoniosPage } from 'src/app/testimonios/testimonios.page';
@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss'],
})
export class SocialShareComponent implements OnInit {
  public sharingList = environment.socialShareOption;
  loader: any = null;
  // eslint-disable-next-line max-len
  sharingText =
    'You can download our app from playstore or use this link to download the app. And you can share awesome coupons with your loved once, Thank you';
  emailSubject = 'Download Apps';
  recipent = ['recipient@example.org'];
  sharingImage = [
    'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg',
  ];
  public sharingUrl = 'https://store.enappd.com';

  constructor(
    private modal: ModalController,
    private testimoniosPage: TestimoniosPage
  ) {}

  ngOnInit() {
    this.sharingUrl = this.testimoniosPage.geturl();
    this.sharingText = this.testimoniosPage.getText();
  }

  closeModal() {
    this.modal.dismiss();
  }

  async shareVia(shareData) {
    //console.log('shareType', shareData.shareType);
    if (shareData.shareType === 'viaEmail') {
      //console.log(' redirecionar con lin a mail', shareData.shareType);
    }

    if (shareData.shareType === 'shareViaWhatsApp') {
      //console.log(' redirecionar con lin a mail', shareData.shareType+this.sharingUrl+this.testimoniosPage.geturl());
      window.open(
        'https://api.whatsapp.com/send?text=' +
          this.sharingText +
          ' ' +
          this.sharingUrl,
        '_system',
        'location=yes'
      );
    }

    if (shareData.shareType === 'viaEmail') {
      // eslint-disable-next-line max-len
      window.open(
        'mailto:?subject=' + this.sharingText + '&body=' + this.sharingUrl,
        '_system',
        'location=yes'
      );
    }

    if (shareData.shareType === 'shareViaFacebook') {
      window.open(
        'http://www.facebook.com/sharer.php?u=' + this.sharingUrl,
        '_system',
        'location=yes'
      );
    }

    if (shareData.shareType === 'shareViaTwitter') {
      // eslint-disable-next-line max-len
      window.open(
        'http://www.twitter.com/share?url=' + this.sharingUrl,
        '_system',
        'location=yes'
      );
    }

    this.modal.dismiss();
  }
}
