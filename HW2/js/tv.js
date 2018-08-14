"use strict"

//constructor TV
function TV(name, brand, displaySize) {
    DeviceControl.apply(this, arguments);
    this._name = name;
    this._brand = brand;
    this._displaySize = displaySize;
    this._currentChannel = 1;
    this._currentVolume = 18;
}

TV.prototype = Object.create(DeviceControl.prototype);
TV.prototype.constructor = TV;


TV.prototype.getChannel = function() {
    return this._currentChannel;
}

TV.prototype.getVolume = function() {
    return this._currentVolume;
}

TV.prototype.nextChannel = function () {
    var lastChannel = 15;
    if(this._currentChannel >= lastChannel) {
        return;
    }
    this._currentChannel++;
}

TV.prototype.prevChannel = function () {
    var firstChannel = 1;
    if(this._currentChannel <= firstChannel) {
        return;
    }
    this._currentChannel--;
}

TV.prototype.upVolume = function () {
    var maxVolume = 50;
    if(this._currentVolume >= maxVolume) {
        return;
    }
     this._currentVolume++;
}

TV.prototype.downVolume = function () {
    var minVolume = 0;
    if(this._currentVolume <= minVolume) {
        return;
    }
    this._currentVolume--;
}
