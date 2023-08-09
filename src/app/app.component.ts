import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FileService } from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  constructor(
    public fileService: FileService
  ) {}
}
