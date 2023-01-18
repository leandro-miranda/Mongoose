import IMotorcycle from '../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../src/Domains/Motorcycle';

export const inputMotorcycleCreate: IMotorcycle = {
  model: 'CBR 600',
  year: 2019,
  color: 'Black',
  status: true,
  buyValue: 30,
  category: 'Custom',
  engineCapacity: 600,
};

export const outputMotorcycle: Motorcycle = new Motorcycle({
  id: '5f9f1b9b9b9b9b9b9b9b9b9b',
  model: 'CBR 600',
  year: 2019,
  color: 'Black',
  status: true,
  buyValue: 30,
  category: 'Custom',
  engineCapacity: 600,
});

export const outputMotorcycleAll: IMotorcycle[] = [
  {
    id: '5f9f1b9b9b9b9b9b9b9b9b9b',
    model: 'CBR 600',
    year: 2019,
    color: 'Black',
    status: true,
    buyValue: 30,
    category: 'Custom',
    engineCapacity: 600,
  },
  {
    id: '63c42816c76c72f135dfdcc0',
    model: 'CBR 1000',
    year: 2018,
    color: 'Red',
    status: true,
    buyValue: 50,
    category: 'Street',
    engineCapacity: 1000,
  },
];