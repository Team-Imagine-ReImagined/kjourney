import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hierarchy-view',
  templateUrl: './hierarchy-view.component.html',
  styleUrls: ['./hierarchy-view.component.css']
})
export class HierarchyViewComponent implements OnInit {

  constructor() { }

  data = [
    {
      ID: 27,
      name: 'Software Engineer',
      summary: 'Here primarily to learn, contributes to projects.',
      link: 'www.google.com',
      jobFamID: 4,
      bandID: 9
    }
  ];

  ngOnInit() {
    for (let i = 0; i <= this.data[0].bandID; i++) {

    }
  }

}
