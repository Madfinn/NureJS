"use strict"

//constructor Conditioner
function Conditioner(name, brand, power) {
    DeviceControl.apply(this, arguments)
    this._name = name;
    this._brand = brand;
    this._power = power;
    this._temperature = 20;
}

Conditioner.prototype = Object.create(DeviceControl.prototype);
Conditioner.prototype.constructor = Conditioner;

Conditioner.prototype.getTemperature = function() {
    return this._temperature;
}

Conditioner.prototype.addTemp = function() {
    var max = 30;
    if (this._temperature >= max) {
        return;
    }
     this._temperature++;
}

Conditioner.prototype.removeTemp = function() {
    var min = 10;
    if (this._temperature <= min) {
        return;
    }
     this._temperature--;
}


