import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccordionItemInterface } from './accordion-item.interface';

@Injectable({
    providedIn: 'root'
})
export class AccordionService {
    private url = 'http://localhost:3000/accordion';

    constructor(private http: HttpClient) {}

    getItems(): Observable<AccordionItemInterface[]> {
        return this.http.get<AccordionItemInterface[]>(this.url);
    }
}
