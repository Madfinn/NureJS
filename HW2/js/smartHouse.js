"use strict"
var root = document.body.children[0];

//constructor SmartHouse
function SmartHouse(name, address) {
    this._name = name;
    this._address = address;
    this._devices = [];
}

SmartHouse.prototype.removeDevice = function(elements) {
    var lastElement = elements[elements.length-1];
    if (elements.length > 0) {
        lastElement.parentNode.removeChild(lastElement);
    } else {
        return;
    }
}

SmartHouse.prototype.setDevice = function(device) {
    this._devices.push(device);
    return this._devices;
}

SmartHouse.prototype.renderDevice = function () {
    this._devices.forEach(function (device) {
        device.renderDevice();
    })
}

