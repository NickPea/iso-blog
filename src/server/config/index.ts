//

import path from 'path';

// import dotenv from "dotenv";
// dotenv.config({path: /** path/to/env/file */});

//APP
export const PORT = process.env.PORT || 8080;
export const DOMAIN_URL = process.env.DOMAIN_URL || 'localhost'

//DB
export const MONGO_DB_CONNECTION_STRING =
	process.env.MONGO_DB_CONNECTION_STRING || "mongodb://localhost/test";

//JWT
export const JWT_SECRET_OR_PRIVATE_KEY =
	process.env.JWT_SECRET_OR_PRIVATE_KEY || "ssssshhh";

//AXIOS
export const AXIOS_DEFAULTS_BASE_URL =
	process.env.AXIOS_DEFAULTS_BASE_URL || "some-website-url";
