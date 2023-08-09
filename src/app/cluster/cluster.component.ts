import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FileService } from '../file.service';


@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.scss']
})
export class ClusterComponent {
  clusterNum = new BehaviorSubject(1);

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    public fileService: FileService ) 
  {}
  increaseClusterNum() {
    this.clusterNum.next(this.clusterNum.value + 1 > 12 ? 12 : this.clusterNum.value + 1);
  }
  decreaseClusterNum() {
    this.clusterNum.next(this.clusterNum.value - 1 < 1 ? 1 : this.clusterNum.value - 1);
  }
  handleUpload(e: Event):void{
    this.fileService.uploadFile(e);
  }
  handleUse(e: Event):void{
    this.fileService.generateImage(this.clusterNum.value);
  }
}
