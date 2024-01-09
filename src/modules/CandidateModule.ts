import { CandidateSchema, ICandidate } from "../entities/Candidate";
import CandidateRepository from "../repositories/candidateRepository";
import CandidateService from "../services/candidateService";
import CandidateController from "../controllers/candidateController";
import { model } from "mongoose";

export class CandidateModule {
  static make() {
    const CandidateModel = model<ICandidate>('Candidate', CandidateSchema);
    const repository = new CandidateRepository(CandidateModel)
    const service = new CandidateService(repository)
    const controller = new CandidateController(service)

    return {controller}
  }
}
