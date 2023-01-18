import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import ErrorMessage from '../Middleware/ErrorMessage';

const INVALID_MONGO_ID = 'Invalid mongo id';
const CAR_NOT_FOUND = 'Car not found';

export default class CarService {
  createCarDomain(car: ICar) {
    const newCar = new Car(car);

    return newCar;
  }

  public isValidId(id: string) {
    const isValid = isValidObjectId(id);

    return isValid;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    const result = this.createCarDomain(newCar);

    return result;
  }

  public async find() {
    const carODM = new CarODM();
    const cars = await carODM.find();
    const result = cars.map((car) => this.createCarDomain(car));

    return result;
  }

  public async findOne(id: string) {
    if (!this.isValidId(id)) throw new ErrorMessage(422, INVALID_MONGO_ID);

    const car = await new CarODM().findOne(id);
    if (!car) throw new ErrorMessage(404, CAR_NOT_FOUND);

    return this.createCarDomain(car);
  }

  public async update(id: string, car: ICar) {
    if (!this.isValidId(id)) throw new ErrorMessage(422, INVALID_MONGO_ID);

    const carODM = new CarODM();
    const updatedCar = await carODM.update(id, car);
    if (!updatedCar) throw new ErrorMessage(404, CAR_NOT_FOUND);

    return this.createCarDomain(updatedCar);
  }

  public async delete(id: string) {
    if (!this.isValidId(id)) throw new ErrorMessage(422, INVALID_MONGO_ID);

    const carODM = new CarODM();
    const deletedCar = await carODM.delete(id);
    if (!deletedCar) throw new ErrorMessage(404, CAR_NOT_FOUND);

    return this.createCarDomain(deletedCar);
  }
}