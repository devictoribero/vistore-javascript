import Serializer from "./Serializer";

export default class NumberSerializer extends Serializer {
  serialize(data: any): string {
    return data.toString();
  }

  deserialize(data: any): number {
    return <number>data;
  }
}