import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, Query, HttpStatus, ParseUUIDPipe } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ORDER_SERVICE } from 'src/config';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { firstValueFrom } from 'rxjs';
import { OrderPaginationDto } from './dto';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(ORDER_SERVICE) private readonly ordersClient: ClientProxy,
  ) {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersClient.send({ cmd: 'create_order' }, createOrderDto);
  }

  @Get()
  findAll(@Query() orderPaginationDto: OrderPaginationDto) {
    return this.ordersClient.send(
      { cmd: 'find_all_orders' },
      orderPaginationDto,
    );
  }

  @Get(':id')
  async findOne(@Param('id',ParseUUIDPipe) id: string) {
    try {
      const order = await firstValueFrom(
        this.ordersClient.send({ cmd: 'find_one_order' }, { id }),
      );
      return order
    } catch (error) {
        throw new RpcException(error);
    }
  }

}
