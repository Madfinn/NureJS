"use strict"

//constructor SmartHouse
class SmartHouse {
    constructor(name, address) {
        this._name = name;
        this._address = address;
        this._devices = [];
    }

    setDevice(device) {
        this._devices.push(device);
        return this._devices;
    }

}


