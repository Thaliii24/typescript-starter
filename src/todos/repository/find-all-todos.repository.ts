import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/shared/databases/prisma.database'

@Injectable()
export class FindAllTodosRepository {
  findMany() {
    throw new Error("Method not implemented.")
  }
  findAll() {
      throw new Error("Method not implemented.")
  }
  constructor(private readonly prisma: PrismaService) {}

  async execute() {
    return await this.prisma.todo.findMany()
  }
}