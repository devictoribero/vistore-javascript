import Transformer from "../transformers/Transformer";

export default abstract class Storage {
  protected _transformer: Transformer;

  constructor(transformer: Transformer) {
    this._transformer = transformer;
  }
}