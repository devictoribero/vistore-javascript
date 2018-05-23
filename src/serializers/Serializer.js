var Serializer = /** @class */ (function () {
    function Serializer() {
    }
    Serializer.prototype.serialize = function (data) {
        return JSON.stringify(data);
    };
    Serializer.prototype.deserialize = function (dataSerialized) {
        return JSON.parse(dataSerialized);
    };
    return Serializer;
}());
export default Serializer;
