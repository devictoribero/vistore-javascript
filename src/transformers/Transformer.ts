import Serializer from "../serializers/Serializer";

export default class Transformer {
  private dictionary: any;
  private numberSerializer: Serializer;

  constructor(numberSerializer: Serializer) {
    this.numberSerializer = numberSerializer;
  }

  serialize(key: string, data: any): string {
    if (typeof data === 'number') {
      this.dictionary[key] = 'number';
      return this.numberSerializer.serialize(data)
    }

    if (typeof data === 'string') {
      this.dictionary[key] = 'number';
      return data;
    }
  }

  deserialize(key: string): any {
    const data = this.dictionary.key;
    if (typeof this.dictionary.key === 'number') {
      return this.numberSerializer.deserialize(data)
    }

    if (typeof this.dictionary.key === 'string') {
      return data;
    }
  }
}