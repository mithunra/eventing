import { Controller } from '@nestjs/common';
import {ProfileService} from "./profile.service";
import {MessagePattern} from "@nestjs/microservices";
import {Profile} from "./profile";

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @MessagePattern('register')
    getSalary(accountDetails: Profile): boolean {
        return this.profileService.register(accountDetails);
    }
}
