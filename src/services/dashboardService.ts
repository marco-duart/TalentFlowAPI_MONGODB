import DashboardRepository from '../repositories/dashboardRepository';
import { UpdateDashboardDTO, CreateDashboardDTO } from '../dto/dashboardDTO';
import { IDashboard } from '../entities/Dashboard';

class DashboardService {
  private repository: DashboardRepository;

  constructor(repository: DashboardRepository) {
    this.repository = repository;
  }

  async create(data: CreateDashboardDTO): Promise<IDashboard> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IDashboard> {
    return this.repository.findAll()
  }

  async getById(id: string): Promise<IDashboard | null> {
    return await this.repository.findById(id);
  }

  async update(id, data: UpdateDashboardDTO): Promise<IDashboard> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<IDashboard> {
    return await this.repository.softDelete(id)
  }

}

export default DashboardService;
