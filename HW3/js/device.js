"use strict"

//variable for protection our devices from voltage differential
var voltage = parseInt(Math.random() * (250 - 210) + 210);

//abstract class
class DeviceControl {
    constructor() {
        this._state = false;
    }

    on() {
        this._state = true;
    }

    off() {
        this._state = false;
    }

    get state() {
        return this._state;
    }

    voltageProtection() {
        if (voltage >= 239) {
            return this._state = false;
        } else {
            return this._state = true;
        }
    }
}


