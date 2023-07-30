import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.scss']
})
export class ClusterComponent {
  clusterNum = new BehaviorSubject(1);
  constructor (
    private route: ActivatedRoute,
    private router: Router ) 
  {}
  increaseClusterNum() {
    this.clusterNum.next(this.clusterNum.value + 1 > 12 ? 12 : this.clusterNum.value + 1);
  }
  decreaseClusterNum() {
    this.clusterNum.next(this.clusterNum.value - 1 < 1 ? 1 : this.clusterNum.value - 1);
  }
  handleUpload(e: Event):void{
    console.log(e);
    this.router.navigate(['/cluster'], { relativeTo: this.route });
  }
  handleUse(e: Event):void{
    // do something
    this.router.navigate(['/export'], { relativeTo: this.route });
  }
}
