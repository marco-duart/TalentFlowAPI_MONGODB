import ApplicationDocumentsRepository from '../repositories/applicationDocumentsRepository';
import ApplicationDocumentsDTO from './applicationDocumentsDTO';
import { IApplicationDocuments } from '../entities/ApplicationDocuments';

class ApplicationDocumentsService {
  private repository: ApplicationDocumentsRepository;

  constructor(repository: ApplicationDocumentsRepository) {
    this.repository = repository;
  }

  async create(data: ApplicationDocumentsDTO): Promise<IApplicationDocuments> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IApplicationDocuments[]> {
    return await this.repository.findAll(id);
  }

  async getById(id: string): Promise<IApplicationDocuments> {
    return await this.repository.findById(id);
  }

  async update(id: string, data: ApplicationDocumentsDTO): Promise<IApplicationDocuments> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<IApplicationDocuments> {
    return await this.repository.softDelete(id)
  }

}

export default ApplicationDocumentsService;
