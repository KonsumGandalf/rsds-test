import { Body, Controller, Get, Post } from '@nestjs/common';
import { IPhoto } from '@rsds/shared/common/models';
import { Photo } from './photo.entity';

import { PhotoService } from './photo.service';

@Controller()
export class PhotoController {
    constructor(private readonly _photoService: PhotoService) {}

    @Post('addGithub')
    createEntry(@Body() result) {
        console.log(result)
        return result;
    }

    @Post('add')
    async addFile() {
        return this._photoService.addEntry();
    }

    @Get('getAll')
    getAllFiles(): Promise<IPhoto[]> {
        return this._photoService.findAll();
    }
}
