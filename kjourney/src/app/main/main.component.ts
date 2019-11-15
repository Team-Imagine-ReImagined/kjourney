import { Component, OnInit } from '@angular/core'
import { DataService } from '../data.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private data: DataService;
  public userInfo: UserInfo[];
  public hierarchy: Hierarchy[];


  constructor(data: DataService) {
    this.data = data;
  }

  async ngOnInit() {
    this.data.getUserInfo().subscribe((info:any) => {
      this.userInfo = info;
      this.data.getHierarchy(info[0].bandID).subscribe((h:any) => {
        this.hierarchy = h;
      });
    });
    
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Hierarchy } from 'src/models/hierarchy';
import { UserInfo } from 'src/models/userInfo';
@Pipe({
    name: 'filterUnique',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        // Remove the duplicate elements
        var art = value.map(x=>{
            return x.ArticleTags.map(y=>{ return y.value;});;
        }).reduce((acc,ele,i)=>{
            acc = acc.concat(ele);
            return acc;
        });
        return new Set(art);
    }
}