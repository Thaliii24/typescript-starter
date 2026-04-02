import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { UpdateTodoDto } from '../dto/update-todo.dto';

@Injectable()
export class UpdateTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string, data: UpdateTodoDto) {
    const { user_id, ...todoData } = data;

    return await this.prisma.todo.update({
      where: { id },
      data: {
        ...todoData,
        ...(user_id ? { user: { connect: { id: user_id } } } : {}),
      },
    });
  }
}
