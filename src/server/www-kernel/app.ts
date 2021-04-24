//

import express from "express";
import path from "path";
//features
import Api from "../domain/api/controller";
import Authentication from "../core/authenticate/controller";
import IsomorphicReact from "../core/isomorphic-react/controller";
// ------------------------------------------------------ //

export const app = express();

//boot default modules
import "./boot";
import middleware from "./middleware";

//assets
app.use(express.static(path.join(__dirname, "./"))); //dist directory

//middleware
app.use(middleware);

//feature
app.use(Api);
app.use(Authentication);
app.use(IsomorphicReact);
