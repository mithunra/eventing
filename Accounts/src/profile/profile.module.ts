import {Logger, Module} from '@nestjs/common';
import {ProfileController} from './profile.controller';
import {ProfileService} from './profile.service';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ACCOUNTS_TRANSPORTER',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'accounts',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'test'
          }
        }
      },
    ]),
  ],
  controllers: [ProfileController],
  providers: [ProfileService, Logger]
})
export class ProfileModule {}
