import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Groceries"


  constructor(public toastController: ToastController, public alertController: AlertController, public dataService:GroceriesServiceService, public inputDialogService:InputDialogServiceService) {}

loadItems() {
  return this.dataService.getItems();
}

  async removeItem(item, index) {
    const toast = await this.toastController.create({
      message: `Removing ${item.name}, ${index}`,
      duration: 2000
    });
    toast.present();
    this.dataService.removeItem(index);
  }

  async editItem(item, index) {
    const toast = await this.toastController.create({
      message: `Editing ${item.name}, ${index}`,
      duration: 2000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }

  addItem() {
    console.log("Adding Item");
    this.inputDialogService.showPrompt();
  }
}
