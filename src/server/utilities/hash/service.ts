//

/**
 * Password hashing convience functions
 */

import bcrypt from "bcryptjs";

/**
 * Hashes a user input password and returns the hash
 * (password salting defaults to a random lenght of 10 characters if unspecified)

 * @param raw_password 
 * @param salt salt string or length of a randomly generated salt
 * @returns Promise resolved to hashed password
 */
export async function hashPassword(
	raw_password: string,
	salt: string | number | null = 10
): Promise<string> {
	return await bcrypt.hash(raw_password, salt);
}

/**
 * Compares a user input password against a hashed password
 * (note: password salting/unsalting is abstracted, as the salt is stored in the hashed password)
 * @param raw_password
 * @param hashed_password
 * @returns Promise resolved to true if passwords match
 */
export async function compareHashedPassword(
	raw_password: string,
	hashed_password: string
): Promise<boolean> {
	return await bcrypt.compare(raw_password, hashed_password);
}
