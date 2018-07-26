//variable for protection our devices from voltage differential
var voltage = parseInt(Math.random() * (250 - 210) + 210);
var root = document.body.children[0];

//constructor SmartHouse

function SmartHouse(address, light, TV, conditioner) {
    this._address = address;
    this._light = [];
    this._TV = [];
    this._conditioner = [];
    this._state = document.createElement("div");
}

SmartHouse.prototype.getState = function() {
    return this._state;
};

SmartHouse.prototype.setLight = function(light) {
    this._light.push(light);
};

SmartHouse.prototype.hasTV = function(TV) {
    if(TV === undefined) {
        return this._TV;
    }
    this._TV.push(TV);
};

SmartHouse.prototype.hasCondition = function(conditioner) {
    if(conditioner === undefined) {
        return this._conditioner;
    }
    this._conditioner.push(conditioner);
};

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

DeviceControl.prototype.getState = function() {
    return this._state;
};

DeviceControl.prototype.voltageProtection = function () {
    if (voltage >= 239) {
        return this._state = false;
    } else {
        return this._state = true;
    }
};

//constructor Light
function  Light(name, brand, type, power, lighting) {
    this._name = name;
    this._brand = brand;
    this._type = type;
    this._power = power;
    this._lighting = lighting;
    this._bright = 0;
    this._state = false;
    DeviceControl.apply(this, arguments);
};

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

Light.prototype.addBright = function () {
   /* var max = 1000,
        min = 0;
    if (bright > max || bright < min) {
        return;
    }*/

    return this._bright += 50;
};

Light.prototype.removeBright = function(bright) {

};

Light.prototype.brightChange = function() {
    this._bright.innerText = "Bright: " + this._bright;
};

Light.prototype.renderLight = function() {
    var lamp = document.createElement("div");
    lamp.className = "light";
    lamp.innerHTML = this._name;

    var bright = document.createElement("span");
    bright.className = "prop";
    bright.innerText = "Bright = " + this._bright;	

    var increaseBright = document.createElement("button");
    increaseBright.type = "button";
    increaseBright.className = 'settingsBtn';
    increaseBright.innerHTML = "Bright Up";
    increaseBright.addEventListener("click", function () {
		console.log(this._bright);
            this.addBright();
            Light.prototype.brightChange();
    }, false);
	
	this.brightChange();
    root.appendChild(lamp);
    lamp.appendChild(bright);
    lamp.appendChild(increaseBright);
};


//constructor TV
function TV(name, brand, displaySize) {
    this._name = name;
    this._brand = brand;
    this._displaySize = displaySize;
    DeviceControl.apply(this, arguments);

};

TV.prototype = Object.create(DeviceControl.prototype);
TV.prototype.constructor = TV;

TV.prototype.changeChannel = function (channel, setChannel) {
    var firstChannel = 1,
        lastChannel = 100;
    if(channel < firstChannel || channel > lastChannel) {
        return;
    }

    switch (setChannel) {
        case "next":
            channel++;
            break;
        case "prev":
            channel--;
            break;
        default:
           return channel;
    }
    return channel;
};

//create Plazma TV
var plazma = new TV("Plazma", "Samsung", "50d");

//constructor Conditioner
function Conditioner(name, brand, power) {
    this._name = name;
    this._brand = brand;
    this._power = power;
    DeviceControl.apply(this, arguments)
};

Conditioner.prototype = Object.create(DeviceControl.prototype);
Conditioner.prototype.constructor = Conditioner;

Conditioner.prototype.changeTemperature = function (temperature, setTemperature) {
    var minTemperature = 10,
        maxTemperature = 30;
    if(temperature < minTemperature || temperature > maxTemperature) {
        return;
    }
    switch (setTemperature) {
        case "forward":
            temperature++;
            break;
        case "back":
            temperature--;
            break;
        default:
            return temperature;
    }
    return temperature;
};

/*Conditioner.prototype.selfCleaning = function () {
    console.log("Conditioner is cleaning itself")
};*/

//create conditioner with humidifier(увлажнитель)
var humidifier = new Conditioner("Conditioner-Humidifier", "Zelmer", "1500 Watt");

//creating PentHouse of dream
var pentHouse = new SmartHouse("14 Manhattan, New York, USA", [floorLamp, lusterLamp], plazma, humidifier);
pentHouse = document.createElement("div");
pentHouse.className = "house";
pentHouse.innerHTML = "Smart House";
root.appendChild(pentHouse);

//create floorLamp
var floorLamp = new Light("Floor lamp", "Panasonic", "floor lamp", "60W", "cold light");
floorLamp.renderLight();


//create Luster
var lusterLamp = new Light("Luster", "Shine Like Sun", "luster", "100W", "warm light");


