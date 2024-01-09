import { EmploymentHistorySchema, IEmploymentHistory } from "../entities/EmploymentHistory";
import EmploymentHistoryRepository from "../repositories/employmentHistoryRepository";
import EmploymentHistoryService from "../services/employmentHistoryService";
import EmploymentHistoryController from "../controllers/employmentHistoryController";
import { model } from "mongoose";

export class EmploymentHistoryModule {
  static make() {
    const EmploymentHistoryModel = model<IEmploymentHistory>('EmploymentHistory', EmploymentHistorySchema);
    const repository = new EmploymentHistoryRepository(EmploymentHistoryModel)
    const service = new EmploymentHistoryService(repository)
    const controller = new EmploymentHistoryController(service)

    return {controller}
  }
}
