import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
  

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.css']
})
export class UploadCSVComponent implements OnInit {


  public uploader:FileUploader = new FileUploader({
      url: 'https://team27-2aad9.firebaseio.com',
      // allowedMimeType: ['text/csv']
  });
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor() { }

  ngOnInit() {
  }

}
