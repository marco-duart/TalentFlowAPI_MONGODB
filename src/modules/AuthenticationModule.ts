import { RecruiterModule } from "./RecruiterModule";
import { CandidateModule } from "./CandidateModule";
import { AuthenticationController } from "../controllers/AuthenticationController";
import { AuthenticationService } from "../services/AuthenticationService";

export class AuthenticationModule {
  static make(type: "CANDIDATE" | "RECRUITER") {
    const repository = this.typeValidade(type)
    const service = new AuthenticationService(repository)
    const controller = new AuthenticationController(service)
    return { service, controller }
  }

  static typeValidade(type: "CANDIDATE" | "RECRUITER") {
    if(type === "CANDIDATE") {
      const { repository } = CandidateModule.make()
      return repository
    }
    const { repository } = RecruiterModule.make()
    return repository
  }
}