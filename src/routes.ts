//GENERAL IMPORTS
import express, { Request, Response, Router } from "express";

//SHARED MIDDLEWARES
import { logMiddleware } from "./middlewares/logMiddleware";
import { authenticationMiddleware } from "./middlewares/authenticationMiddleware";
import { authorizationMiddleware } from "./middlewares/authorizationMiddleware";

//SPECIFIC MIDDLEWARES
import { deleteCandidateMiddleware, getByIdCandidateMiddleware } from "./middlewares/candidateMiddleware";


//SHARED MODULES
import { AuthenticationModule } from "./modules/AuthenticationModule";

//SPECIFIC MODULES
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


//PUBLIC ROUTES
router.get("/", (req: Request, res: Response): void => {
  res.status(200).json({ message: "Welcome to fisrt route!"})
})

namespace AuthenticationRoutes {
  const { controller } = AuthenticationModule.make()

  router.post("/login", logMiddleware, authenticationMiddleware, controller.login.bind(controller))
}


//PRIVATE ROUTES
namespace ApplicationDocumentsRoutes {
  const { controller } = ApplicationDocumentsModule.make()

  router.post("/applicationDocuments", logMiddleware, authorizationMiddleware, controller.create.bind(controller));
  router.get("/applicationDocuments/:id", logMiddleware, authorizationMiddleware, controller.getById.bind(controller));
  router.get("/applicationDocuments", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/applicationDocuments/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("applicationDocuments/:id", logMiddleware, authorizationMiddleware, controller.delete.bind(controller))
}

namespace ApplicationStatusRoutes {
  const { controller } = ApplicationStatusModule.make()

  router.post("/applicationStatus", logMiddleware, authorizationMiddleware, controller.create.bind(controller));
  router.get("/applicationStatus/:id", logMiddleware, authorizationMiddleware, controller.getById.bind(controller));
  router.get("/applicationStatus", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/applicationStatus/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("applicationStatus/:id", logMiddleware, authorizationMiddleware, controller.delete.bind(controller))
}

namespace CandidateRoutes {
  const { controller } = CandidateModule.make()

  router.post("/candidate", logMiddleware, authorizationMiddleware, controller.create.bind(controller));
  router.get("/candidate/:id", logMiddleware, authorizationMiddleware, getByIdCandidateMiddleware, controller.getById.bind(controller));
  router.get("/candidate", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/candidate/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("/candidate/:id", logMiddleware, authorizationMiddleware, deleteCandidateMiddleware, controller.delete.bind(controller))
}


export { router }