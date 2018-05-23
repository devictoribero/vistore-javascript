import CanSerialize from "../serializers/CanSerialize";

export default abstract class Storage {
  protected _serializer: CanSerialize;

  constructor(serializer: CanSerialize) {
    this._serializer = serializer;
  }
}