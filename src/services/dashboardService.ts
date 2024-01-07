import DashboardRepository from '../repositories/dashboardRepository';
import DashboardDTO from './dashboardDTO';
import { IDashboard } from '../entities/Dashboard';

class DashboardService {
  private repository: DashboardRepository;

  constructor(repository: DashboardRepository) {
    this.repository = repository;
  }

  async createDocument(data: DashboardDTO): Promise<IDashboard> {
    
    const createdDocument = await this.repository.create(data);
    return createdDocument;
  }

  async getDocumentById(id: string): Promise<IDashboard | null> {
    // Verificar se existe
    const document = await this.repository.findById(id);
    return document;
  }

}

export default DashboardService;
