import canSerialize from "./CanSerialize";

export default class Serializer implements canSerialize {

  serialize(data: any): string {
    return JSON.stringify(data);
  }

  deserialize(dataSerialized: string): any {
    return JSON.parse(dataSerialized);
  }

}