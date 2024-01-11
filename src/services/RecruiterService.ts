import RecruiterRepository from '../repositories/RecruiterRepository';
import { UpdateRecruiterDTO, CreateRecruiterDTO } from '../dto/RecruiterDTO';
import { IRecruiter } from '../entities/Recruiter';
import { Schema } from 'mongoose';

class RecruiterService {
  private repository: RecruiterRepository;

  constructor(repository: RecruiterRepository) {
    this.repository = repository;
  }

  async create(data: CreateRecruiterDTO): Promise<IRecruiter> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IRecruiter[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IRecruiter | null> {
    return await this.repository.findById(id);
  }

  async update(id: string, data: UpdateRecruiterDTO): Promise<IRecruiter | null> {
    return await this.repository.update(id, data)
  }

  async softDelete(id: string): Promise<IRecruiter | null> {
    return await this.repository.softDelete(id)
  }

}

export default RecruiterService;
