import { ApplicationDocumentsSchema, IApplicationDocuments } from "../entities/ApplicationDocuments";
import ApplicationDocumentsRepository from "../repositories/applicationDocumentsRepository";
import ApplicationDocumentsService from "../services/applicationDocumentsService";
import ApplicationDocumentsController from "../controllers/applicationDocumentsController";
import { model } from "mongoose";

export class ApplicationDocumentsModule {
  static make() {
    const ApplicationDocumentsModel = model<IApplicationDocuments>('ApplicationDocuments', ApplicationDocumentsSchema);
    const repository = new ApplicationDocumentsRepository(ApplicationDocumentsModel)
    const service = new ApplicationDocumentsService(repository)
    const controller = new ApplicationDocumentsController(service)

    return {controller}
  }
}
