import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-new-record',
  templateUrl: './add-new-record.page.html',
  styleUrls: ['./add-new-record.page.scss'],
})
export class AddNewRecordPage implements OnInit {
  data:any={};
  constructor(
    private api:ApiService,
    private navCtrl: NavController,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
  }
  addnew(){
this.api.postData("dynamicUI",this.data).subscribe((res:any)=>{
  if(res.id){
    this.api.presentToast("Added successfull");
    this.navCtrl.navigateRoot("/home")
  }
})
  }
}
