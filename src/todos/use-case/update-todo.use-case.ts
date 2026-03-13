import { Injectable, Logger } from "@nestjs/common";
import { FindTodoByIdRepository, UpdateTodoRepository } from "../repository";

@Injectable()
export class UpdateTodoUseCase {
  constructor(
    private readonly UpdateTodoRepository: UpdateTodoRepository,
    private readonly logger: Logger,
  ) {}

  async execute(data: UpdateTodoRepository) {
    try {
      this.logger.log("Updating todo...");
      const todo = await this.UpdateTodoRepository.update(data);
      this.logger.log("Todo updated successfully!");
      return todo;
    } catch (error) {
      this.logger.error(error);
      throw new Error("Failed to update todo");
    }
  }
}