var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import KeyAlreadyExistInLocalStorageException from "./Exceptions/KeyAlreadyExistInLocalStorageException";
import Storage from "../Storage";
var LocalStorage = /** @class */ (function (_super) {
    __extends(LocalStorage, _super);
    function LocalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalStorage.prototype.get = function (key) {
        return this._serializer.deserialize(localStorage.getItem(key));
    };
    LocalStorage.prototype.set = function (key, value, overwrite) {
        if (overwrite === void 0) { overwrite = true; }
        if (!overwrite && localStorage.getItem(key)) {
            throw new KeyAlreadyExistInLocalStorageException();
        }
        localStorage.setItem(key, this._serializer.serialize(value));
    };
    LocalStorage.prototype.remove = function (key) {
        if (!localStorage.getItem(key)) {
            throw new KeyAlreadyExistInLocalStorageException();
        }
        localStorage.removeItem(key);
    };
    LocalStorage.prototype.removeAll = function () {
        localStorage.clear();
    };
    return LocalStorage;
}(Storage));
export default LocalStorage;
