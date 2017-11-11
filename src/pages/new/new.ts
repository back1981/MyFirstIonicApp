import { Component } from '@angular/core';
// import { FormsModule, NgForm, NgModel} from '@angular/forms'
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from '../home/home';
import { Note } from '../../app/note';
@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {  
  images:Array<string>;
  //image:string; 
  constructor(public navCtrl: NavController, private storage: Storage, private camera: Camera) {
    console.log("create new note");
    this.images = new Array();
  }

  clearForm() {
    this.images = [];
  }
  
  deleteImg(index) {
    if(confirm("Delete?")) {
      console.log("remove " + index);
      this.images.splice(index, 1);
    }
  }
  
  getPicture() {
    //  this.images.push("assets/img/demoImg.jpg");
    /** take picture by camera  */
    console.log(new Date().getTime() + " take picture");
    const options: CameraOptions = {
      quality: 0.1,
      // destinationType: this.camera.DestinationType.DATA_URL,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      // console.log(new Date().getTime() + " push image2, len=" + imageData.length);
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      // this.images.push(base64Image);
      console.log(new Date().getTime() + " push image2, path=" + imageData);
      this.images.push(imageData);
      console.log(new Date().getTime() + " push image end");
     }, (err) => {
       console.log(err);
     }); 
     console.log(new Date().getTime() + " take picture end");
  }

  showAction() {

  }

  addNewNote(form:any) {
    //alert("add new note " + form.name);
    // this.storage.set('name', form.name);
    // this.storage.get('name').then((val) => {
    //   console.log('Your name is', val);
    // });
    
    let note = new Note(form.name, form.content, this.images);
    console.log("add new note, key=" + note.name);
    this.storage.set(note.name, note);
    this.navCtrl.push(HomePage);
    // this.storage.get(form.name).then((val) => {
    //   console.log('Your name is', val.name);
    // });
  }
}
