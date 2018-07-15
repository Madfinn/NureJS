//constructor SmartHouse
function SmartHouse(name, address, light, TV, conditioner, light2) {
    this._name = name;
    this._address = address;
    this._light = light;
    this._TV = TV;
    this._conditioner = conditioner;
    this._light2 = light2;
}

SmartHouse.prototype.hasLight = function(light) {
    if(light === undefined) {
        return this._light;
    }
    this._light = light;
};

SmartHouse.prototype.hasLight2 = function(light2) {
    if(light2 === undefined) {
        return this._light2;
    }
    this._light2 = light2;
};

SmartHouse.prototype.hasTV = function(TV) {
    if(TV === undefined) {
        return this._TV;
    }
    this._TV = TV;
};

SmartHouse.prototype.hasCondition = function(conditioner) {
    if(conditioner === undefined) {
        return this._conditioner;
    }
    this._conditioner = conditioner;
};

SmartHouse.prototype.info = function() {
    console.log(this._name + " is situated on " + this._address);
    if(this._light) {
        console.log(this._name + " is equipped with light");
    }
    if(this._TV) {
        console.log(this._name + " is equipped with TV");
    }
    if(this._conditioner) {
        console.log(this._name + " is equipped with conditioner");
    }
};

//create PentHouse
function PentHouse(name, address, light, TV, conditioner, light2) {
    SmartHouse.apply(this, arguments);
}
PentHouse.prototype = Object.create(SmartHouse.prototype);
PentHouse.prototype.constructor = PentHouse;

//constructor Light
function  Light(name, brand, type, power, lighting) {
    this._name = name;
    this._brand = brand;
    this._type = type;
    this._power = power;
    this._lighting = lighting;
    this._bright = 0;
};

//variable for protection our devices from voltage differential
var voltage = parseInt(Math.random() * (250 - 210) + 210);

Light.prototype.isOn = function() {
    console.log( this._name + " " + this._brand + " is on");
};

Light.prototype.isOff = function() {
    console.log( this._name + " " + this._brand + " is off");
};

Light.prototype.changeBright = function (bright) {
    var max = 1000,
        min = 0,
        step = 50;
    if (bright > max) {
        return;
    }
    while( this._bright <= max) {
        if (bright === min) {
          return this.isOff();
        } else if(this._bright > min && this._bright <= max){
            return this.isOn()
        }
        this._bright += step;
    }
};

Light.prototype.voltageProtection = function () {
    if (voltage >= 239) {
        console.log(this._name + " " + this._brand + " is automatically off!");
    } else {
        console.log(this._name + " " + this._brand + " is on!");
    }
};

//create constructor floorLamp
function FloorLamp(name, brand,type, power, lighting) {
    Light.apply(this, arguments);
};

FloorLamp.prototype = Object.create(Light.prototype);

FloorLamp.prototype.constructor = FloorLamp;
var floorLamp1 = new FloorLamp("Floor lamp", "Panasonic", "floor lamp", "60W", "cold light");

//create constructor Luster
function Luster(name, brand,type, power, lighting) {
    Light.apply(this, arguments);
};

Luster.prototype = Object.create(Light.prototype);
Luster.prototype.constructor = Luster;
var lusterLamp1 = new Luster("Luster", "Shine Like Sun", "luster", "100W", "warm light");

//constructor TV
function TV(name, brand, displaySize) {
    this._name = name;
    this._brand = brand;
    this._displaySize = displaySize;
};

TV.prototype.isOn = function() {
    console.log(this._name + " " + this._brand + " is on");
};

TV.prototype.isOff = function() {
    console.log(this._name + " " + this._brand + " is off");
};

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

TV.prototype.voltageProtection = function () {
    if (voltage >= 239) {
        console.log(this._name + " " + this._brand + " is automatically off!");
    } else {
        console.log(this._name + " " + this._brand + " is on!");
    }
};

//create constructor Plazma TV
function Plazma(name, brand, displaySize) {
    TV.apply(this, arguments);
};

Plazma.prototype = Object.create(TV.prototype);
Plazma.prototype.constructor = Plazma;

var tv = new Plazma("Plazma", "Samsung", "50d");

//constructor Conditioner
function Conditioner(name, brand, power) {
    this._name = name;
    this._brand = brand;
    this._power = power;
};

Conditioner.prototype.isOn = function() {
    console.log(this._name + " " + this._brand + " is on");
};

Conditioner.prototype.isOff = function() {
    console.log(this._name + " " + this._brand + " is off");
};

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

Conditioner.prototype.selfCleaning = function () {
    console.log("Conditioner is cleaning itself")
};

Conditioner.prototype.voltageProtection = function () {
    if (voltage >= 239) {
        console.log(this._name + " " + this._brand + " is automatically off!");
    } else {
        console.log(this._name + " " + this._brand + " is on!");
    }
};

//create constructor conditioner with humidifier(увлажнитель)
function Humidifier(name, brand, power) {
    Conditioner.apply(this, arguments);
};

Humidifier.prototype = Object.create(Conditioner.prototype);
Humidifier.prototype.constructor = Humidifier;

Humidifier.prototype.isOn = function() {
    Conditioner.prototype.isOn.call(this);
    console.log("and air is humidifying");
};

var cond = new Humidifier("Conditioner-Humidifier", "Zelmer", "1500 Watt");

//creating PentHouse of dream
var dreamPentHouse = new PentHouse("DreamPentHouse", "14 Manhattan, New York, USA", floorLamp1, tv, cond, lusterLamp1);