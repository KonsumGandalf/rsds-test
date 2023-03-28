import { IEnvironment } from '@rsds/shared/angular/environment';

export const environment: IEnvironment = {
    production: false,
    defaultLanguage: 'de',
    apiUrl: process.env.NX_API_URL ?? 'http://localhost:3333/api'
};
