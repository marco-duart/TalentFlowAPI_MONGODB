import express, { Router } from "express";
import { ApplicationDocumentsModule } from "./modules/ApplicationDocumentsModule";

const router: Router = express.Router();
router.use(express.json());

namespace ApplicationDocumentsRoutes {
  const { controller } = ApplicationDocumentsModule.make()

  router.post("/candidate", controller.create.bind(controller));
  router.get("/candidate/:id", controller.getById.bind(controller));
  router.get("/candidate", controller.getAll.bind(controller));
  router.patch("/candidate/:id", controller.update.bind(controller))
  router.delete("candidate/:id", controller.delete.bind(controller))
}

export { router }