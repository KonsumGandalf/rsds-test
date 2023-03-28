import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environments';

declare module '@rsds/shared/angular/environment' {

    interface IEnvironment {
        production: boolean;
        defaultLanguage: string;
        apiUrl: string;
    }
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    export namespace NodeJS {

        export interface ProcessEnv {
            ENV: string;
            NX_API_URL: string;
        }
    }
}

if (environment.production) {
    enableProdMode();
}


platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));

