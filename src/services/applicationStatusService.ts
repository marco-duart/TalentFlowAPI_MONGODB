import ApplicationStatusRepository from '../repositories/applicationStatusRepository';
import ApplicationStatusDTO from './applicationStatusDTO';
import { IApplicationStatus } from '../entities/ApplicationStatus';

class ApplicationStatusService {
  private repository: ApplicationStatusRepository;

  constructor(repository: ApplicationStatusRepository) {
    this.repository = repository;
  }

  async create(data: ApplicationStatusDTO): Promise<IApplicationStatus> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IApplicationStatus[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IApplicationStatus> {
    return await this.repository.findById(id);
  }

  async update(id, data: ApplicationStatusDTO): Promise<IApplicationStatus> {
    return await this.repository.update(id, data)
  }

  async softDelete(): Promise<IApplicationStatus> {
    return await this.repository.softDelete(id)
  }

}

export default ApplicationStatusService;
