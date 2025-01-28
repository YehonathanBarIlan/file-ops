// file-ops.service.test.js
import {readTextFile, writeStringToAFile} from './file-ops.service.mjs';
import fs from 'fs/promises';
import expect from 'node:expect';
import {jest} from 'globals';

jest.mock('fs/promises');

describe('file-ops.service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('readTextFile', () => {
    it('should read a file and return its content', async () => {
      const mockContent = 'file content';
      fs.readFile.mockResolvedValue(mockContent);

      const result = await readTextFile('test-file.txt');
      expect(result).toBe(mockContent);
      expect(fs.readFile).toHaveBeenCalledWith('test-file.txt', 'utf-8');
    });

    it('should log an error if reading the file fails', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const mockError = new Error('read error');
      fs.readFile.mockRejectedValue(mockError);

      await readTextFile('test-file.txt');
      expect(consoleSpy).toHaveBeenCalledWith('Error reading the file:', mockError);
      consoleSpy.mockRestore();
    });
  });

  describe('writeStringToAFile', () => {
    it('should write a string to a file', async () => {
      fs.writeFile.mockResolvedValue();

      await writeStringToAFile('test-write-file.txt', 'content');
      expect(fs.writeFile).toHaveBeenCalledWith('test-write-file.txt', 'content', 'utf8');
    });

    it('should log an error if writing to the file fails', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const mockError = new Error('write error');
      fs.writeFile.mockRejectedValue(mockError);

      await writeStringToAFile('test-write-file.txt', 'content');
      expect(consoleSpy).toHaveBeenCalledWith('Error writing to file: Error: write error');
      consoleSpy.mockRestore();
    });
  });
});