import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  constructor (
    private route: ActivatedRoute,
    private router: Router ) 
  {}
  handleUpload(e: any):void{
    console.log(e);
    this.router.navigate(['/cluster'], { relativeTo: this.route });
 }
}
