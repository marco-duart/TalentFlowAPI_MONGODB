import { FeedbackSchema, IFeedback } from "../entities/Feedback";
import FeedbackRepository from "../repositories/feedbackRepository";
import FeedbackService from "../services/feedbackService";
import FeedbackController from "../controllers/feedbackController";
import { model } from "mongoose";

export class FeedbackModule {
  static make() {
    const FeedbackModel = model<IFeedback>('Feedback', FeedbackSchema);
    const repository = new FeedbackRepository(FeedbackModel)
    const service = new FeedbackService(repository)
    const controller = new FeedbackController(service)

    return {controller}
  }
}
