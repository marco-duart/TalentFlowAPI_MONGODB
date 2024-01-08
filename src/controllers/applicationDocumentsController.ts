import { Request, Response } from "express";
import ApplicationDocumentsService from "../services/applicationDocumentsService";
import {
  UpdateApplicationDocumentsDTO,
  CreateApplicationDocumentsDTO,
} from "../dto/applicationDocumentsDTO";

class ApplicationDocumentsController {
  constructor(private service: ApplicationDocumentsService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateApplicationDocumentsDTO = req.body;
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
        res.json(document);
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
      const data: UpdateApplicationDocumentsDTO = req.body;
      const updatedDocument = await this.service.update(id, data);

      if (updatedDocument) {
        res.status(201).json(updatedDocument);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const deletedDocument = await this.service.softDelete(id);

      if (deletedDocument) {
        res.status(201).json(deletedDocument);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default ApplicationDocumentsController;
