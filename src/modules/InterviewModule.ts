import { InterviewSchema, IInterview } from "../entities/Interview";
import InterviewRepository from "../repositories/interviewRepository";
import InterviewService from "../services/interviewService";
import InterviewController from "../controllers/interviewController";
import { model } from "mongoose";

export class InterviewModule {
  static make() {
    const InterviewModel = model<IInterview>('Interview', InterviewSchema);
    const repository = new InterviewRepository(InterviewModel)
    const service = new InterviewService(repository)
    const controller = new InterviewController(service)

    return {controller}
  }
}
