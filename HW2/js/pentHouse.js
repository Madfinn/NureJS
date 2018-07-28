var floorLamp = new Light("Floorlamp", "Panasonic", "floor lamp", "60W", "cold light", 0);
var lusterLamp = new Light("Luster", "Shine Like Sun", "luster", "100W", "warm light");
var humidifier = new Conditioner("Conditioner-Humidifier", "Zelmer", "1500 Watt");
var plazma = new TV("Plazma", "Samsung", "50d");

var pentHouse = new SmartHouse("penthouse", "14 Manhattan, New York, USA");
pentHouse.renderHouse = function (device) {
    var house = document.createElement("div");
    house.className = this._name;
    /*house.innerHTML = this._name;*/
    root.appendChild(house);

    var form = document.createElement("form");
    house.appendChild(form);

    var radio1 = document.createElement("input");
    radio1.setAttribute("type", "radio");
    radio1.setAttribute("name", "device");
    radio1.setAttribute("id", "radio1");
    form.appendChild(radio1);
    setAttrChecked(radio1);

    var span1 = document.createElement("span");
    span1.className = "deviceName";
    span1.innerText = "Floor lamp";
    form.appendChild(span1);

    var br1 = document.createElement("br");
    form.appendChild(br1);

    var radio2 = document.createElement("input");
    radio2.setAttribute("type", "radio");
    radio2.setAttribute("name", "device");
    radio2.setAttribute("id", "radio2");
    form.appendChild(radio2);
    setAttrChecked(radio2);


    var span2 = document.createElement("span");
    span2.className = "deviceName";
    span2.innerText = "Luster lamp";
    form.appendChild(span2);

    var br2 = document.createElement("br");
    form.appendChild(br2);

    var radio3 = document.createElement("input");
    radio3.setAttribute("type", "radio");
    radio3.setAttribute("name", "device");
    radio3.setAttribute("id", "radio3");
    form.appendChild(radio3);
    setAttrChecked(radio3);

    var span3 = document.createElement("span");
    span3.className = "deviceName";
    span3.innerText = "Humidifier";
    form.appendChild(span3);

    var br3 = document.createElement("br");
    form.appendChild(br3);

    var radio4 = document.createElement("input");
    radio4.setAttribute("type", "radio");
    radio4.setAttribute("name", "device");
    radio4.setAttribute("id", "radio4");
    form.appendChild(radio4);
    setAttrChecked(radio4);

    var span4 = document.createElement("span");
    span4.className = "deviceName";
    span4.innerText = "Plazma";
    form.appendChild(span4);

    var br4 = document.createElement("br");
    form.appendChild(br4);

    function setAttrChecked(element) {
        element.onchange = function () {
            var radiobuttons = document.getElementsByName("device");
            radiobuttons.forEach(function (radio) {
                radio.removeAttribute("checked");
            });
            return this.setAttribute("checked", "checked");
        };
    };

    var addButton = document.createElement("button");
    addButton.className = "btn add";
    addButton.innerText = "Add";
    house.appendChild(addButton);

    addButton.addEventListener("click", function () {
        if (radio1.hasAttribute("checked")) {
            pentHouse.setDevice(floorLamp);
            floorLamp.renderLight();
        } else if (radio2.hasAttribute("checked")) {
            pentHouse.setDevice(lusterLamp);
            lusterLamp.renderLight();
        } else if (radio3.hasAttribute("checked")) {
            pentHouse.setDevice(humidifier);
            humidifier.renderLight();
        }else if (radio4.hasAttribute("checked")) {
            pentHouse.setDevice(plazma);
            plazma.renderLight();
        }
    });

    var removeButton = document.createElement("button");
    removeButton.className = "btn remove";
    removeButton.innerText = "Remove";
    house.appendChild(removeButton);

    removeButton.addEventListener("click", function () {
        if (radio1.hasAttribute("checked")) {
            var floorLamps = document.querySelectorAll(".Floorlamp");
            pentHouse.removeDevice(floorLamps);
        }else if (radio2.hasAttribute("checked")) {
            var lusters = document.querySelectorAll(".Luster");
            pentHouse.removeDevice(lusters);
        }/*  else if (radio3.hasAttribute("checked")) {
            pentHouse.setDevice(humidifier);
            humidifier.renderLight();
        }else if (radio4.hasAttribute("checked")) {
            pentHouse.setDevice(plazma);
            plazma.renderLight();
        }*/
    });
};

pentHouse.renderHouse();


