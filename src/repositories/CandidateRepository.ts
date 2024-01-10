import { Model } from 'mongoose';
import BaseRepository from './Repository';
import { ICandidate } from '../entities/Candidate';

class CandidateRepository extends BaseRepository<ICandidate> {
  constructor(model: Model<ICandidate>) {
    super(model);
  }

}

export default CandidateRepository;
