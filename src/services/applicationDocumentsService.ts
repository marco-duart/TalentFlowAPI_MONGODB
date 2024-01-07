import ApplicationDocumentsRepository from '../repositories/applicationDocumentsRepository';
import ApplicationDocumentsDTO from './applicationDocumentsDTO';
import { IApplicationDocuments } from '../entities/ApplicationDocuments';

class ApplicationDocumentsService {
  private repository: ApplicationDocumentsRepository;

  constructor(repository: ApplicationDocumentsRepository) {
    this.repository = repository;
  }

  async create(data: ApplicationDocumentsDTO): Promise<IApplicationDocuments> {
    
    const createdDocument = await this.repository.create(data);
    return createdDocument;
  }

  async getAll(id: string): Promise<IApplicationDocuments | null> {
    const document = await this.repository.findById(id);
    return document;
  }

  async getById(id: string): Promise<IApplicationDocuments | null> {
    const document = await this.repository.findById(id);
    return document;
  }

}

export default ApplicationDocumentsService;
