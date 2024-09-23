import { IsEnum } from "class-validator";
import { OrderStatus, OrderStatusList } from "../enum/order.enum";

export class StatusDto {
    @IsEnum(OrderStatusList, {
        message: `Status must be one of these: ${ OrderStatusList}`,
        })
    status: OrderStatus;
}