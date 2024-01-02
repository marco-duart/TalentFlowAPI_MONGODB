import { Model, Document, Schema } from 'mongoose';

class BaseRepository<T> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: Partial<T>): Promise<T> {
    return this.model.create({ ...data, active: true });
  }

  async findById(id: Schema.Types.ObjectId): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async update(id: Schema.Types.ObjectId, data: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, { ...data }, { new: true }).exec();
  }

  async softDelete(id: Schema.Types.ObjectId): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, { active: false }, { new: true }).exec();
  }
}

export default BaseRepository;
