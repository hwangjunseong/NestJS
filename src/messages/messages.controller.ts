import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Header,
  Query,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return 'Message created successfully!';
  }
  @Get('/:id')
  getMessages(@Param('id') id: string): string[] {
    console.log(id);
    return ['Hello World!', 'NestJS is awesome!'];
  }
}
