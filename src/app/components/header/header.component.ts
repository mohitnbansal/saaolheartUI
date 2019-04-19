import { ToolpopComponent } from './../toolpop/toolpop.component';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { MenuController, PopoverController } from '@ionic/angular';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[]
})
export class HeaderComponent implements OnInit , AfterViewInit{
  public menuBool;
   articleSub: Subscription;
  constructor(public menu: MenuController,
    public dashboardService:DashboardService,
    public popoverController:PopoverController) {
      console.log("iasd")
     }

  ngOnInit() {
    console.log("iasd")
   

}
ngAfterViewInit(){
  console.log("iasd")
  this.articleSub = this.dashboardService.navItem$.subscribe((res)=>
  {
    console.log("iasd")
    this.menuBool = res;
  });
  //this.dashboardService.getMessage().subscribe();
}


toggleMenu(){
  let bool : boolean;
  this.menu.isEnabled('main').then((res)=>{
    console.log(res);
    bool = !res;
    this.menu.enable(bool, 'main');
  });
  
  
    }

    async presentPopover(ev: any) {
      const popover = await this.popoverController.create({
        component: ToolpopComponent,
        event: ev,
        translucent: true,
      
      });
      return await popover.present();
    }
}