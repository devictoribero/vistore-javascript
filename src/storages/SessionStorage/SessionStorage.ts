import KeyAlreadyExistInLocalStorageException from "./Exceptions/KeyAlreadyExistInSessionStorageException";
import StorageInterface from "../StorageInterface";
import Storage from "../Storage";

export default class SessionStorage extends Storage implements StorageInterface {
  get(key: string): any {
    return this._serializer.deserialize(key);
  }

  getAll(): any {
    const keys = Object.keys(localStorage);
    let i = keys.length;

    let values = [];
    while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
    }

    return values;
  }

  set(key: string, value: any, overwrite: boolean = true): void {
    if (!overwrite && localStorage.getItem(key)) {
      throw new KeyAlreadyExistInLocalStorageException();
    }
    
    localStorage.setItem(key, this._serializer.serialize(value))
  }

  remove(key: string): void {
    if (!localStorage.getItem(key)) {
      throw new KeyAlreadyExistInLocalStorageException();
    }

    localStorage.removeItem(key);
  }

  removeAll(): void {
    localStorage.clear();
  }

}