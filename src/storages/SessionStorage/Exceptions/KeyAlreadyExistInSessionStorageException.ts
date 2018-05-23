export default class KeyAlreadyExistInSessionStorageException extends Error {
  constructor() {
    super('The Key provided already exist in SessionStorage');
  }
}