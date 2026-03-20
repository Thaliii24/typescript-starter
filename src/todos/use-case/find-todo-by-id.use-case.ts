import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { FindTodoByIdRepository } from "../repository/find-todo-by-id.repository";


@Injectable()
export class FindTodoByIdUseCase {
    constructor(
        private readonly findTodoByIdRepository: FindTodoByIdRepository,
        private readonly logger: Logger,
    ) {}

    async execute(id: string) {
        try {
            this.logger.log('Finding todo by id...');

            const todo = await this.findTodoByIdRepository.execute(id);

            if (!todo) {
                throw new NotFoundException('ToDo not found');
            }

            this.logger.log('ToDo found successfully!');
            return todo;

        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}