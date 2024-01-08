import { Request, Response } from 'express';
import ApplicationDocumentsService from '../services/applicationDocumentsService';
import { UpdateApplicationDocumentsDTO, CreateApplicationDocumentsDTO } from '../dto/applicationDocumentsDTO';

class ApplicationDocumentsController {
  constructor(private service: ApplicationDocumentsService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateApplicationDocumentsDTO = req.body;
      const createdDocument = await this.service.create(data);
      res.status(201).json(createdDocument);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const document = await this.service.getById(id);

      if (document) {
        res.json(document);
      } else {
        res.status(404).send('Document not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const data: UpdateApplicationDocumentsDTO = req.body;
      const updatedDocument = await this.service.update(id, data);

      if (updatedDocument) {
        res.json(updatedDocument);
      } else {
        res.status(404).send('Document not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const deletedDocument = await this.service.softDelete(id);

      if (deletedDocument) {
        res.json(deletedDocument);
      } else {
        res.status(404).send('Document not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}

export default ApplicationDocumentsController;
