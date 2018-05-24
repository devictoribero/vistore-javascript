import CanSerialize from "../serializers/CanSerialize";
import StorageInterface from "./StorageInterface";
export default class StorageTest implements StorageInterface {
    private repository;
    private serializer;
    constructor(repository: Storage, serializer: CanSerialize);
    get(key: string): any;
    set(key: string, value: any, overwrite?: boolean): void;
    remove(key: string): void;
    removeAll(): void;
}
