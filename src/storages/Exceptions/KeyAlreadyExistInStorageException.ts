export default class KeyAlreadyExistInStorageException extends Error {
  constructor() {
    super('The Key provided already exist in SessionStorage');
  }
}