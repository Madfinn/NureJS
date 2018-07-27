"use strict"

//variable for protection our devices from voltage differential
var voltage = parseInt(Math.random() * (250 - 210) + 210);

//abstract class
function DeviceControl() {
    this._state = false;
}

DeviceControl.prototype.on = function () {
    this._state = true;
};

DeviceControl.prototype.off = function () {
    this._state = false;
};

DeviceControl.prototype.getState = function () {
    return this._state;
};

DeviceControl.prototype.voltageProtection = function () {
    if (voltage >= 239) {
        return this._state = false;
    } else {
        return this._state = true;
    }
};

