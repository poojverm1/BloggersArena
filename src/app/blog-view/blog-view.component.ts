import { Component, OnInit, OnDestroy } from '@angular/core';
//import route related code
import {ActivatedRoute,Router} from "@angular/router";
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
  
})
export class BlogViewComponent implements OnInit,OnDestroy{

  public currentBlog;
  

  constructor(private _route:ActivatedRoute,private router:Router,public blogHttpService:BlogHttpService,
  private _location:Location) {
console.log("constructor is called");
   }

   ngOnDestroy():void{
    console.log("Destroy from blog view is called");
   }

  ngOnInit() {
    console.log("nginit from blog view is called");

    //get blog id from
   let myBlogId = this._route.snapshot.paramMap.get('blogId');
  //   console.log(myBlogId);
  //  this.currentBlog = this.blogHttpService.getSingleInformation(myBlogId);
  //  console.log(this.currentBlog);
  this.blogHttpService.getSingleInformation(myBlogId).subscribe(
    data =>{
     
      console.log(data);
     
      this.currentBlog = data["data"];
    },
    error =>{
      console.log("some error occured");
      console.log(error.errorMessage);
    }

  )
  }

  public deleteThisBlog():any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data =>{
     
        console.log(data);
       alert("blog deleted sucessfully");
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
        alert("not deletd");
      }
    )
  }

  public goBackToPreviousPage():any{
    this._location.back();
  }

 
}