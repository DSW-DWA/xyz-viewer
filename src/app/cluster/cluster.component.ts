import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.scss']
})
export class ClusterComponent {
  clusterNum = new BehaviorSubject(1);
  increaseClusterNum() {
    this.clusterNum.next(this.clusterNum.value + 1 > 12 ? 12 : this.clusterNum.value + 1);
  }
  decreaseClusterNum() {
    this.clusterNum.next(this.clusterNum.value - 1 < 1 ? 1 : this.clusterNum.value - 1);
  }
}
