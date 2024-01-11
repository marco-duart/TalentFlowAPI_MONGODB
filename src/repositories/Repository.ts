import { Model, Document, Schema } from 'mongoose';

class BaseRepository<T extends Document> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: Partial<T>): Promise<T> {
    const createdDocument = await this.model.create(data);
    if (!createdDocument) {
      throw new Error('Erro ao criar o Item');
    }
    return createdDocument;
  }

  async findById(id: string): Promise<T | null> {
    const document = await this.model.findById(id).exec();
    if (!document) {
      throw new Error(`ID ${id} - Item não encontrado`);
    }
    return document;
  }

  async findAll(): Promise<T[]> {
    const documents = await this.model.find({ deletedAt: null }).exec();
    if (!documents || documents.length === 0) {
      throw new Error('Nenhum item encontrado');
    }
    return documents;
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    const updatedDocument = await this.model.findByIdAndUpdate(id, { ...data }, { new: true }).exec();
    if (!updatedDocument) {
      throw new Error(`ID ${id} - Item não encontrado para atualização`);
    }
    return updatedDocument;
  }

  async softDelete(id: string): Promise<T | null> {
    const deletedDocument = await this.model.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true }).exec();
    if (!deletedDocument) {
      throw new Error(`ID ${id} - Item não encontrado para exclusão`);
    }
    return deletedDocument
  }
}

export default BaseRepository;