import ApplicationStatusRepository from '../repositories/applicationStatusRepository';
import { UpdateApplicationStatusDTO, CreateApplicationStatusDTO } from '../dto/applicationStatusDTO';
import { IApplicationStatus } from '../entities/ApplicationStatus';
import { Schema } from 'mongoose';

class ApplicationStatusService {
  private repository: ApplicationStatusRepository;

  constructor(repository: ApplicationStatusRepository) {
    this.repository = repository;
  }

  async create(data: CreateApplicationStatusDTO): Promise<IApplicationStatus> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IApplicationStatus[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IApplicationStatus | null > {
    return await this.repository.findById(new Schema.Types.ObjectId(id));
  }

  async update(id: string, data: UpdateApplicationStatusDTO): Promise<IApplicationStatus | null > {
    return await this.repository.update(new Schema.Types.ObjectId(id), data)
  }

  async softDelete(id: string): Promise<IApplicationStatus | null > {
    return await this.repository.softDelete(new Schema.Types.ObjectId(id))
  }

}

export default ApplicationStatusService;
