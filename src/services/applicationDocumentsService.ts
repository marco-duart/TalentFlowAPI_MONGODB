import ApplicationDocumentsRepository from '../repositories/applicationDocumentsRepository';
import { UpdateApplicationDocumentsDTO, CreateApplicationDocumentsDTO } from '../dto/applicationDocumentsDTO';
import { IApplicationDocuments } from '../entities/ApplicationDocuments';
import { Schema } from 'mongoose';

class ApplicationDocumentsService {
  private repository: ApplicationDocumentsRepository;

  constructor(repository: ApplicationDocumentsRepository) {
    this.repository = repository;
  }

  async create(data: CreateApplicationDocumentsDTO): Promise<IApplicationDocuments> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IApplicationDocuments[]> {
    return await this.repository.findAll();
  }

  async getById(id: string): Promise<IApplicationDocuments> {
    return await this.repository.findById(id);
  }

  async update(id: string, data: UpdateApplicationDocumentsDTO): Promise<IApplicationDocuments> {
    return await this.repository.update(id, data)
  }

  async softDelete(id: string): Promise<IApplicationDocuments> {
    return await this.repository.softDelete(id)
  }

}

export default ApplicationDocumentsService;
