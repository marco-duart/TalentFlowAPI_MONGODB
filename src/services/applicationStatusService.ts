import ApplicationStatusRepository from '../repositories/applicationStatusRepository';
import { UpdateApplicationStatusDTO, CreateApplicationStatusDTO } from '../dto/applicationStatusDTO';
import { IApplicationStatus } from '../entities/ApplicationStatus';

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

  async getById(id): Promise<IApplicationStatus> {
    return await this.repository.findById(id);
  }

  async update(id, data: UpdateApplicationStatusDTO): Promise<IApplicationStatus> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<IApplicationStatus> {
    return await this.repository.softDelete(id)
  }

}

export default ApplicationStatusService;
