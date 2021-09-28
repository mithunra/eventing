import {Controller} from '@nestjs/common';
import { MessagePattern, Payload} from "@nestjs/microservices";
import {MessageService} from "./message.service";
import {AccountRegisteredMessage} from "./messages/account-registered.message";

@Controller('profile')
export class MessageController {

    constructor(private readonly messageService: MessageService) {}

    @MessagePattern('accounts.registered')
    sendEmail(@Payload() message: AccountRegisteredMessage): any {
        return this.messageService.sendMessage(message.email);
    }
}
