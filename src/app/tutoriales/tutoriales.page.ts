import { Component, OnInit } from '@angular/core';
import { VideoComponent } from '../modals/video/video.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.page.html',
  styleUrls: ['./tutoriales.page.scss'],
})
export class TutorialesPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: VideoComponent,
      cssClass:"modal-transparent"
    });
    return await modal.present();
  }

}
