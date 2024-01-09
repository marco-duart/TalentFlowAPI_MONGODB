import { DashboardSchema, IDashboard } from "../entities/Dashboard";
import DashboardRepository from "../repositories/dashboardRepository";
import DashboardService from "../services/dashboardService";
import DashboardController from "../controllers/dashboardController";
import { model } from "mongoose";

export class DashboardModule {
  static make() {
    const DashboardModel = model<IDashboard>('Dashboard', DashboardSchema);
    const repository = new DashboardRepository(DashboardModel)
    const service = new DashboardService(repository)
    const controller = new DashboardController(service)

    return {controller}
  }
}
