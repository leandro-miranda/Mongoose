import express from 'express';
import ErrorHandler from './Middleware/ErrorHandler';
import routerCar from './Routes/CarRoutes';
import routerMotorcycle from './Routes/MotorcycleRoutes';

const app = express();

app.use(express.json());

app.use(routerCar);
app.use(routerMotorcycle);

app.use(ErrorHandler.handle);

export default app;
