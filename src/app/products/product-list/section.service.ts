import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Section } from './section';

@Injectable({ providedIn: 'root' })
export class SectionService {
    private url: string = 'http://localhost:3000/sections';

    constructor(private http: HttpClient) {}

    public getSections(): Observable<Section[]> {
        return this.http.get<Section[]>(this.url);
    }
}
