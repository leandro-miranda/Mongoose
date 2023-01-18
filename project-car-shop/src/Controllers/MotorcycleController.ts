import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      return this.next(error);
    }
  }

  public async find() {
    try {
      const motorcycles = await this.service.find();
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      return this.next(error);
    }
  }

  public async findOne() {
    try {
      const motorcycle = await this.service.findOne(this.req.params.id);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      return this.next(error);
    }
  }

  public async update() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const updatedMotorcycle = await this.service.update(
        this.req.params.id,
        motorcycle,
      );
      return this.res.status(200).json(updatedMotorcycle);
    } catch (error) {
      return this.next(error);
    }
  }

  public async delete() {
    try {
      await this.service.delete(this.req.params.id);
      return this.res.status(240).send();
    } catch (error) {
      return this.next(error);
    }
  }
}