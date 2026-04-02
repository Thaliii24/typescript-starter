import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class CreateTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTodoDto) {
    const { user_id, ...todoData } = data;

    return await this.prisma.todo.create({
      data: {
        ...todoData,
        user: { connect: { id: user_id } },
      },
    });
  }
}