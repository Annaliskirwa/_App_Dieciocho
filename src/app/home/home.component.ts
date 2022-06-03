import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiService:ApiService
  ) { }

  ngOnInit(): void {
    this.getCat();
  }
  getCat():void{
    this.apiService.getAllCats().subscribe(
      (res:any)=>{
        console.log(res);
      },
      (error:any)=>{
        console.log("no cat")

      }
    )
  }

}
