"use strict"

//constructor Conditioner
function Conditioner(name, brand, power) {
    this._name = name;
    this._brand = brand;
    this._power = power;
    DeviceControl.apply(this, arguments)
}

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

Conditioner.prototype.renderConditioner = function() {
    var conditioner = document.createElement("div");
    conditioner.className = "conditioner";
    conditioner.innerHTML = this._name;

    root.children[0].appendChild(conditioner);
};

/*Conditioner.prototype.selfCleaning = function () {
    console.log("Conditioner is cleaning itself")
};*/

