import ICar from '../../src/Interfaces/ICar';
import Car from '../../src/Domains/Car';

export const inputCarCreate: ICar = {
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12,
  doorsQty: 2,
  seatsQty: 5,
};

export const outputCar: Car = new Car({
  id: '5f9f1b9b9b9b9b9b9b9b9b9b',
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12,
  doorsQty: 2,
  seatsQty: 5,
});

export const outputCarAll: ICar[] = [
  {
    id: '5f9f1b9b9b9b9b9b9b9b9b9b',
    model: 'Marea',
    year: 1992,
    color: 'Red',
    status: true,
    buyValue: 12,
    doorsQty: 2,
    seatsQty: 5,
  },
  {
    id: '63c42816c76c72f135dfdcc0',
    model: 'Onix Sedan',
    year: 2020,
    color: 'Black',
    status: true,
    buyValue: 59,
    doorsQty: 3,
    seatsQty: 8,
  },
  {
    id: '63c42840c76c72f135dfdcc2',
    model: 'Up',
    year: 2017,
    color: 'White',
    status: true,
    buyValue: 35,
    doorsQty: 1,
    seatsQty: 4,
  },
];