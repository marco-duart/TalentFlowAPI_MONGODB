import NotificationsRepository from '../repositories/notificationsRepository';
import NotificationsDTO from './notificationsDTO';
import { INotifications } from '../entities/Notifications';

class NotificationsService {
  private repository: NotificationsRepository;

  constructor(repository: NotificationsRepository) {
    this.repository = repository;
  }

  async createDocument(data: NotificationsDTO): Promise<INotifications> {
    
    const createdDocument = await this.repository.create(data);
    return createdDocument;
  }

  async getDocumentById(id: string): Promise<INotifications | null> {
    // Verificar se existe
    const document = await this.repository.findById(id);
    return document;
  }

}

export default NotificationsService;
