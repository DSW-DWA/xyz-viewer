import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent {
  constructor (
    private route: ActivatedRoute,
    private router: Router ) 
  {}
  objects = ['Object 1', 'Object 2', 'Object 3','Object 4', 'Object 5', 'Object 6','Object 7', 'Object 8', 'Object 9'];
  handleUpload(e: Event):void{
    console.log(e);
    this.router.navigate(['/cluster'], { relativeTo: this.route });
  }
}
