import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

router.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).find(),
);

router.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).findOne(),
);

router.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).update(),
);

router.delete(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).delete(),
);

export default router;