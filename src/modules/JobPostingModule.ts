import { JobPostingSchema, IJobPosting } from "../entities/JobPosting";
import JobPostingRepository from "../repositories/jobPostingRepository";
import JobPostingService from "../services/jobPostingService";
import JobPostingController from "../controllers/jobPostingController";
import { model } from "mongoose";

export class JobPostingModule {
  static make() {
    const JobPostingModel = model<IJobPosting>('JobPosting', JobPostingSchema);
    const repository = new JobPostingRepository(JobPostingModel)
    const service = new JobPostingService(repository)
    const controller = new JobPostingController(service)

    return {controller}
  }
}
