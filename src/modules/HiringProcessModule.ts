import { HiringProcessSchema, IHiringProcess } from "../entities/HiringProcess";
import HiringProcessRepository from "../repositories/hiringProcessRepository";
import HiringProcessService from "../services/hiringProcessService";
import HiringProcessController from "../controllers/hiringProcessController";
import { model } from "mongoose";

export class HiringProcessModule {
  static make() {
    const HiringProcessModel = model<IHiringProcess>('HiringProcess', HiringProcessSchema);
    const repository = new HiringProcessRepository(HiringProcessModel)
    const service = new HiringProcessService(repository)
    const controller = new HiringProcessController(service)

    return {controller}
  }
}
