import { Request, Response } from "express";
import ApplicationStatusService from "../services/applicationStatusService";
import {
  UpdateApplicationStatusDTO,
  CreateApplicationStatusDTO,
} from "../dto/applicationStatusDTO";

class ApplicationStatusController {
  constructor(private service: ApplicationStatusService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateApplicationStatusDTO = req.body;
      const createdDocument = await this.service.create(data);
      res.status(201).json(createdDocument);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const document = await this.service.getById(id);

      if (document) {
        res.status(201).json(document);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const documents = await this.service.getAll();

      if (documents) {
        res.status(201).json(documents);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const data: UpdateApplicationStatusDTO = req.body;
      const updatedDocument = await this.service.update(id, data);
      if (updatedDocument) {
        res.status(201).json(updatedDocument);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server Error");
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const deletedDocument = await this.service.softDelete(id);

      if (deletedDocument) {
        res.status(200).json(deletedDocument);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default ApplicationStatusController;
