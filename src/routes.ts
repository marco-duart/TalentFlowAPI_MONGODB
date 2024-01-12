import express, { Request, Response, Router } from "express";
import { logMiddleware } from "./middlewares/logMiddleware";
import { AuthenticationModule } from "./modules/AuthenticationModule";
import { ApplicationDocumentsModule } from "./modules/ApplicationDocumentsModule";
import { ApplicationStatusModule } from "./modules/ApplicationStatusModule";
import { CandidateModule } from "./modules/CandidateModule";
import { CompanyModule } from "./modules/CompanyModule";
import { DashboardModule } from "./modules/DashboardModule";
import { EmploymentHistoryModule } from "./modules/EmploymentHistoryModule";
import { FeedbackModule } from "./modules/FeedbackModule";
import { HiringProcessModule } from "./modules/HiringProcessModule";
import { InterviewModule } from "./modules/InterviewModule";
import { JobPostingModule } from "./modules/JobPostingModule";
import { NotificationsModule } from "./modules/NotificationsModule";
import { RecruiterModule } from "./modules/RecruiterModule";
import { deleteCandidateMiddleware, getByIdCandidateMiddleware } from "./middlewares/candidateMiddleware";
import { authenticationMiddleware } from "./middlewares/authenticationMiddleware";


const router: Router = express.Router();
router.use(express.json());

router.get("/", (req: Request, res: Response): void => {
  res.status(200).json({ message: "Welcome to fisrt route!"})
})

namespace AuthenticationRoutes {
  const { controller } = AuthenticationModule.make()

  router.post("/login", authenticationMiddleware, controller.login.bind(controller))
}

namespace ApplicationDocumentsRoutes {
  const { controller } = ApplicationDocumentsModule.make()

  router.post("/applicationDocuments", logMiddleware, controller.create.bind(controller));
  router.get("/applicationDocuments/:id", logMiddleware, controller.getById.bind(controller));
  router.get("/applicationDocuments", logMiddleware, controller.getAll.bind(controller));
  router.patch("/applicationDocuments/:id", logMiddleware, controller.update.bind(controller))
  router.delete("applicationDocuments/:id", logMiddleware, controller.delete.bind(controller))
}

namespace ApplicationStatusRoutes {
  const { controller } = ApplicationStatusModule.make()

  router.post("/applicationStatus", logMiddleware, controller.create.bind(controller));
  router.get("/applicationStatus/:id", logMiddleware, controller.getById.bind(controller));
  router.get("/applicationStatus", logMiddleware, controller.getAll.bind(controller));
  router.patch("/applicationStatus/:id", logMiddleware, controller.update.bind(controller))
  router.delete("applicationStatus/:id", logMiddleware, controller.delete.bind(controller))
}

namespace CandidateRoutes {
  const { controller } = CandidateModule.make()

  router.post("/candidate", logMiddleware, controller.create.bind(controller));
  router.get("/candidate/:id", logMiddleware, getByIdCandidateMiddleware, controller.getById.bind(controller));
  router.get("/candidate", logMiddleware, controller.getAll.bind(controller));
  router.patch("/candidate/:id", logMiddleware, controller.update.bind(controller))
  router.delete("/candidate/:id", logMiddleware, deleteCandidateMiddleware, controller.delete.bind(controller))
}


export { router }