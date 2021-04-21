//

import express from 'express';
import ApiController from './api-controller';

const prefix = express.Router();
const apiRouter = express.Router();

//routes
apiRouter.get('/get-example-data', ApiController.getExampleData);


export default prefix.use('/api', apiRouter)