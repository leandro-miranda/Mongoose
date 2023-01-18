import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

router.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).find(),
);

router.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findOne(),
);

router.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

router.delete(
  '/motorcycle/:id',
  (req, res, next) => new MotorcycleController(req, res, next).delete(),
);

export default router;