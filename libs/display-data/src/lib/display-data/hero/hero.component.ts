import { Component, OnInit } from '@angular/core';
import { IPhoto } from '@rsds/shared/common/models';
import { first, map, Observable, take } from 'rxjs';
import { ScanRepository } from '../infrastructure/scan.repository';

@Component({
    selector: 'rsds-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    host: {
        class: 'rsds-hero'
    }
})
export class HeroComponent implements OnInit{
    scans$?: Observable<IPhoto[]>
    constructor(private readonly _scanRepository: ScanRepository) {

    }

    ngOnInit(){
        this.scans$ = this._scanRepository.getAll().pipe(
            take(1),
            map(ele => {
                console.log(ele)
                return ele
            })

        )
    }

}
