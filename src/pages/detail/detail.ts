import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Note } from '../../app/note';
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  // noteName: string;
  note: Note;

  constructor(public navCtrl: NavController, navParams: NavParams, private storage: Storage) {
    let noteName = navParams.get('noteName');
    console.log("view detail of " + noteName);
    this.loadNote(noteName);
  }

  loadNote(noteName) {
    this.storage.get(noteName).then((value) => { console.log("value is " + value); this.note = value; });
  }
}
