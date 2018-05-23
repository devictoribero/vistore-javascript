import LocalStorage from "./storages/LocalStorage/LocalStorage";
import Serializer from "./serializers/Serializer";

const serializer = new Serializer();
const localstorage = new LocalStorage(serializer);

localstorage.set('name', 'Victor');
localstorage.set('age', 25);
localstorage.set('job', { company: 'Zeelo', role: 'frontend'});
console.log(localstorage.get('name'));
console.log(localstorage.get('age'));
console.log(localstorage.get('job'));
