"use strict"

var root = document.body.children[0];

function RenderHouse(house, rootElement) {
    this._house = house;
    this._rootElement = rootElement;
    this._state = document.createElement("div");
}

RenderHouse.prototype.render = function(){
    this._house = document.createElement("div");
    this._house.className = "house";

    var form = document.createElement("form");

    var radio1 = document.createElement("input");
    radio1.setAttribute("type", "radio");
    radio1.setAttribute("name", "device");
    radio1.setAttribute("id", "radio1");
    setAttrChecked(radio1);

    var span1 = document.createElement("span");
    span1.className = "deviceName";
    span1.innerText = "Floor lamp";

    var br1 = document.createElement("br");

    var radio2 = document.createElement("input");
    radio2.setAttribute("type", "radio");
    radio2.setAttribute("name", "device");
    radio2.setAttribute("id", "radio2");
    setAttrChecked(radio2);


    var span2 = document.createElement("span");
    span2.className = "deviceName";
    span2.innerText = "Luster lamp";

    var br2 = document.createElement("br");

    var radio3 = document.createElement("input");
    radio3.setAttribute("type", "radio");
    radio3.setAttribute("name", "device");
    radio3.setAttribute("id", "radio3");
    setAttrChecked(radio3);

    var span3 = document.createElement("span");
    span3.className = "deviceName";
    span3.innerText = "Humidifier";

    var br3 = document.createElement("br");

    var radio4 = document.createElement("input");
    radio4.setAttribute("type", "radio");
    radio4.setAttribute("name", "device");
    radio4.setAttribute("id", "radio4");
    setAttrChecked(radio4);

    var span4 = document.createElement("span");
    span4.className = "deviceName";
    span4.innerText = "Plazma";

    var br4 = document.createElement("br");

    function setAttrChecked(element) {
        element.onchange = function () {
            var radiobuttons = document.getElementsByName("device");
            radiobuttons.forEach(function (radio) {
                radio.removeAttribute("checked");
            });
            return this.setAttribute("checked", "checked");
        };
    }

    var addButton = document.createElement("button");
    addButton.className = "btn add";
    addButton.innerText = "Add";

    addButton.addEventListener("click", function () {
        if (radio1.hasAttribute("checked")) {
            pentHouse.setDevice(renderFloorLamp());
        } else if (radio2.hasAttribute("checked")) {
            pentHouse.setDevice(renderLusterLamp());
        } else if (radio3.hasAttribute("checked")) {
            pentHouse.setDevice(renderHumidifier());
        }else if (radio4.hasAttribute("checked")) {
            pentHouse.setDevice(renderTV());
        }
    })

    var removeButton = document.createElement("button");
    removeButton.className = "btn remove";
    removeButton.innerText = "Remove";


    removeButton.addEventListener("click", function () {
        if (radio1.hasAttribute("checked")) {
            var floorLamps = document.querySelectorAll(".Floorlamp");
            pentHouse.removeDevice(floorLamps);
        }else if (radio2.hasAttribute("checked")) {
            var lusters = document.querySelectorAll(".Luster");
            pentHouse.removeDevice(lusters);
        } else if (radio3.hasAttribute("checked")) {
            var conditions = document.querySelectorAll(".Conditioner-Humidifier");
            pentHouse.removeDevice(conditions);
        } else if (radio4.hasAttribute("checked")) {
            var tvs = document.querySelectorAll(".Plazma");
            pentHouse.removeDevice(tvs);
        }
    })

    this._rootElement.innerHTML = "";
    this._rootElement.appendChild(this._house);
    this._house.appendChild(this._state);
    this._house.appendChild(form);
    form.appendChild(radio1);
    form.appendChild(span1);
    form.appendChild(br1);
    form.appendChild(radio2);
    form.appendChild(span2);
    form.appendChild(br2);
    form.appendChild(radio3);
    form.appendChild(span3);
    form.appendChild(br3);
    form.appendChild(radio4);
    form.appendChild(span4);
    form.appendChild(br4);
    this._house.appendChild(addButton);
    this._house.appendChild(removeButton);
}

var pentHouse = new SmartHouse("penthouse", "14 Manhattan, New York, USA");
var viewPentHouse = new RenderHouse(pentHouse, document.getElementById("root"));
viewPentHouse.render();
