import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: any;
  item: any;

  constructor(
    private api:ApiService,
    private navCtrl: NavController,
    private route:ActivatedRoute
  ) { 
    this.route.queryParams.subscribe((res:any)=>{
      this.id=res.id;
      this.getSinglerecord(this.id);
    })
  }

  ngOnInit() {
  }
  getSinglerecord(id){
    this.api.getData("dynamicUI/"+id).subscribe((res)=>{
      console.log(res)
    if(res){
      this.item=res;
    }
    })
  }
  back(){
    this.navCtrl.back();
  }
}
