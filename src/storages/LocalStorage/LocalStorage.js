"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var KeyAlreadyExistInLocalStorageException_1 = require("./Exceptions/KeyAlreadyExistInLocalStorageException");
var Storage_1 = require("../Storage");
var LocalStorage = /** @class */ (function (_super) {
    __extends(LocalStorage, _super);
    function LocalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalStorage.prototype.get = function (key) {
        return this._transformer.deserialize(key);
    };
    LocalStorage.prototype.getAll = function () {
        var values = [];
        var keys = Object.keys(localStorage);
        var i = keys.length;
        while (i--) {
            values.push(localStorage.getItem(keys[i]));
        }
        return values;
    };
    LocalStorage.prototype.set = function (key, value, config) {
        if (!config.overwrite && localStorage.getItem(key)) {
            throw new KeyAlreadyExistInLocalStorageException_1.default();
        }
        localStorage.setItem(key, this._transformer.serialize(key, value));
    };
    LocalStorage.prototype.remove = function (key) {
        if (!localStorage.getItem(key)) {
            throw new KeyAlreadyExistInLocalStorageException_1.default();
        }
        localStorage.removeItem(key);
    };
    LocalStorage.prototype.removeAll = function () {
        localStorage.clear();
    };
    return LocalStorage;
}(Storage_1.default));
exports.default = LocalStorage;
