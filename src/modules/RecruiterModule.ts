import { RecruiterSchema, IRecruiter } from "../entities/Recruiter";
import RecruiterRepository from "../repositories/recruiterRepository";
import RecruiterService from "../services/recruiterService";
import RecruiterController from "../controllers/recruiterController";
import { model } from "mongoose";

export class RecruiterModule {
  static make() {
    const RecruiterModel = model<IRecruiter>('Recruiter', RecruiterSchema);
    const repository = new RecruiterRepository(RecruiterModel)
    const service = new RecruiterService(repository)
    const controller = new RecruiterController(service)

    return {controller}
  }
}
