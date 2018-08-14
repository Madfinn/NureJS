"use strict"
//constructor SmartHouse
function SmartHouse(name, address) {
    this._name = name;
    this._address = address;
    this._devices = [];
}

SmartHouse.prototype.setDevice = function(device) {
    this._devices.push(device);
    return this._devices;
}


