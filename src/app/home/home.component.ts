import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cats: any[] = [];
  showForm = false;
  createCatSuccess = false;
  createCatFail = false;
  cat = {
    name: 'Annalis',
    age: 24,
    gender: 'Female',
    color: 'Gray'
  };

  constructor(
    private apiService:ApiService
  ) { }

  ngOnInit(): void {
    this.getCat();
  }
  getCat():void{
    this.apiService.getAllCats().subscribe(
      (res:any)=>{
        // console.log(res);
        this.cats = res;
      },
      (error:any)=>{
        console.log("no cat")

      }
    )
  }
  toogleForm():void{
    this.showForm = !this.showForm;
  }

}
