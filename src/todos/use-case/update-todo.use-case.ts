import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteTodoRepository, FindTodoByIdRepository, UpdateTodoRepository } from "..";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { UpdateTodoDto } from "../dto/update-todo.dto";

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

        await this.updateTodoRepository.update(id, data);
        this.logger.log('ToDo updated sucessfully!');
        return todo;
    }   catch (error) {
        this.logger.error(error);
        throw error;
    }
    }
}
