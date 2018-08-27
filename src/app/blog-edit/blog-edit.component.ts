import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
public currentBlog;
public possibleCategories =["comedy","action","technology"]
  constructor() { }

  ngOnInit() {
  }

}
