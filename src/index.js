import Serializer from "./serializers/Serializer";
import Storage from "./storages/Storage";
var serializer = new Serializer();
var localVistorage = new Storage(window.localStorage, serializer);
var sessionVistorage = new Storage(window.sessionStorage, serializer);
var vistorage = {
    local: localVistorage,
    session: sessionVistorage,
};
console.log(vistorage.local);
