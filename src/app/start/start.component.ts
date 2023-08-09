import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from '../file.service';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  constructor (
    private fileService: FileService ) 
  {}
  handleUpload(e: any):void{
    this.fileService.uploadFile(e);
  }
}
