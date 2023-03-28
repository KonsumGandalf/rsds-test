import { ModuleWithProviders, NgModule } from '@angular/core';

import { IEnvironment } from './models/environment.interface';
import { ENVIRONMENT } from './tokens/environment.token';

@NgModule()
export class BmaEnvironmentModule {

    static forRoot(environment: IEnvironment): ModuleWithProviders<BmaEnvironmentModule> {
        return {
            ngModule: BmaEnvironmentModule,
            providers: [
                { provide: ENVIRONMENT, useValue: environment }
            ]
        }
    }
}
