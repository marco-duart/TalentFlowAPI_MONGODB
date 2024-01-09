import HiringProcessRepository from '../repositories/hiringProcessRepository';
import { UpdateHiringProcessDTO, CreateHiringProcessDTO } from '../dto/hiringProcessDTO';
import { IHiringProcess } from '../entities/HiringProcess';

class HiringProcessService {
  private repository: HiringProcessRepository;

  constructor(repository: HiringProcessRepository) {
    this.repository = repository;
  }

  async create(data: CreateHiringProcessDTO): Promise<IHiringProcess> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IHiringProcess[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IHiringProcess> {
    return await this.repository.findById(id);
  }

  async update(id, data: UpdateHiringProcessDTO): Promise<IHiringProcess> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<IHiringProcess> {
    return await this.repository.softDelete(id)
  }

}

export default HiringProcessService;
