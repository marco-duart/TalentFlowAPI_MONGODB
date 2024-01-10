import DashboardRepository from '../repositories/DashboardRepository';
import { UpdateDashboardDTO, CreateDashboardDTO } from '../dto/DashboardDTO';
import { IDashboard } from '../entities/Dashboard';
import { Schema } from 'mongoose';

class DashboardService {
  private repository: DashboardRepository;

  constructor(repository: DashboardRepository) {
    this.repository = repository;
  }

  async create(data: CreateDashboardDTO): Promise<IDashboard> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IDashboard[]> {
    return this.repository.findAll()
  }

  async getById(id: string): Promise<IDashboard | null> {
    return await this.repository.findById(new Schema.Types.ObjectId(id));
  }

  async update(id: string, data: UpdateDashboardDTO): Promise<IDashboard | null> {
    return await this.repository.update(new Schema.Types.ObjectId(id), data)
  }

  async softDelete(id: string): Promise<IDashboard | null> {
    return await this.repository.softDelete(new Schema.Types.ObjectId(id))
  }

}

export default DashboardService;
