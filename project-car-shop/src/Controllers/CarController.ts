import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      return this.next(error);
    }
  }

  public async find() {
    try {
      const cars = await this.service.find();
      return this.res.status(200).json(cars);
    } catch (error) {
      return this.next(error);
    }
  }

  public async findOne() {
    try {
      const car = await this.service.findOne(this.req.params.id);
      return this.res.status(200).json(car);
    } catch (error) {
      return this.next(error);
    }
  }

  public async update() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const updatedCar = await this.service.update(this.req.params.id, car);
      return this.res.status(200).json(updatedCar);
    } catch (error) {
      return this.next(error);
    }
  }

  public async delete() {
    try {
      await this.service.delete(this.req.params.id);
      return this.res.status(204).send();
    } catch (error) {
      return this.next(error);
    }
  }
}
