//

import express from 'express';
import ApiController from './api-controller';

const prefix = express.Router();
const router = express.Router();

//routes
router.get('/get-example-data', ApiController.getExampleData);


export default prefix.use('/api', router)