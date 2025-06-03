import { Injectable } from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { Observable }     from 'rxjs';
import { NavbarItemInterface }     from './navbar-item.interface';

@Injectable({ providedIn: 'root' })
export class NavbarService {
    private url = 'http://localhost:3000/navbar';

    constructor(private http: HttpClient) {}

    getBottomItems(): Observable<NavbarItemInterface[]> {
        return this.http.get<NavbarItemInterface[]>(this.url);
    }
}
