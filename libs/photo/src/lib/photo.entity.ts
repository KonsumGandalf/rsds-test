import { IPhoto } from '@rsds/shared/common/models';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo implements IPhoto{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text')
    description: string;

    @Column()
    filename: string;

    @Column('int')
    views: number;

    @Column()
    isPublished: boolean;
}
