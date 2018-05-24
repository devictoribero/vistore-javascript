import Serializer from "./serializers/Serializer";
import Storage from "./storages/Storage";

const serializer = new Serializer();
const localVistorage = new Storage(window.localStorage, serializer);
const sessionVistorage = new Storage(window.sessionStorage, serializer);

const Vistorage = {
  local: localVistorage,
  session: sessionVistorage,
};

export default Vistorage;
