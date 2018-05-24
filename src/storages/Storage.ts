import CanSerialize from "../serializers/CanSerialize";
import StorageInterface from "./StorageInterface";
import KeyNotFoundInStorageException from "./Exceptions/KeyNotFoundInStorageException";
import KeyAlreadyExistInStorageException from "./Exceptions/KeyAlreadyExistInStorageException";

export default class StorageTest implements StorageInterface {
  private repository: any;
  private serializer: CanSerialize;

  constructor(repository: Storage, serializer: CanSerialize) {
    this.repository = repository;
    this.serializer = serializer;
  }

  get(key: string): any {
    return this.serializer.deserialize(this.repository.getItem(key));
  }

  set(key: string, value: any, overwrite: boolean = true): void {
    if (!overwrite && this.repository.getItem(key)) {
      throw new KeyAlreadyExistInStorageException();
    }

    this.repository.setItem(key, this.serializer.serialize(value))
  }

  remove(key: string): void {
    if (!this.repository.getItem(key)) {
      throw new KeyNotFoundInStorageException();
    }

    this.repository.removeItem(key);
  }

  removeAll(): void {
    this.repository.clear();
  }
}