import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DisplayDataModule } from '@rsds/display-data';
import { BmaEnvironmentModule } from '@rsds/shared/angular/environment';
import { environment } from '../environments/environments';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent],
    imports: [
        BrowserModule,
        BmaEnvironmentModule.forRoot(environment),
        DisplayDataModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
