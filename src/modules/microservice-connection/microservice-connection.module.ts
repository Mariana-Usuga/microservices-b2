import { Module } from '@nestjs/common';
import { MicroserviceConnectionService } from './microservice-connection.service';

@Module({
  providers: [MicroserviceConnectionService]
})
export class MicroserviceConnectionModule {}
