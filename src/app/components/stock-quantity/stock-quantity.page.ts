import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-stock-quantity',
  templateUrl: './stock-quantity.page.html',
  styleUrls: ['./stock-quantity.page.scss'],
})
export class StockQuantityPage implements OnInit {

   // "value" passed in componentProps
   @Input() stockName: string;
   @Input() stockQty: number;
   @Input()totalStck: number;
   public countExceed:boolean = false;
  constructor(navParams: NavParams,public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModel() {
    if(this.stockQty<=this.totalStck){
    const dat = {stockName: this.stockName, stockQty : this.stockQty }
    this.modalCtrl.dismiss(dat);
    }else{
          this.countExceed = true;
    }
  }


}
