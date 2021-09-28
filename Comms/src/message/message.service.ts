import {Injectable, Logger} from '@nestjs/common';

@Injectable()
export class MessageService {

    constructor(private readonly logger: Logger) {}

    sendMessage(email: string): boolean
    {
        this.logger.log(`message sent to ${email}`);
        return true;
    }
}
