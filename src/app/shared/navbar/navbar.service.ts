import { Injectable } from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { Observable }     from 'rxjs';
import { NavbarItem }     from './navbar-item';

@Injectable({ providedIn: 'root' })
export class NavbarService {
    private url = 'http://localhost:3000/navbar';

    constructor(private http: HttpClient) {}

    getBottomItems(): Observable<NavbarItem[]> {
        return this.http.get<NavbarItem[]>(this.url);
    }
}
