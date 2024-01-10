import HiringProcessRepository from '../repositories/hiringProcessRepository';
import { UpdateHiringProcessDTO, CreateHiringProcessDTO } from '../dto/hiringProcessDTO';
import { IHiringProcess } from '../entities/HiringProcess';
import { Schema } from 'mongoose';

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

  async getById(id: string): Promise<IHiringProcess | null> {
    return await this.repository.findById(new Schema.Types.ObjectId(id));
  }

  async update(id: string, data: UpdateHiringProcessDTO): Promise<IHiringProcess | null> {
    return await this.repository.update(new Schema.Types.ObjectId(id), data)
  }

  async softDelete(id: string): Promise<IHiringProcess | null> {
    return await this.repository.softDelete(new Schema.Types.ObjectId(id))
  }

}

export default HiringProcessService;
