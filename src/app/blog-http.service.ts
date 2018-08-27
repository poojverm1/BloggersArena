import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { ReturnStatement } from '../../node_modules/@angular/compiler';
import {Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
public allBlogs;
public currentBlog;

public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs'
  constructor(private _http:HttpClient) { 
    console.log("blog-http service was called");
  }

  //exception handle
  private handleError(err:HttpErrorResponse){
    console.log("Handle error http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }
  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl+'/all?authToken=YzYyODdhNzY1ODgxNGQzNGEzOTJlYjgwMDAwN2U1ODg5YmJhNmRiMzdjMTI2MGFmZjM3MmI1OTgyMTcyYzRmNWVlOTEyNDdmODQzMzZlN2ZkZmY4MzkzMTk2MzU0NTNmOTBkOTYxYmRiZjZiZWRhZWE1YTVkZjQ0YzQ5NDk3YTkwOA==');
    console.log(myResponse);
    return myResponse;
  }

  //method to return particular blog
  public getSingleInformation(currentBlogId): any {
let myResponse = this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken=YzYyODdhNzY1ODgxNGQzNGEzOTJlYjgwMDAwN2U1ODg5YmJhNmRiMzdjMTI2MGFmZjM3MmI1OTgyMTcyYzRmNWVlOTEyNDdmODQzMzZlN2ZkZmY4MzkzMTk2MzU0NTNmOTBkOTYxYmRiZjZiZWRhZWE1YTVkZjQ0YzQ5NDk3YTkwOA==');
   return myResponse;
}

//create blog
public createBlog(blogData): any {
  let myResponse = this._http.post(this.baseUrl+'/create'+'?authToken=YzYyODdhNzY1ODgxNGQzNGEzOTJlYjgwMDAwN2U1ODg5YmJhNmRiMzdjMTI2MGFmZjM3MmI1OTgyMTcyYzRmNWVlOTEyNDdmODQzMzZlN2ZkZmY4MzkzMTk2MzU0NTNmOTBkOTYxYmRiZjZiZWRhZWE1YTVkZjQ0YzQ5NDk3YTkwOA==',blogData);
     return myResponse;
  }


//delete blog
public deleteBlog(currentBlogId): any {
  let myResponse = this._http.post(this.baseUrl+'/'+currentBlogId+'/delete'+'?authToken=YzYyODdhNzY1ODgxNGQzNGEzOTJlYjgwMDAwN2U1ODg5YmJhNmRiMzdjMTI2MGFmZjM3MmI1OTgyMTcyYzRmNWVlOTEyNDdmODQzMzZlN2ZkZmY4MzkzMTk2MzU0NTNmOTBkOTYxYmRiZjZiZWRhZWE1YTVkZjQ0YzQ5NDk3YTkwOA==',currentBlogId);
     return myResponse;
  }


//edit blog
public editBlog(currentBlogId,blogData): any {
  let myResponse = this._http.post(this.baseUrl+'/'+currentBlogId+'/edit'+'?authToken=YzYyODdhNzY1ODgxNGQzNGEzOTJlYjgwMDAwN2U1ODg5YmJhNmRiMzdjMTI2MGFmZjM3MmI1OTgyMTcyYzRmNWVlOTEyNDdmODQzMzZlN2ZkZmY4MzkzMTk2MzU0NTNmOTBkOTYxYmRiZjZiZWRhZWE1YTVkZjQ0YzQ5NDk3YTkwOA==',blogData);
     return myResponse;
  }
}