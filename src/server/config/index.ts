//


import dotenv from "dotenv";
import path from 'path';
dotenv.config();

//APP
export const PORT = process.env.PORT || 8080;
export const DOMAIN_URL = process.env.DOMAIN_URL || 'http://localhost:8080'

//DB
export const MONGO_DB_CONNECTION_STRING =
	process.env.MONGO_DB_CONNECTION_STRING || "mongodb://localhost/test";

//JWT
export const AUTH_TOKEN_NAME = process.env.AUTH_TOKEN_NAME || 'jwt-auth-token'
export const JWT_SECRET_OR_PRIVATE_KEY =
	process.env.JWT_SECRET_OR_PRIVATE_KEY || "ssssshhh";

//AXIOS
export const AXIOS_DEFAULTS_BASE_URL =
	process.env.AXIOS_DEFAULTS_BASE_URL || "some-website-url";

//EMAIL

//gmail
export const GMAIL_ACCOUNT_1_USERNAME = process.env.GMAIL_ACCOUNT_1_USERNAME || 'unspecified' 
export const GMAIL_ACCOUNT_1_PASSWORD = process.env.GMAIL_ACCOUNT_1_PASSWORD || 'unspecified'
export const GMAIL_ACCOUNT_2_USERNAME = process.env.GMAIL_ACCOUNT_2_USERNAME || 'unspecified' 
export const GMAIL_ACCOUNT_2_PASSWORD = process.env.GMAIL_ACCOUNT_2_PASSWORD || 'unspecified' 

//twilio
export const TWILIO_SENDGRID_SMTP_APIKEY = process.env.TWILIO_SENDGRID_SMTP_APIKEY || 'unspecified'
