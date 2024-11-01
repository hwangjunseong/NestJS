import { IsString } from 'class-validator';
//IsString도 decorator임
export class CreateMessageDto {
  @IsString()
  //IsString() decorator를 사용하여 content type field에 string type validation을 추가
  content: string;
}
