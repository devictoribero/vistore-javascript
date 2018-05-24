import canSerialize from "./CanSerialize";
export default class Serializer implements canSerialize {
    serialize(data: any): string;
    deserialize(dataSerialized: string): any;
}
