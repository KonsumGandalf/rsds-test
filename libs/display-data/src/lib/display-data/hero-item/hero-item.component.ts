import { Component, Input } from '@angular/core';
import { IPhoto } from '@rsds/shared/common/models';

@Component({
    selector: 'rsds-hero-item',
    templateUrl: './hero-item.component.html',
    styleUrls: ['./hero-item.component.scss'],
})
export class HeroItemComponent {
    @Input() photo!: IPhoto;
}
