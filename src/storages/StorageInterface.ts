export default interface StorageInterface {

  get(key: string): any;

  getAll(): any;

  set(key: string, value: any, config?: object): void;

  remove(key: string): void;

  removeAll(): void;

}