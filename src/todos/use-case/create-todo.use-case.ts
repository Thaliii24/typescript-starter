import { Injectable, Logger } from "@nestjs/common";
import { CreateTodoRepository } from "../repository/create-todo-repository";
import { CreateTodoDto } from "../dto/create-todo.dto";


@Injectable()
export class CreateTodoUseCase {
    constructor(
        private readonly createTodoRepository: CreateTodoRepository,
        private readonly logger: Logger,
) {}

async execute(data: CreateTodoDto) {
    try {
        this.logger.log('Creating todo...');
        const todo = await this.createTodoRepository.create(data);
        this.logger.log('ToDo created sucessfully!');
        return todo;
    }   catch (error) {
        this.logger.error(error);
        throw new Error('Failed to created toDo');
    }
    }
}
