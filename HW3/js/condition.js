"use strict"

//constructor Conditioner
class Conditioner extends DeviceControl {
    constructor(name, brand, power) {
        super();
        this._name = name;
        this._brand = brand;
        this._power = power;
        this._temperature = 20;
    }

    addTemp() {
        let max = 30;
        if (this._temperature >= max) {
            return;
        }
         this._temperature++;
    }

    removeTemp() {
        let min = 10;
        if (this._temperature <= min) {
            return;
        }
         this._temperature--;
    }
}


