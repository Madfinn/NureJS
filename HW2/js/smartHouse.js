"use strict"
var root = document.body.children[0];

//constructor SmartHouse
function SmartHouse(name, address) {
    this._name = name;
    this._address = address;
    this._devices = [];
  /*  this._state = document.createElement("div");*/
}

/*SmartHouse.prototype.getState = function() {
    return this._state;
};*/
SmartHouse.prototype.removeDevice = function(elements) {
    var lastElement = elements[elements.length-1];
    if (elements.length > 0) {
        lastElement.parentNode.removeChild(lastElement);
    } else {
        return;
    }
};

SmartHouse.prototype.setDevice = function(device) {
    this._devices.push(device);
    return this._devices;
};

/*SmartHouse.prototype.removeDevice = function(arr) {
    delete arr[arr.length-1];
};*/

SmartHouse.prototype.renderDevice = function () {
    this._devices.forEach(function (device) {
        device.renderDevice();
    });
};

/*
SmartHouse.prototype.renderHouse = function (device) {
    var house = document.createElement("div");
    house.className = this._name;
    house.innerHTML = this._name;*!/
    root.appendChild(house);

    var radio1 = document.createElement("input");
    radio1.setAttribute("type", "radio");
    radio1.setAttribute("checked", "checked");
    radio1.setAttribute("name", "device");
    house.appendChild(radio1);

    var span1 = document.createElement("span");
    span1.className = "deviceName";
    span1.innerText = "Floor lamp"
    house.appendChild(span1);

    var br1 = document.createElement("br");
    house.appendChild(br1);

    var radio2 = document.createElement("input");
    radio2.setAttribute("type", "radio");
    radio2.setAttribute("name", "device");
    house.appendChild(radio2);

    var span2 = document.createElement("span");
    span2.className = "deviceName";
    span2.innerText = "Luster lamp"
    house.appendChild(span2);

    var br2 = document.createElement("br");
    house.appendChild(br2);

    var radio3 = document.createElement("input");
    radio3.setAttribute("type", "radio");
    radio3.setAttribute("name", "device");
    house.appendChild(radio3);

    var span3 = document.createElement("span");
    span3.className = "deviceName";
    span3.innerText = "Humidifier";
    house.appendChild(span3);

    var br3 = document.createElement("br");
    house.appendChild(br3);

    var radio4 = document.createElement("input");
    radio4.setAttribute("type", "radio");
    radio4.setAttribute("name", "device");
    house.appendChild(radio4);

    var span4 = document.createElement("span");
    span4.className = "deviceName";
    span4.innerText = "Plazma";
    house.appendChild(span4);

    var br4 = document.createElement("br");
    house.appendChild(br4);

    var addButton = document.createElement("button");
    addButton.className = "btn add";
    addButton.innerText = "Add";
    house.appendChild(addButton);
    addButton.addEventListener("click", function () {
        if (radio1.hasAttribute("checked")) {
            setDevice(floorLamp);
            floorLamp.renderLight();
        }
    });

    var removeButton = document.createElement("button");
    removeButton.className = "btn remove";
    removeButton.innerText = "Remove";
    house.appendChild(removeButton);
};*/
