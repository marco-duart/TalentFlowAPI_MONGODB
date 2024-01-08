import EmploymentHistoryRepository from '../repositories/employmentHistoryRepository';
import EmploymentDTO from './employmentDTO';
import { IEmploymentHistory } from '../entities/EmploymentHistory';

class EmploymentHistoryService {
  private repository: EmploymentHistoryRepository;

  constructor(repository: EmploymentHistoryRepository) {
    this.repository = repository;
  }

  async create(data: EmploymentDTO): Promise<IEmploymentHistory> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IEmploymentHistory[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IEmploymentHistory> {
    return await this.repository.findById(id);
  }

  async update(id, data): Promise<IEmploymentHistory> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<IEmploymentHistory> {
    return await this.repository.softDelete(id)
  }

}

export default EmploymentHistoryService;
