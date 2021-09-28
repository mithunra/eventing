import {Inject, Injectable, Logger} from '@nestjs/common';
import {Profile} from "./profile";
import {ClientKafka} from "@nestjs/microservices";

@Injectable()
export class ProfileService {
    constructor(private readonly logger: Logger,
                @Inject('ACCOUNTS_TRANSPORTER') private client: ClientKafka) {}

    register(account: Profile) {
        this.logger.log(`account registered for ${account.email}`)
        this.client.send<any, string>('accounts.registered', account.email);
        return true;
    }
}
