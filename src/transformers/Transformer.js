var Transformer = /** @class */ (function () {
    function Transformer(numberSerializer) {
        this.numberSerializer = numberSerializer;
    }
    Transformer.prototype.serialize = function (key, data) {
        if (typeof data === 'number') {
            this.dictionary[key] = 'number';
            return this.numberSerializer.serialize(data);
        }
        if (typeof data === 'string') {
            this.dictionary[key] = 'number';
            return data;
        }
    };
    Transformer.prototype.deserialize = function (key) {
        var data = this.dictionary.key;
        if (typeof this.dictionary.key === 'number') {
            return this.numberSerializer.deserialize(data);
        }
        if (typeof this.dictionary.key === 'string') {
            return data;
        }
    };
    return Transformer;
}());
export default Transformer;
