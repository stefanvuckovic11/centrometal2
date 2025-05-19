import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccordionItem } from './accordion-item';

@Injectable({
    providedIn: 'root'
})
export class AccordionService {
    private url = 'http://localhost:3000/accordion';

    constructor(private http: HttpClient) {}

    getItems(): Observable<AccordionItem[]> {
        return this.http.get<AccordionItem[]>(this.url);
    }
}
