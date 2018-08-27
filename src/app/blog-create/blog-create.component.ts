import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService,private _route:ActivatedRoute,private router: Router) {

   }

  public blogtitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"]

  ngOnInit() {
   
  }
  public createBlog(): any {
    let blogData = {
      title: this.blogtitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory

    }
    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log("blog created");
        console.log(data);
        
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        },1000);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        alert("some error occured");
      }
    )
  }

}
