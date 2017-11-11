import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Note } from '../../app/note';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes:Array<any>;
  showImages:boolean;
  constructor(public navCtrl: NavController, private storage: Storage) {
    //alert(this);
    //storage.clear();
    // storage.length().then(function(len) {           
    //   this.notes = new Array();
    // }.bind(this));
    
    this.loadNotes();
    
  }

  loadNotes() {
    this.notes = new Array();
    
    // storage.clear();
    this.notes.push(new Note("Note1", "My address is XXXX", ["assets/img/demoImg.jpg"]));
    this.storage.forEach((value, key, index) => {
      console.log("Note name:" + value.name);
      console.log("Note key:" + key);
      console.log("............");
      this.notes.push(value);     
    });
  }
  deleteNote(name) {
    if(confirm("Delete?")) {
      console.log("delete note " + name);
      this.storage.remove(name);
      this.loadNotes();
    }
  }
  viewNote(name) {
    this.navCtrl.push(DetailPage, {
      "noteName":name
    });
  }
  // noteSelected(note) {
  //   alert(note);
  //   alert(note.name);
  // }

}
