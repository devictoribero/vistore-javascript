import KeyNotFoundInStorageException from "./Exceptions/KeyNotFoundInStorageException";
import KeyAlreadyExistInStorageException from "./Exceptions/KeyAlreadyExistInStorageException";
var StorageTest = /** @class */ (function () {
    function StorageTest(repository, serializer) {
        this.repository = repository;
        this.serializer = serializer;
    }
    StorageTest.prototype.get = function (key) {
        return this.serializer.deserialize(this.repository.getItem(key));
    };
    StorageTest.prototype.set = function (key, value, overwrite) {
        if (overwrite === void 0) { overwrite = true; }
        if (!overwrite && this.repository.getItem(key)) {
            throw new KeyAlreadyExistInStorageException();
        }
        this.repository.setItem(key, this.serializer.serialize(value));
    };
    StorageTest.prototype.remove = function (key) {
        if (!this.repository.getItem(key)) {
            throw new KeyNotFoundInStorageException();
        }
        this.repository.removeItem(key);
    };
    StorageTest.prototype.removeAll = function () {
        this.repository.clear();
    };
    return StorageTest;
}());
export default StorageTest;
