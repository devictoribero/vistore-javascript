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
var Serializer_1 = require("./Serializer");
var NumberSerializer = /** @class */ (function (_super) {
    __extends(NumberSerializer, _super);
    function NumberSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberSerializer.prototype.serialize = function (data) {
        return data.toString();
    };
    NumberSerializer.prototype.deserialize = function (data) {
        return data;
    };
    return NumberSerializer;
}(Serializer_1.default));
exports.default = NumberSerializer;
