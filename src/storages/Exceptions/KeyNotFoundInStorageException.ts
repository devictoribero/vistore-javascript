export default class KeyNotFoundInStorageException extends Error {
  constructor() {
    super('The Key provided already exist in SessionStorage');
  }
}