"use strict"

//constructor TV
class TV extends DeviceControl {
    constructor(name, brand, displaySize) {
        super();
        this._name = name;
        this._brand = brand;
        this._displaySize = displaySize;
        this._currentChannel = 1;
        this._currentVolume = 18;
    }

    nextChannel() {
        let lastChannel = 15;
        if (this._currentChannel >= lastChannel) {
            return;
        }
        return this._currentChannel++;
    }

    prevChannel() {
        let firstChannel = 1;
        if (this._currentChannel <= firstChannel) {
            return;
        }
        return this._currentChannel--;
    }

    upVolume() {
        let maxVolume = 50;
        if (this._currentVolume >= maxVolume) {
            return;
        }
        return this._currentVolume++;
    }

    downVolume() {
        let minVolume = 0;
        if (this._currentVolume <= minVolume) {
            return;
        }
        return this._currentVolume--;
    }
}
