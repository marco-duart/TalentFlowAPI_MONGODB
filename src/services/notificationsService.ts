import NotificationsRepository from '../repositories/notificationsRepository';
import { UpdateNotificationsDTO, CreateNotificationsDTO } from '../dto/notificationsDTO';
import { INotifications } from '../entities/Notifications';
import { Schema } from 'mongoose';

class NotificationsService {
  private repository: NotificationsRepository;

  constructor(repository: NotificationsRepository) {
    this.repository = repository;
  }

  async create(data: CreateNotificationsDTO): Promise<INotifications> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<INotifications[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<INotifications | null> {
    return await this.repository.findById(new Schema.Types.ObjectId(id));
  }

  async update(id: string, data: UpdateNotificationsDTO): Promise<INotifications | null> {
    return await this.repository.update(new Schema.Types.ObjectId(id), data)
  }

  async softDelete(id: string): Promise<INotifications | null> {
    return await this.repository.softDelete(new Schema.Types.ObjectId(id))
  }

}

export default NotificationsService;
