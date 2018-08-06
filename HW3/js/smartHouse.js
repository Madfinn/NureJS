"use strict"

//constructor SmartHouse
class SmartHouse {
    constructor(name, address) {
        this._name = name;
        this._address = address;
        this._devices = [];
    }

   removeDevice(elements) {
        let lastElement = elements[elements.length - 1];
        if (elements.length > 0) {
            lastElement.parentNode.removeChild(lastElement);
        } else {
            return;
        }
    }

    setDevice(device) {
        this._devices.push(device);
        return this._devices;
    }

    renderDevice() {
        this._devices.forEach(function (device) {
            device.renderDevice();
        })
    }
}


