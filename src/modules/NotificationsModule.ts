import { NotificationsSchema, INotifications } from "../entities/Notifications";
import NotificationsRepository from "../repositories/notificationsRepository";
import NotificationsService from "../services/notificationsService";
import NotificationsController from "../controllers/notificationsController";
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
