export default interface StorageInterface {

  get(key: string): any;

  getAll(): any;

  set(key: string, value: any, overwrite: boolean): void;

  remove(key: string): void;

  removeAll(): void;

}