import KeyAlreadyExistInLocalStorageException from "./Exceptions/KeyAlreadyExistInLocalStorageException";
import StorageInterface from "../StorageInterface";
import Storage from "../Storage";

export default class LocalStorage extends Storage implements StorageInterface {
  get(key: string): any {
    return this._transformer.deserialize(key);
  }

  getAll(): any {
    let values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
    }

    return values;
  }

  set(key: string, value: any, config?: any): void {
    if (!config.overwrite && localStorage.getItem(key)) {
      throw new KeyAlreadyExistInLocalStorageException();
    }
    
    localStorage.setItem(key, this._transformer.serialize(key, value))
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