import express from 'express';
import {celebrate, Joi} from 'celebrate';
import multer from 'multer';
import multerConfig from './config/multer';

import PointsControllers from './controllers/PointsControllers';
import ItemsControllers from './controllers/ItemsControllers';

const routes = express.Router();
const uploads = multer(multerConfig);

const pointsControllers = new PointsControllers();
const itemsControllers = new ItemsControllers();

routes.get('/items', itemsControllers.index);
routes.get('/points/:id', pointsControllers.show);
routes.get('/points', pointsControllers.index);

routes.post(
    '/points', 
    uploads.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()
        })
    },{
        abortEarly: false
    }),
    pointsControllers.create);

export default routes;