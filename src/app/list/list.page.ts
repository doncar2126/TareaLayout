import { Component, OnInit } from '@angular/core';
import { VideoComponent } from '../modals/video/video.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public sw:boolean = false;

  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(
    private modalController:ModalController
  ) {
    for (let i = 1; i < 8; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  async presentModal() {
    this.closeVideo();
    const modal = await this.modalController.create({
      component: VideoComponent,
      cssClass:"modal-transparent"
    });
    return await modal.present();
  }

  closeVideo() {
    this.sw = true;
  }
}
