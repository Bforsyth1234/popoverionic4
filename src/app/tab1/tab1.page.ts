import { Component } from '@angular/core';
import { PopovercomponentComponent } from '../popovercomponent/popovercomponent.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public popoverController: PopoverController) {}

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: PopovercomponentComponent,
      componentProps: {
        test: 'test'
      },
      translucent: true
    });
    return await popover.present();
  }

}
