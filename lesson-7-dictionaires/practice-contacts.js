"use strict";
class MyContacts {
    constructor() {
        this.hashTable = {};
    }
    add(name, phoneNumber) {
        const previousValue = this.get(name);
        if (!previousValue) {
            this.hashTable[name] = [phoneNumber];
        }
        else {
            if (previousValue.includes(phoneNumber)) {
                console.log(`${name} already has this phone number: ${phoneNumber}`);
            }
            else {
                previousValue.push(phoneNumber);
            }
        }
    }
    get(name) {
        return this.hashTable[name];
    }
}
const johnsContacts = new MyContacts();
johnsContacts.add("brother", "0747123456");
johnsContacts.add("brother", "0211234567");
console.log(johnsContacts.get("brother"));
console.log(johnsContacts.get("unknown"));
johnsContacts.add("brother", "0211234567");
