import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import {
  inputMotorcycleCreate,
  outputMotorcycle,
  outputMotorcycleAll,
} from '../../Mocks/MocksMotorcycle';

describe('MotorcycleService', function () {
  it('se cria uma moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(outputMotorcycle);
    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.create(inputMotorcycleCreate);
    expect(result).to.be.deep.equal(outputMotorcycle);
    sinon.restore();
  });

  it('se retorna todas as motos', async function () {
    sinon.stub(Model, 'find').resolves(outputMotorcycleAll);
    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.find();
    expect(result).to.be.deep.equal(outputMotorcycleAll);
    sinon.restore();
  });

  it('se retorna uma moto pelo id', async function () {
    sinon.stub(Model, 'findOne').resolves(outputMotorcycle);
    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.findOne('5f9f1b9b9b9b9b9b9b9b9b9b');
    expect(result).to.be.deep.equal(outputMotorcycle);
    sinon.restore();
  });

  it('se retorna um erro ao tentar retornar uma moto com id inválido', async function () {
    sinon.stub(Model, 'findOne').resolves({});
    try {
      const motorcycleService = new MotorcycleService();
      await motorcycleService.findOne('5');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
    sinon.restore();
  });

  it('se retorna um erro ao tentar retornar uma moto que não existe', async function () {
    sinon.stub(Model, 'findOne').resolves(null);
    try {
      const motorcycleService = new MotorcycleService();
      await motorcycleService.findOne('5f9f1b9b9b9b9b9b9b9b9b99');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
    sinon.restore();
  });

  it('se atualiza uma moto pelo id', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves(outputMotorcycle);
    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService
      .update('5f9f1b9b9b9b9b9b9b9b9b9b', inputMotorcycleCreate);
    expect(result).to.be.deep.equal(outputMotorcycle);
    sinon.restore();
  });
});
