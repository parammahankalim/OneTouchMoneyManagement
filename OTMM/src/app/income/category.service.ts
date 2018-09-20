import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class CategoryService{
constructor(private db: AngularFireDatabase) {}
getCategories()
  {
    return this.db.list('/SOURCE_CATEGORY',{query:{orderByChild: 'ctg_nm'}});
  }
}



