import { Injectable, Logger, NotFoundException } from "@nestjs/common";

import { UpdateTodoDto } from "../dto/update-todo.dto";
import { UpdateTodoRepository } from "../repository/update-todo.repository";
import { FindTodoByIdRepository } from "../repository/find-todo-by-id.repository";

@Injectable()
export class UpdateTodoUseCase {
    constructor(
        private readonly updateTodoRepository: UpdateTodoRepository,
        private readonly findTodoByIdRepository: FindTodoByIdRepository,
        private readonly logger: Logger,
) {}

async execute(id: string, data: UpdateTodoDto) {
    try {
        this.logger.log('Updating todo...');
        const todo = await this.findTodoByIdRepository.execute(id);

        if (!todo) {
            throw new NotFoundException('ToDo not found');
        }

        await this.updateTodoRepository.execute(id, data);
        this.logger.log('ToDo updated sucessfully!');
        return todo;
    }   catch (error) {
        this.logger.error(error);
        throw error;
    }
    }
}
