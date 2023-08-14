import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { saveAs } from 'file-saver';

export interface ClusterImage {
  index: number,
  name: string,
  path: string
}

@Injectable({
  providedIn: 'root'
})

export class FileService {
  public sessionId: string | undefined;
  public ruleGraphicPath: string | undefined;
  public mainImagePath = new BehaviorSubject<string>('');
  public clusters: ClusterImage[] = [];
  public optimalCluster: number = 5;
  public loadScreenMessage = new BehaviorSubject<string>('');
  public loadScreen = new BehaviorSubject<boolean>(false);
  public filePath = new BehaviorSubject<string>('');

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  public uploadFile(e: any) {
    this.loadScreen.next(true);
    this.loadScreenMessage.next('Загрузка файла...');

    var headers = new Headers();
    headers.append('FileName', e.target.files[0].name);

    var formatData = new FormData();
    formatData.append('file', e.target.files[0], e.target.files[0].name);
    fetch(environment.apiUrl + '/upload_file', {
      method: 'POST',
      headers: headers,
      body: formatData,
    }).then(
      response => response.json()
    ).then(
      success => {
        console.log(success);
        this.sessionId = success.session_id;
        this.elbowRuleGraphic();
      }
    ).catch(
      error => {
        console.log(error);
        this.loadScreenMessage.next('Ошибка загрузки файла. Перезапустите приложение.');
      }
    );
  }
  public elbowRuleGraphic() {
    if (this.sessionId == undefined) {
      this.loadScreen.next(true);
      this.loadScreenMessage.next('Ошибка загрузки графика. Перезапустите приложение.');
      return;
    }

    this.loadScreenMessage.next('Создание графика...');

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = {
      'session_id': this.sessionId
    }

    fetch(environment.apiUrl + '/elbow_rule_graphic', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    }).then(
      response => response.json()
    ).then(
      success => {
        this.loadScreen.next(false);
        this.ruleGraphicPath = environment.url + success.graphic_path;
        console.log(this.ruleGraphicPath);
        this.router.navigate(['/cluster'], { relativeTo: this.route });
      }
    ).catch(
      error => {
        this.loadScreenMessage.next('Ошибка загрузки графика. Перезапустите приложение.');
        console.log(error)
      }
    );
  }

  public generateImage(clusterNum: number) {
    this.loadScreen.next(true);

    if (this.sessionId == undefined) {
      this.loadScreenMessage.next('Ошибка генерации изображения. Перезапустите приложение.');
      return;
    }

    this.loadScreenMessage.next('Генерация изображения...');

    this.optimalCluster = clusterNum;
  
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = {
      'session_id': this.sessionId,
      'optimal_clusters': clusterNum
    }

    fetch(environment.apiUrl + '/generate_image', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    }).then(
      response => response.json()
    ).then(
      success => {
        this.mainImagePath.next(environment.url + success.main_image);
        this.clusters = success.cluster_images;
        this.router.navigate(['/export'], { relativeTo: this.route });
        this.loadScreen.next(false);
      }
    ).catch(
      error => {
        this.loadScreenMessage.next('Ошибка генерации изображения. Перезапустите приложение.');
        console.log(error);
      }
    );
  }
  public showImage(objects: number[]) {
    this.loadScreen.next(true);

    if (this.sessionId == undefined || this.optimalCluster == undefined || objects.length == 0) {
      this.loadScreenMessage.next('Ошибка генерации изображения. Перезапустите приложение.');
      return;
    }

    this.loadScreenMessage.next('Генерация изображения...');

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = {
      "session_id": this.sessionId,
      "optimal_clusters": this.optimalCluster,
      "cluster_indexes": objects
    }

    fetch(environment.apiUrl + '/show_image', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    }).then(
      response => response.json()
    ).then(
      success => {
        this.mainImagePath.next(environment.url + success.image_path);
        this.loadScreen.next(false);
      }
    ).catch(
      error => {
        this.loadScreenMessage.next('Ошибка генерации изображения. Перезапустите приложение.');
        console.log(error)
      }
    );
  }
  public exportFile(objects: number[]) {
    if (this.sessionId == undefined || this.optimalCluster == undefined || objects.length == 0) {
      this.loadScreenMessage.next('Ошибка генерации файла. Перезапустите приложение.');
      return;
    }

    this.loadScreenMessage.next('Генерация файла...');

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = {
      "session_id": this.sessionId,
      "optimal_clusters": this.optimalCluster,
      "cluster_indexes": objects
    }

    fetch(environment.apiUrl + '/export', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    }).then(
      response => response.json()
    ).then(
      success => {
        this.loadScreen.next(false);
        saveAs(environment.url + success.filepath, "file.xyz");
        console.log(success);
      }
    ).catch(
      error => {
        this.loadScreenMessage.next('Ошибка генерации файла. Перезапустите приложение.');
        console.log(error)
      }
    );
  }
}
