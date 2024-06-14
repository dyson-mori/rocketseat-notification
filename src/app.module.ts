import { Module } from '@nestjs/common';
import { HttpModules } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [HttpModules, DatabaseModule],
})

export class AppModule {}
