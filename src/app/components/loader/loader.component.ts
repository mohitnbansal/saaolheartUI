import { LoaderState } from './../../interfaces/loaderstate';
import { LoaderService } from './../../services/loader/loader.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { trackByHourSegment } from 'angular-calendar/modules/common/util';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent  implements OnInit , OnDestroy {
  show = false;
  private subscription: Subscription;
  private loading;
  constructor(private loaderService: LoaderService,
    public loadingCtrl:LoadingController) { }
  ngOnInit() {
    this.subscription = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
      this.show = state.show;
});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
