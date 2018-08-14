"use strict"
//abstract class
function DeviceControl() {
    this._state = false;
}


 DeviceControl.prototype.on = function() {
        this._state = true;
    }

DeviceControl.prototype.off = function() {
        this._state = false;
    }

DeviceControl.prototype.getState = function() {
        return this._state;
    }




