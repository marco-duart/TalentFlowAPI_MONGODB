import { ApplicationStatusSchema, IApplicationStatus } from "../entities/ApplicationStatus";
import ApplicationStatusRepository from "../repositories/applicationStatusRepository";
import ApplicationStatusService from "../services/applicationStatusService";
import ApplicationStatusController from "../controllers/applicationStatusController";
import { model } from "mongoose";

export class ApplicationStatusModule {
  static make() {
    const ApplicationStatusModel = model<IApplicationStatus>('ApplicationStatus', ApplicationStatusSchema);
    const repository = new ApplicationStatusRepository(ApplicationStatusModel)
    const service = new ApplicationStatusService(repository)
    const controller = new ApplicationStatusController(service)

    return {controller}
  }
}
