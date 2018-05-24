import Serializer from "./serializers/Serializer";
import Storage from "./storages/Storage";

const serializer = new Serializer();
const localVistorage = new Storage(window.localStorage, serializer);
const sessionVistorage = new Storage(window.sessionStorage, serializer);

const vistorage = {
  local: localVistorage,
  session: sessionVistorage,
};

console.log(vistorage.local);
