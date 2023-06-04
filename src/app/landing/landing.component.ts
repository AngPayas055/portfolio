import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  warning:boolean = false

  openWraning(){
    if(this.warning == true){
       this.warning = false
       return
    }
    this.warning = true;
    setTimeout(() => {
      this.warning = false;
    }, 2000);
  }
}
