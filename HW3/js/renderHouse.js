"use strict"

const root = document.body.children[0];

class RenderHouse {
    constructor(house, rootElement) {
        this._house = house;
        this._rootElement = rootElement;
        this._state = document.createElement("div");
    }

    render() {
        this._house = document.createElement("div");
        this._house.className = "house";

        let form = document.createElement("form");

        let setAttrChecked = (element) => {
            element.onchange = function () {
                let radiobuttons = document.getElementsByName("device");
                radiobuttons.forEach(function (radio) {
                    radio.removeAttribute("checked");
                });
                return this.setAttribute("checked", "checked");
            };
        }

        let radio1 = document.createElement("input");
        radio1.setAttribute("type", "radio");
        radio1.setAttribute("name", "device");
        radio1.setAttribute("id", "radio1");
        setAttrChecked(radio1);

        let span1 = document.createElement("span");
        span1.className = "deviceName";
        span1.innerText = "Floor lamp";

        let br1 = document.createElement("br");

        let radio2 = document.createElement("input");
        radio2.setAttribute("type", "radio");
        radio2.setAttribute("name", "device");
        radio2.setAttribute("id", "radio2");
        setAttrChecked(radio2);


        let span2 = document.createElement("span");
        span2.className = "deviceName";
        span2.innerText = "Luster lamp";

        let br2 = document.createElement("br");

        let radio3 = document.createElement("input");
        radio3.setAttribute("type", "radio");
        radio3.setAttribute("name", "device");
        radio3.setAttribute("id", "radio3");
        setAttrChecked(radio3);

        let span3 = document.createElement("span");
        span3.className = "deviceName";
        span3.innerText = "Humidifier";

        let br3 = document.createElement("br");

        let radio4 = document.createElement("input");
        radio4.setAttribute("type", "radio");
        radio4.setAttribute("name", "device");
        radio4.setAttribute("id", "radio4");
        setAttrChecked(radio4);

        let span4 = document.createElement("span");
        span4.className = "deviceName";
        span4.innerText = "Plazma";

        let br4 = document.createElement("br");

        let addButton = document.createElement("button");
        addButton.className = "btn add";
        addButton.innerText = "Add";

        addButton.addEventListener("click", function () {
            if (radio1.hasAttribute("checked")) {
                pentHouse.setDevice(renderFloorLamp());
            } else if (radio2.hasAttribute("checked")) {
                pentHouse.setDevice(renderLusterLamp());
            } else if (radio3.hasAttribute("checked")) {
                pentHouse.setDevice(renderHumidifier());
            } else if (radio4.hasAttribute("checked")) {
                pentHouse.setDevice(renderTV());
            }
        })

        let removeButton = document.createElement("button");
        removeButton.className = "btn remove";
        removeButton.innerText = "Remove";


        removeButton.addEventListener("click", function () {
            if (radio1.hasAttribute("checked")) {
                let floorLamps = document.querySelectorAll(".Floorlamp");
                removeDevice(floorLamps);
            } else if (radio2.hasAttribute("checked")) {
                let lusters = document.querySelectorAll(".Luster");
                removeDevice(lusters);
            } else if (radio3.hasAttribute("checked")) {
                let conditions = document.querySelectorAll(".Conditioner-Humidifier");
                removeDevice(conditions);
            } else if (radio4.hasAttribute("checked")) {
                let tvs = document.querySelectorAll(".Plazma");
                removeDevice(tvs);
            }
        })

        let removeDevice = (elements) => {
            let lastElement = elements[elements.length-1];
            if (elements.length > 0) {
                lastElement.parentNode.removeChild(lastElement);
            }
        }

       let renderDevice = () => {
            this._devices.forEach(function (device) {
                device.renderDevice();
            })
        }

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
}

let pentHouse = new SmartHouse("penthouse", "14 Manhattan, New York, USA");
let viewPentHouse = new RenderHouse(pentHouse, document.getElementById("root"));
viewPentHouse.render();
