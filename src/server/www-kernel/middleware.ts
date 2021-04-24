//

import express from "express";
const middleware = express.Router();

//middleware imports
import { fileUploadMiddleware } from "../core/file-upload/middleware";
import trimStrings from "../core/sanitize/trim-strings";

/**
 * Application-Level Middleware
 */

middleware.use(express.json());
middleware.use(express.urlencoded({ extended: true }));
middleware.use(fileUploadMiddleware);
middleware.use(trimStrings());

/**
 * End
 */

export default middleware;
