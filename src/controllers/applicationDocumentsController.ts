import { Request, Response } from 'express';
import ApplicationDocumentsService from './applicationDocumentsService';
import ApplicationDocumentsDTO from './applicationDocumentsDTO';

class ApplicationDocumentsController {
  private service: ApplicationDocumentsService;

  constructor(service: ApplicationDocumentsService) {
    this.service = service;
  }

  async createDocument(req: Request, res: Response): Promise<void> {
    try {
      const data: ApplicationDocumentsDTO = req.body;
      const createdDocument = await this.service.createDocument(data);
      res.status(201).json(createdDocument);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async getDocumentById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const document = await this.service.getDocumentById(id);

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

  async updateDocument(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const data: ApplicationDocumentsDTO = req.body;
      const updatedDocument = await this.service.updateDocument(id, data);

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

  async deleteDocument(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const deletedDocument = await this.service.deleteDocument(id);

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
