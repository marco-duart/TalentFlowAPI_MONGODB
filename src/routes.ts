import express, { Router } from "express";
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

const router: Router = express.Router();
router.use(express.json());

namespace ApplicationDocumentsRoutes {
  const { controller } = ApplicationDocumentsModule.make()

  router.post("/applicationDocuments", controller.create.bind(controller));
  router.get("/applicationDocuments/:id", controller.getById.bind(controller));
  router.get("/applicationDocuments", controller.getAll.bind(controller));
  router.patch("/applicationDocuments/:id", controller.update.bind(controller))
  router.delete("applicationDocuments/:id", controller.delete.bind(controller))
}

namespace ApplicationStatusRoutes {
  const { controller } = ApplicationStatusModule.make()

  router.post("/")
}

namespace CandidateRoutes {
  const { controller } = CandidateModule.make()

  router.post("/candidate", controller.create.bind(controller));
  router.get("/candidate/:id", controller.getById.bind(controller));
  router.get("/candidate", controller.getAll.bind(controller));
  router.patch("/candidate/:id", controller.update.bind(controller))
  router.delete("candidate/:id", controller.delete.bind(controller))
}


export { router }