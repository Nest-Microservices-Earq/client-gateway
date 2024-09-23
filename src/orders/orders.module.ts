import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ORDER_SERVICE, envs } from 'src/config';

@Module({
  controllers: [OrdersController],
  imports: [
    ClientsModule.register([
      {
         name: ORDER_SERVICE, 
         transport: Transport.TCP,
          options: {
            host: envs.ordersMicroservicesHost,
            port: envs.ordersMicroservicesPort,
          },
      },
    ]),
  ]
})
export class OrdersModule {}
