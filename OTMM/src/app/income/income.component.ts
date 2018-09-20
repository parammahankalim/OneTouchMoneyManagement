import { Component, OnInit, Input } from '@angular/core';
import { CategoryService }  from './category.service';

@Component({
  selector:   'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']   
  })
  
export class IncomeComponent implements OnInit {
categories$;
constructor(categoryService: CategoryService) { 
  this.categories$=categoryService.getCategories(); //because categories are ) 
   }
 ngOnInit() {}
   }
   
 
 
 















