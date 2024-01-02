import { Model } from 'mongoose';
import BaseRepository from './repository';
import { IApplicationDocuments } from '../entities/ApplicationDocuments';

class ApplicationDocumentsRepository extends BaseRepository<IApplicationDocuments> {
  constructor(model: Model<IApplicationDocuments>) {
    super(model);
  }

}

export default ApplicationDocumentsRepository;
