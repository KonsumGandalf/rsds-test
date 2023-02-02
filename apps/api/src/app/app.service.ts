import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getData(): { message: string } {
        return { message: 'Welcome to apiTest!' };
    }

    getChange() {
        return 13;
    }
}
