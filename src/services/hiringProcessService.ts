import HiringProcessRepository from '../repositories/hiringProcessRepository';
import HiringProcessDTO from './hiringProcessDTO';
import { IHiringProcess } from '../entities/HiringProcess';

class HiringProcessService {
  private repository: HiringProcessRepository;

  constructor(repository: HiringProcessRepository) {
    this.repository = repository;
  }

  async createDocument(data: HiringProcessDTO): Promise<IHiringProcess> {
    
    const createdDocument = await this.repository.create(data);
    return createdDocument;
  }

  async getDocumentById(id: string): Promise<IHiringProcess | null> {
    // Verificar se existe
    const document = await this.repository.findById(id);
    return document;
  }

}

export default HiringProcessService;
