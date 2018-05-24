export default interface CanSerialize {
    serialize(data: any): string;
    deserialize(dataSerialized: string): any;
}
