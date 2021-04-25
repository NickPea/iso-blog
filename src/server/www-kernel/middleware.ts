//

import express from "express";
const middleware = express.Router();

//utilities
import { fileUploadMiddleware } from "../utilities/file-upload/middleware";
import trimStrings from "../utilities/sanitize/trim-strings";

/**
 * Server Application-Level Middleware
 */

middleware.use(express.json());
middleware.use(express.urlencoded({ extended: true }));
middleware.use(fileUploadMiddleware);
middleware.use(trimStrings());

/**
 * End
 */

export default middleware;
