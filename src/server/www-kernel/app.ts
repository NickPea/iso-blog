//

import express from "express";
import path from "path";
//features
import Api from "../features/domain/api/controller";
import Authentication from "../features/core/authenticate/controller";
import IsomorphicReact from "../features/core/isomorphic-react/controller";
// ------------------------------------------------------ //

export const app = express();

import middleware from "./middleware";
import routing from "./routing";

//boot
import "./boot";

//assets
app.use(express.static(path.join(__dirname, "/"))); //dist directory

//middleware
app.use(middleware);

//routing
app.use(routing);
