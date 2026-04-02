import { TodoPriority } from '@prisma/client';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;

  @IsEnum(TodoPriority)
  @IsNotEmpty()
  priority: TodoPriority;

  @IsDateString()
  @IsOptional()
  dueAt?: Date;

  @IsDateString()
  @IsOptional()
  completedAt?: Date;

  @IsUUID()
  @IsNotEmpty()
  user_id: string;

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;
}
