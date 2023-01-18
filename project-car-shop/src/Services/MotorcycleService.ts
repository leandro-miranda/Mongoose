import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import ErrorMessage from '../Middleware/ErrorMessage';
import MotorcycleODM from '../Models/MotorcycleODM';

const INVALID_MONGO_ID = 'Invalid mongo id';
const MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';

export default class MotorcycleService {
  createMotorcycleDomain(moto: IMotorcycle) {
    const newMotorcycle = new Motorcycle(moto);

    return newMotorcycle;
  }

  public isValidId(id: string) {
    const isValid = isValidObjectId(id);

    return isValid;
  }

  public async create(moto: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(moto);
    const result = this.createMotorcycleDomain(newMotorcycle);

    return result;
  }

  public async find() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.find();
    const result = motorcycles.map((moto) => this.createMotorcycleDomain(moto));

    return result;
  }

  public async findOne(id: string) {
    if (!this.isValidId(id)) throw new ErrorMessage(422, INVALID_MONGO_ID);

    const motorcycle = await new MotorcycleODM().findOne(id);
    if (!motorcycle) throw new ErrorMessage(404, MOTORCYCLE_NOT_FOUND);

    return this.createMotorcycleDomain(motorcycle);
  }

  public async update(id: string, moto: IMotorcycle) {
    if (!this.isValidId(id)) throw new ErrorMessage(422, INVALID_MONGO_ID);

    const motorcycleODM = new MotorcycleODM();
    const updatedMotorcycle = await motorcycleODM.update(id, moto);
    if (!updatedMotorcycle) throw new ErrorMessage(404, MOTORCYCLE_NOT_FOUND);

    return this.createMotorcycleDomain(updatedMotorcycle);
  }

  public async delete(id: string) {
    if (!this.isValidId(id)) throw new ErrorMessage(422, INVALID_MONGO_ID);

    const motorcycle = await new MotorcycleODM().delete(id);
    if (!motorcycle) throw new ErrorMessage(404, MOTORCYCLE_NOT_FOUND);

    return this.createMotorcycleDomain(motorcycle);
  }
}