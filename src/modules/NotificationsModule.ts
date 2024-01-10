import { NotificationsSchema, INotifications } from "../entities/Notifications";
import NotificationsRepository from "../repositories/NotificationsRepository";
import NotificationsService from "../services/NotificationsService";
import NotificationsController from "../controllers/NotificationsController";
import { model } from "mongoose";

export class NotificationsModule {
  static make() {
    const NotificationsModel = model<INotifications>('Notifications', NotificationsSchema);
    const repository = new NotificationsRepository(NotificationsModel)
    const service = new NotificationsService(repository)
    const controller = new NotificationsController(service)

    return {controller}
  }
}
