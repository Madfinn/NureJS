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

//Create floorlamp
var floorLamp = new Light("Floorlamp", "Panasonic", "floor lamp", "60W", "cold light");

floorLamp.renderLight = function() {
    var lamp = document.createElement("div");
    lamp.className = this._name;
    lamp.innerHTML = this._name;

    var brand = document.createElement("div");
    brand.className = "prop";
    brand.innerText = "Brand: " + floorLamp._brand;

    var bright = document.createElement("div");
    bright.className = "prop";

    var brightStatus = document.createElement("div");
    brightStatus.className = "status";
    brightStatus.innerText = "Bright is " + floorLamp._bright;

    var status = document.createElement("div");
    status.className = "status";
    status.innerText = "Light is off";

    function  showStatus() {
        status.innerText = floorLamp._state ? "Light is on" : "Light is off";
    }

    function  showBrightStatus() {
        brightStatus.innerText = "Bright is " + floorLamp._bright;
        if (floorLamp._bright > 0) {
            status.innerText = "Light is on";
        } else {
            status.innerText = "Light is off";
        }
    }

    var increaseBright = document.createElement("button");
    increaseBright.type = "button";
    increaseBright.className = "settingsBtn button";
    increaseBright.innerHTML = "Bright Up";
    increaseBright.addEventListener("click", function () {
        floorLamp.addBright();
        showBrightStatus();
    }, false)

    var decreaseBright = document.createElement("button");
    decreaseBright.type = "button";
    decreaseBright.className = "settingsBtn button";
    decreaseBright.innerHTML = "Bright Down";
    decreaseBright.addEventListener("click", function () {
        floorLamp.removeBright();
        showBrightStatus();
    }, false)

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "onBtn button";
    onBtn.innerHTML = "On";
    onBtn.addEventListener("click", function () {
        floorLamp.on()
        if (floorLamp._bright >= 50) {
            return;
        } else {
            floorLamp._bright = 50;
            showBrightStatus();
            showStatus();
        }
    })

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "offBtn button";
    offBtn.innerHTML = "Off";
    offBtn.addEventListener("click", function () {
        floorLamp.off();
        floorLamp._bright = 0;
        showBrightStatus();
        showStatus();
    })

    root.children[0].children[0].appendChild(lamp);
    bright.appendChild(increaseBright);
    bright.appendChild(decreaseBright);
    lamp.appendChild(brand);
    lamp.appendChild(status);
    lamp.appendChild(onBtn);
    lamp.appendChild(offBtn);
    lamp.appendChild(brightStatus);
    lamp.appendChild(bright);
}

//Create lusterlamp
var lusterLamp = new Light("Luster", "Shine Like Sun", "luster", "100W", "warm light");

lusterLamp.renderLight = function() {
    var lamp = document.createElement("div");
    lamp.className = this._name;
    lamp.innerHTML = this._name;

    var brand = document.createElement("div");
    brand.className = "prop";
    brand.innerText = "Brand: " + lusterLamp._brand;

    var bright = document.createElement("div");
    bright.className = "prop";

    var brightStatus = document.createElement("div");
    brightStatus.className = "status";
    brightStatus.innerText = "Bright is " + lusterLamp._bright;

    var status = document.createElement("div");
    status.className = "status";
    status.innerText = "Light is off";
    function  showStatus() {
        status.innerText = lusterLamp._state ? "Light is on" : "Light is off";
    }

    function  showBrightStatus() {
        brightStatus.innerText = "Bright is " + lusterLamp._bright;
        if (lusterLamp._bright > 0) {
            status.innerText = "Light is on";
        } else {
            status.innerText = "Light is off";
        }
    }

    var increaseBright = document.createElement("button");
    increaseBright.type = "button";
    increaseBright.className = "settingsBtn button";
    increaseBright.innerHTML = "Bright Up";
    increaseBright.addEventListener("click", function () {
        lusterLamp.addBright();
        showBrightStatus();
    }, false)

    var decreaseBright = document.createElement("button");
    decreaseBright.type = "button";
    decreaseBright.className = "settingsBtn button";
    decreaseBright.innerHTML = "Bright Down";
    decreaseBright.addEventListener("click", function () {
        lusterLamp.removeBright();
        showBrightStatus();
    }, false)

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "onBtn button";
    onBtn.innerHTML = "On";
    onBtn.addEventListener("click", function () {
        lusterLamp.on()
        if (lusterLamp._bright >= 50) {
            return;
        } else {
            lusterLamp._bright = 50;
            showBrightStatus();
            showStatus();
        }
    })

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "offBtn button";
    offBtn.innerHTML = "Off";
    offBtn.addEventListener("click", function () {
        lusterLamp.off();
        lusterLamp._bright = 0;
        showBrightStatus();
        showStatus();
    })

    root.children[0].children[0].appendChild(lamp);
    bright.appendChild(increaseBright);
    bright.appendChild(decreaseBright);
    lamp.appendChild(brand);
    lamp.appendChild(status);
    lamp.appendChild(onBtn);
    lamp.appendChild(offBtn);
    lamp.appendChild(brightStatus);
    lamp.appendChild(bright);
}