import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { MicroserviceConnectionService } from '../microservice-connection/microservice-connection.service';
import { PATTERNS } from './example-comunication.constants';

@Injectable()
export class ExampleComunicationService {

  constructor(private microServiceConnection: MicroserviceConnectionService){

  }

  sendMessagePattern(message: string){
    try{
      return firstValueFrom(this.microServiceConnection
        .getClient()
        .send(
          PATTERNS.MESSAGERS.SEND_MESSAGE,
          {
            message
          }
          ));
    }catch(err){
      console.error("No hay conexión");
      return false;
    }
  }
  

  sendEventPattern(message: string){
    try {
      return firstValueFrom(this.microServiceConnection
        .getClient()
        .emit(
          PATTERNS.EVENTS.RECEIVE_MESSAGE,
          {
            message
          }
        )); 
    } catch (error) {
      console.error("No hay conexión");
      return false;
    }
  }
}
