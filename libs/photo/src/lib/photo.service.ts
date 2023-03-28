import { Inject, Injectable } from '@nestjs/common';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo)
        private readonly _photoRepository: Repository<Photo>,
    ) {}

    async findAll(): Promise<Photo[]> {
        return this._photoRepository.find();
    }

    async addEntry(): Promise<Photo> {
        const newEntry = this._photoRepository.create({
            name: 'test',
            description: 'test',
            filename: randomStringGenerator(),
            views: 123,
            isPublished: true,
        });
        return await this._photoRepository.save(newEntry);
    }
}
