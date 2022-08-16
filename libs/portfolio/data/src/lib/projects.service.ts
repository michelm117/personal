import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectInterface } from '@personal/api-interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<ProjectInterface[]>('/api/projects', httpOptions);
  }

  getProject(id: number): Observable<any> {
    return this.http.get<ProjectInterface>('/api/projects/' + id, httpOptions);
  }
}
