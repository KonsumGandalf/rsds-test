import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT, IEnvironment } from '@rsds/shared/angular/environment';
import { IPhoto } from '@rsds/shared/common/models';
import { from, Observable, take } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ScanRepository {
    constructor(private readonly _httpClient: HttpClient, @Inject(ENVIRONMENT) private readonly _environment: IEnvironment) {
    }

    getAll(): Observable<IPhoto[]> {
        return this._httpClient.get<IPhoto[]>(
            `${this._environment.apiUrl}/getAll`
        )
    }
}
