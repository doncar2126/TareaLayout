import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {

  constructor(
    public modalController:ModalController
  ) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }

}
