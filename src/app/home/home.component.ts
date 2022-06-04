import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service"
import { style, state, animate, transition, trigger, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeInGrow', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0, marginTop: 30 }),
          stagger('80ms', [
            animate('400ms ease', style({ opacity: 1, marginTop: 0 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
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
  toggleForm():void{
    this.showForm = !this.showForm;
  }
  createCat():void{
    this.apiService.createCat(this.cat).subscribe((res:any)=>{
      this.createCatSuccess = true;
      this.createCatFail = false;

      this.cat = {
        name: 'Annalis',
        age: 24,
        gender: 'Female',
        color: 'Gray'
      };
      this.showForm = false;
    },
    (error:any)=>{
      this.createCatSuccess = false;
      this.createCatFail = true;
    },
    ()=>{
      this.getCat();
      setTimeout(()=>{
        this.createCatSuccess = false;
        this.createCatFail = true;
      },4000);
    })
  }

}
