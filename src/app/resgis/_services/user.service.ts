// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { User } from '../_models';
//  import { config } from 'process'


// @Injectable({ providedIn: 'root' })
// export class UserService {
//     constructor(private http: HttpClient) { }

//     getAll() {
//         return this.http.get<User[]>(`${config}/users`);
//     }

//     register(user: User) {
//         return this.http.post(`${config}/users/register`, user);
//     }

//     delete(id: number) {
//         return this.http.delete(`${config}/users/${id}`);
//     }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { config } from 'process';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config}/users`);
    }

    register(user: User) {
        return this.http.post(`${config}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config}/users/${id}`);
    }
}