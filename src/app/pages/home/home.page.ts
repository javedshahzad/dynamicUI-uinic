import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  uidata: any=[];

  constructor(
    private api:ApiService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.getdata();
  }
getdata(){
  this.api.getData("dynamicUI").subscribe((res:any)=>{
    console.log(res)
    if(res.data){
      this.uidata=res.data;
    }
  })
}
delete(id){
  var content = confirm("Are you sure to delete this id "+id); // The "hello" means to show the following text
if (content === true) {
    // Do whatever if the user clicked ok.
  this.api.DeleteData("dynamicUI/"+id).subscribe((res:any)=>{
    console.log(res);
    if(res.deleted){
      this.api.presentToast("Deleted success");
      this.getdata();
    }
  })

} else {
  this.api.presentToast("Not deleted.Saved!");
  // Do whatever if the user clicks cancel.
}

}
update(data){
  this.navCtrl.navigateForward("/update",{queryParams:{"data":data}})
}
addnew(){
  this.navCtrl.navigateForward("/add-new-record")
}
details(id){
  this.navCtrl.navigateForward("/details",{queryParams:{"id":id}});
}
}
