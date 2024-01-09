import EmploymentHistoryRepository from '../repositories/employmentHistoryRepository';
import { UpdateEmploymentHistoryDTO, CreateEmploymentHistoryDTO } from '../dto/employmentHistoryDTO';
import { IEmploymentHistory } from '../entities/EmploymentHistory';

class EmploymentHistoryService {
  private repository: EmploymentHistoryRepository;

  constructor(repository: EmploymentHistoryRepository) {
    this.repository = repository;
  }

  async create(data: CreateEmploymentHistoryDTO): Promise<IEmploymentHistory> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IEmploymentHistory[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IEmploymentHistory> {
    return await this.repository.findById(id);
  }

  async update(id, data: UpdateEmploymentHistoryDTO): Promise<IEmploymentHistory> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<IEmploymentHistory> {
    return await this.repository.softDelete(id)
  }

}

export default EmploymentHistoryService;
