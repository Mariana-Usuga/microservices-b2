import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleComunicationModule } from './example-comunication/example-comunication.module';
import { MicroserviceConnectionModule } from './microservice-connection/microservice-connection.module';

@Module({
  imports: [ExampleComunicationModule, MicroserviceConnectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
