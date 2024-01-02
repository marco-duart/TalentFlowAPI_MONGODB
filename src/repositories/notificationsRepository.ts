import { Model } from 'mongoose';
import BaseRepository from './repository';
import { INotifications } from '../entities/Notifications';

class NotificationsRepository extends BaseRepository<INotifications> {
  constructor(model: Model<INotifications>) {
    super(model);
  }

}

export default NotificationsRepository;
