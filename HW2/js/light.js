"use strict"

//constructor Light
function  Light(name, brand, type, power, lighting, bright) {
    var self = this;
    this._name = name;
    this._brand = brand;
    this._type = type;
    this._power = power;
    this._lighting = lighting;
    this._bright = 0;
    this._state = false;
    DeviceControl.apply(this, arguments);
}

Light.prototype = Object.create(DeviceControl.prototype);
Light.prototype.constructor = Light;

Light.prototype.getName = function() {
    return this._name;
}

Light.prototype.getBrand = function() {
    return this._brand;
}

Light.prototype.getBright = function() {
    return this._bright;
}

Light.prototype.addBright = function() {
     var max = 950;
     if (this._bright > max) {
         return;
     }
    return this._bright += 50;
}

Light.prototype.removeBright = function() {
    var min = 0;
    if (this._bright <= min) {
        return;
    }
    return this._bright -= 50;
}

