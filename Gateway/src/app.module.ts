import {Module} from '@nestjs/common';
import {AccountModule} from "src/account/account.module";

@Module({
  imports: [
      AccountModule
  ],
})
export class AppModule {}
