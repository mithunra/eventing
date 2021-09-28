import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {Profile} from "./interfaces/profile";

@Injectable()
export class AccountService {

    constructor(@Inject('ACCOUNT_SERVICE') private client: ClientProxy) {}

    async register(account: Profile) {
        return this.client.send<number, Profile>('register', account);
    }
}
