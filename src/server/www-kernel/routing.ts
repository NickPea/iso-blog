//

import express from "express";
const routing = express.Router();

//features
import Test from "../features/domain/test/controller";
import Api from "../features/domain/api/controller";
import Authentication from "../features/core/authenticate/controller";
import IsomorphicReact from "../features/core/isomorphic-react/controller";
import ArticlesController from "../features/domain/articles/controller";

/**
 * Server Prefixed Routes
 */

routing.use("/test", Test);
routing.use("/api", Api);
routing.use('/article', ArticlesController)
routing.use("/auth", Authentication);
routing.use("/", IsomorphicReact);

/**
 * End
 */

//
export default routing;
