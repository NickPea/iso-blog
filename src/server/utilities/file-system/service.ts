/**
 * file system helper methods
 */

import fs from "fs";
import fse from "fs-extra";
import path from "path";

/**
 *	Take a relative file path, and file data and saves it.
 * 	(note: the folder will be created if doesn't exist)
 * @param file_path
 * @param file_data
 * @return file path the was saved
 */
export async function saveFileAsync(
	file_path: string,
	file_data: any
): Promise<string> {
	try {
		const absolute_file_path = path.join(__dirname, file_path);
		await fse.outputFile(absolute_file_path, file_data);
		return file_path;
	} catch (error) {
		throw error;
	}
}

/**
 * Takes a relative file path and removes file
 * (note does not remove directories)
 * @param file_path
 * @return file path that was deleted
 */
export async function removeFileAsync(file_path: string): Promise<string> {
	try {
		await fse.rm(path.join(__dirname, file_path), { force: false });
		return file_path;
	} catch (error) {
		throw error;
	}
}
