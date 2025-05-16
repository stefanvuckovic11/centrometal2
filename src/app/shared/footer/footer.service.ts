import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FooterData } from './footer';

@Injectable({ providedIn: 'root' })
export class FooterService {
    constructor(private http: HttpClient) {}

    getFooterData(): Observable<FooterData> {
        return this.http.get<FooterData>('http://localhost:3000/footer');
    }
}
