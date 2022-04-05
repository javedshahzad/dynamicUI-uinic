import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl=environment.baseURL;
  constructor(
    private http: HttpClient,
    private toastController:ToastController
  ) { }

  getData(url) {
    let header = new HttpHeaders();
    // header = header.set("Authorization", "Bearer " + this.userToken);
    header = header.set("Accept", "application/json");
    return this.http.get(this.baseUrl + url, { headers: header });
  }

  postData(url, data) {
    let header = new HttpHeaders();
    // header = header.set("Authorization", "Bearer " + this.userToken);
    header = header.set("Accept", "application/json");
    return this.http.post(this.baseUrl + url, data, { headers: header });
  }
  DeleteData(url) {
    let header = new HttpHeaders();
    // header = header.set("Authorization", "Bearer " + this.userToken);
    header = header.set("Accept", "application/json");
    return this.http.delete(this.baseUrl + url, { headers: header });
  }

  
  UpdateData(url, data) {
    let header = new HttpHeaders();
    // header = header.set("Authorization", "Bearer " + this.userToken);
    header = header.set("Accept", "application/json");
    return this.http.put(this.baseUrl + url, data, { headers: header });
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color:"secondary"
    });
    toast.present();
  }
}
