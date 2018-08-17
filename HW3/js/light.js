"use strict"

//constructor Light
class Light extends DeviceControl{
    constructor(name, brand, type, power, lighting, bright) {
        super();
        this._name = name;
        this._brand = brand;
        this._type = type;
        this._power = power;
        this._lighting = lighting;
        this._bright = 0;
        this._state = false;
    }

    get name() {
        return this._name;
    }

    get brand() {
        return this._brand;
    }

    get bright() {
        return this._bright;
    }

    addBright() {
        let max = 950;
        if (this._bright > max) {
            return;
        }
         this._bright += 50;
    }

    removeBright() {
        let min = 0;
        if (this._bright <= min) {
            return;
        }
         this._bright -= 50;
    }
}

