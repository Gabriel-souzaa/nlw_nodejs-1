import express from 'express';

import PointsControllers from './controllers/PointsControllers';
import ItemsControllers from './controllers/ItemsControllers';

const routes = express.Router();
const pointsControllers = new PointsControllers();
const itemsControllers = new ItemsControllers();

routes.get('/items', itemsControllers.index);
routes.post('/points', pointsControllers.create);
routes.get('/points/:id', pointsControllers.show);
routes.get('/points', pointsControllers.index);

export default routes;