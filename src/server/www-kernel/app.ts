//

import express from "express";
import path from "path";
//
import morgan from "morgan";
//
import ApiRouter from "../serve-api/api-router";
import IsoAppRouter from "../serve-iso-app/app-router";

// ------------------------------------------------------ //

import "../loaders";

export const app = express();

//assets
app.use(express.static(path.join(__dirname, "./")));

//middleware
app.use(morgan("tiny"));

//
app.use(ApiRouter);
app.use(IsoAppRouter);
