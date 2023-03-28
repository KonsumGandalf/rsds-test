import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './display-data/hero/hero.component';
import { HeroItemComponent } from './display-data/hero-item/hero-item.component';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [HeroComponent, HeroItemComponent],
    providers: [],
    exports: [HeroComponent],
})
export class DisplayDataModule {}
