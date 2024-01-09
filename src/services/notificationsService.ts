import NotificationsRepository from '../repositories/notificationsRepository';
import { UpdateNotificationsDTO, CreateNotificationsDTO } from '../dto/notificationsDTO';
import { INotifications } from '../entities/Notifications';

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

  async getById(id: string): Promise<INotifications> {
    return await this.repository.findById(id);
  }

  async update(id, data: UpdateNotificationsDTO): Promise<INotifications> {
    return await this.repository.update(id, data)
  }

  async softDelete(id): Promise<INotifications> {
    return await this.repository.softDelete(id)
  }

}

export default NotificationsService;
