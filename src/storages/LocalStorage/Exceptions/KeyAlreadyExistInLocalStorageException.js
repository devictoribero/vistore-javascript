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
var KeyAlreadyExistInLocalStorageException = /** @class */ (function (_super) {
    __extends(KeyAlreadyExistInLocalStorageException, _super);
    function KeyAlreadyExistInLocalStorageException() {
        return _super.call(this, 'The Key provided already exist in LocalStorageException') || this;
    }
    return KeyAlreadyExistInLocalStorageException;
}(Error));
export default KeyAlreadyExistInLocalStorageException;
