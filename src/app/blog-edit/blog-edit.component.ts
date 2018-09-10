import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
public currentBlog;
public possibleCategories =["comedy","action","technology"]
  
constructor(private blogHttpService: BlogHttpService,private _route:ActivatedRoute,private router: Router) {

}
  ngOnInit() {
     let myBlogId =  this._route.snapshot.paramMap.get('blogId');
     console.log(myBlogId)
     this.blogHttpService.getSingleInformation(myBlogId).subscribe(
      data => {
        this.currentBlog = data["data"];
        console.log("current blog is");
        console.log(this.currentBlog);
       
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        alert("some error occured");
      }
    )

  }

  public editThisBlog(): any{
    this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data =>{
        console.log("Blog edited successfully")
       alert("blog is edited");
          
       setTimeout(()=>{
        this.router.navigate(['/blog',this.currentBlog.blogId]);
      },1000);
        
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
  }
}
