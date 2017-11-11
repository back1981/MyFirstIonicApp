import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NewPage } from '../new/new';
// import { DeletePage } from '../delete/delete';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = NewPage;
  // tab5Root = DeletePage;

  constructor() {
  }

  clearForm() {
    console.log("clear new form");
  }
}
