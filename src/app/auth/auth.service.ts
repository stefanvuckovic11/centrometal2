import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

export interface User {
    id: string;
    username: string;
    email: string;
    privilege?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private baseUrl = 'http://localhost:3000/users';
    private currentUserSubject = new BehaviorSubject<User | null>(this.loadInitialUser());
    currentUser$ = this.currentUserSubject.asObservable();

    constructor(private http: HttpClient) {}

    private loadInitialUser(): User | null {
        const data = localStorage.getItem('loggedInUser');
        try {
            return data ? JSON.parse(data) : null;
        } catch {
            return null;
        }
    }

    login(loginInput: string, password: string): Observable<User | null> {
        return this.http.get<any>(this.baseUrl).pipe(
            map(res => Array.isArray(res) ? res : res.users),
            map((users: any[]) =>
                users.find(u =>
                    (u.username === loginInput || u.email === loginInput) &&
                    u.password === password
                ) || null
            ),
            map(u =>
                u
                    ? { id: u.id, username: u.username, email: u.email, privilege: u.privilege }
                    : null
            ),
            tap(user => {
                if (user) {
                    localStorage.setItem('loggedInUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                } else {
                    this.currentUserSubject.next(null);
                }
            }),
            catchError(err => {
                console.error('AuthService.login error:', err);
                return of(null);
            })
        );
    }



    logout(): void {
        localStorage.removeItem('loggedInUser');
        this.currentUserSubject.next(null);
    }


    register(username: string, email: string, password: string): Observable<User> {
        const newUser = { username, email, password };
        return this.http.post<User>(this.baseUrl, newUser).pipe(
            map(u => ({
                id: u.id,
                username: u.username,
                email: u.email,
                privilege: u.privilege
            })),
            catchError(err => {
                console.error('AuthService.register error:', err);
                return throwError(err);
            })
        );
    }
}


