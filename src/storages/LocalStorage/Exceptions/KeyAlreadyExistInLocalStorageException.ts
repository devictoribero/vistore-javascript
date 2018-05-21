export default class KeyAlreadyExistInLocalStorageException extends Error {
  constructor() {
    super('The Key provided already exist in LocalStorageException');
  }
}