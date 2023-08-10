import { Component } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent {
  constructor (
    public fileService: FileService ) 
  {}
  objects: number[] = Array.from(Array(this.fileService.clusters.length).keys());
  toggleClusterNum(i: number){
    if (this.objects.includes(i)){
      this.objects.splice(this.objects.indexOf(i), 1);
    } else {
      this.objects.push(i);
    }
  }
  handleUpload(e: Event):void{
    this.fileService.uploadFile(e);
  }

  handleShow(e: Event):void{
    this.fileService.showImage(this.objects);
  }
  handleExport() {
    this.fileService.downloadFile(this.fileService.filePath.value);
  }
}
