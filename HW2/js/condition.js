"use strict"

//constructor Conditioner
function Conditioner(name, brand, power) {
    this._name = name;
    this._brand = brand;
    this._power = power;
    this._temperature = 20;
    DeviceControl.apply(this, arguments)
}

Conditioner.prototype = Object.create(DeviceControl.prototype);
Conditioner.prototype.constructor = Conditioner;


Conditioner.prototype.addTemp = function() {
    var max = 30;
    if (this._temperature >= max) {
        return;
    }
    return this._temperature++;
}

Conditioner.prototype.removeTemp = function() {
    var min = 10;
    if (this._temperature <= min) {
        return;
    }
    return this._temperature--;
}


//Create conditioner
var humidifier = new Conditioner("Conditioner-Humidifier", "Zelmer", "1500 Watt");

humidifier.renderConditioner = function() {
    var condition = document.createElement("div");
    condition.className = this._name;
    condition.innerHTML = this._name;

    var brand = document.createElement("div");
    brand.className = "prop";
    brand.innerText = "Brand: " + humidifier._brand;

    var status = document.createElement("div");
    status.className = "status";
    status.innerText = "Conditioner is off";


    function  showStatus() {
        status.innerText = humidifier._state ? "Conditioner is on" : "Conditioner is off";
    }

    var tempMenu = document.createElement("div");

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "onBtn button";
    onBtn.innerHTML = "On";
    onBtn.addEventListener("click", function () {
        humidifier.on();
        condition.appendChild(tempMenu);
        showStatus();
    })

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "offBtn button";
    offBtn.innerHTML = "Off";
    offBtn.addEventListener("click", function () {
        humidifier.off();
        condition.removeChild(tempMenu);
        showStatus();
    })

    var currentTemp = document.createElement("div");
    currentTemp.className = "status";
    currentTemp.innerText = "Temperature is " + humidifier._temperature;

    function  showTemp() {
        currentTemp.innerText = "Temperature is " + humidifier._temperature;
    }

    var increaseTemp = document.createElement("button");
    increaseTemp.type = "button";
    increaseTemp.className = "settingsBtn button";
    increaseTemp.innerHTML = "Temp Up";
    increaseTemp.addEventListener("click", function () {
        humidifier.addTemp();
        showTemp();
    }, false)

    var decreaseTemp = document.createElement("button");
    decreaseTemp.type = "button";
    decreaseTemp.className = "settingsBtn button";
    decreaseTemp.innerHTML = "Temp Down";
    decreaseTemp.addEventListener("click", function () {
        humidifier.removeTemp();
        showTemp();
    }, false)

    root.children[0].children[0].appendChild(condition);
    condition.appendChild(brand);
    condition.appendChild(status);
    condition.appendChild(onBtn);
    condition.appendChild(offBtn);
    tempMenu.appendChild(currentTemp);
    tempMenu.appendChild(decreaseTemp);
    tempMenu.appendChild(increaseTemp);
}