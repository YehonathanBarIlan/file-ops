import fs from 'fs/promises';

/**
 * Reads a file from a path.
 * @param filePath
 * @returns {Promise<*>}
 */
async function readTextFile(filePath) {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch (error) {
    console.error('Error reading the file:', error);
  }
}

/**
 * Writes a string to a file.
 * @param {string} filePath - The path to the file.
 * @param {string} content - The content to write to the file.
 * @returns {Promise<void>}
 */
async function writeStringToAFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content, 'utf8');
    console.log(`Successfully wrote to ${filePath}`);
  } catch (error) {
    console.error(`Error writing to file: ${error}`);
  }
}

export { readTextFile, writeStringToAFile };