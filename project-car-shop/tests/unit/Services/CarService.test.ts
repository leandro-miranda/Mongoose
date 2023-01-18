import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { inputCarCreate, outputCar, outputCarAll } from '../../Mocks/MocksCar';

describe('CarService', function () {
  it('se cria um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(outputCar);
    const carService = new CarService();
    const result = await carService.create(inputCarCreate);
    expect(result).to.be.deep.equal(outputCar);
    sinon.restore();
  });

  it('se retorna todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(outputCarAll);
    const carService = new CarService();
    const result = await carService.find();
    expect(result).to.be.deep.equal(outputCarAll);
    sinon.restore();
  });

  it('se retorna um carro pelo id', async function () {
    sinon.stub(Model, 'findOne').resolves(outputCar);
    const carService = new CarService();
    const result = await carService.findOne('5f9f1b9b9b9b9b9b9b9b9b9b');
    expect(result).to.be.deep.equal(outputCar);
    sinon.restore();
  });

  it('se retorna um erro ao tentar retornar um carro com id inválido', async function () {
    sinon.stub(Model, 'findOne').resolves({});
    try {
      const carService = new CarService();
      await carService.findOne('5');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
    sinon.restore();
  });

  it('se retorna um erro ao tentar retornar um carro que não existe', async function () {
    sinon.stub(Model, 'findOne').resolves(null);
    try {
      const carService = new CarService();
      await carService.findOne('5f9f1b9b9b9b9b9b9b9b9b99');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
    sinon.restore();
  });

  it('se atualiza um carro pelo id', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves(outputCar);
    const carService = new CarService();
    const result = await carService.update('5f9f1b9b9b9b9b9b9b9b9b9b', inputCarCreate);
    expect(result).to.be.deep.equal(outputCar);
    sinon.restore();
  });
});
