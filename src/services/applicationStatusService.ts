import ApplicationStatusRepository from '../repositories/applicationStatusRepository';
import ApplicationStatusDTO from './applicationStatusDTO';
import { IApplicationStatus } from '../entities/ApplicationStatus';

class ApplicationStatusService {
  private repository: ApplicationStatusRepository;

  constructor(repository: ApplicationStatusRepository) {
    this.repository = repository;
  }

  async createDocument(data: ApplicationStatusDTO): Promise<IApplicationStatus> {
    
    const createdDocument = await this.repository.create(data);
    return createdDocument;
  }

  async getDocumentById(id: string): Promise<IApplicationStatus | null> {
    // Verificar se existe
    const document = await this.repository.findById(id);
    return document;
  }

}

export default ApplicationStatusService;
