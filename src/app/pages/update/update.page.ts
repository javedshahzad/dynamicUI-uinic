import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  data: any;

  constructor(
    private api:ApiService,
    private navCtrl: NavController,
    private route:ActivatedRoute
  ) { 
    this.route.queryParams.subscribe((res:any)=>{
      console.log(res.data);
      this.data=res.data;
      console.log(this.data);
    })
  }

  ngOnInit() {
  }
  updatedata(){
    this.api.UpdateData("dynamicUI/"+this.data.id,this.data).subscribe((res:any)=>{
      console.log(res)
      if(res.updated){
        this.api.presentToast("Updated successfull");
        this.navCtrl.navigateRoot("/home")
      }
    })
  }
}
