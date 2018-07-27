"use strict"

//constructor Light
function  Light(name, brand, type, power, lighting, bright) {
    var self = this;
    this._name = name;
    this._brand = brand;
    this._type = type;
    this._power = power;
    this._lighting = lighting;
    this._bright = bright;
    this._state = false;
    DeviceControl.apply(this, arguments);
}

Light.prototype = Object.create(DeviceControl.prototype);
Light.prototype.constructor = Light;

Light.prototype.getName = function() {
    return this._name;
};

Light.prototype.getBrand = function() {
    return this._brand;
};

Light.prototype.getBright = function() {
    return this._bright;
};

Light.prototype.addBright = function() {
    /* var max = 1000,
         min = 0;
     if (bright > max || bright < min) {
         return;
     }*/

    return this._bright += 50;
};

Light.prototype.removeBright = function(bright) {

};

/*Light.prototype.brightChange = function() {
    this._bright.innerText = "Bright: " + this._bright;
};*/

Light.prototype.renderLight = function() {
    var lamp = document.createElement("div");
    lamp.className = "light";
    lamp.innerHTML = this._name;

    var bright = document.createElement("div");
    bright.className = "prop";
    bright.innerText = "Bright = " + this._bright;

    var increaseBright = document.createElement("button");
    increaseBright.type = "button";
    increaseBright.className = 'settingsBtn';
    increaseBright.innerHTML = "Bright Up";
    increaseBright.addEventListener("click", function () {
        console.log(this._bright);
        self.addBright();
        /*Light.prototype.brightChange();*/
    }, false);

    root.children[0].appendChild(lamp);
    bright.appendChild(increaseBright);
    lamp.appendChild(bright);
    /*this.brightChange();

    lamp.appendChild(increaseBright);*/
};



