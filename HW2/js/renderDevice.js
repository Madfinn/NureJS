function RenderDevice(device, rootElement) {
    this._device = device;
    this._rootElement = rootElement;
   /* this._name = name;*/
    this._state = document.createElement("div");
}

RenderDevice.prototype.render = function () {
    this._device = document.createElement("div");
    this._device.className = "device";
    this._device.innerHTML = this._name;

    var device = this._device;

    var brand = document.createElement("div");
    brand.className = "prop";
    brand.innerText = "Brand: " + device._brand;

    var status = document.createElement("div");
    status.className = "status";
    status.innerText = device + " is off";

    function  showStatus() {
        status.innerText = this._state ? device + " is on" : device + " is off";
    }

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "onBtn button";
    onBtn.innerHTML = "On";
    onBtn.addEventListener("click", function () {
        device.on();
        if (this._bright >= 50) {
            return;
        } else {
            this._bright = 50;
            showBrightStatus();
            showStatus();
        }
    })

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "offBtn button";
    offBtn.innerHTML = "Off";
    offBtn.addEventListener("click", function () {
        device.off();
        this._bright = 0;
        showBrightStatus();
        showStatus();
    })

    this._rootElement.innerHTML = "";
    this._rootElement.appendChild(device);
    device.appendChild(this._state);
    device.appendChild(brand);
    device.appendChild(status);
    device.appendChild(onBtn);
    device.appendChild(offBtn);

//if Light
    if (device instanceof Light) {
        var bright = document.createElement("div");
        bright.className = "prop";

        var brightStatus = document.createElement("div");
        brightStatus.className = "status";
        brightStatus.innerText = "Bright is " + this._bright;

        function  showBrightStatus() {
            brightStatus.innerText = "Bright is " + this._bright;
            if (this._bright > 0) {
                status.innerText = "Light is on";
            } else {
                status.innerText = "Light is off";
            }

            var increaseBright = document.createElement("button");
            increaseBright.type = "button";
            increaseBright.className = "settingsBtn button";
            increaseBright.innerHTML = "Bright Up";
            increaseBright.addEventListener("click", function () {
                device.addBright();
                showBrightStatus();
            }, false)

            var decreaseBright = document.createElement("button");
            decreaseBright.type = "button";
            decreaseBright.className = "settingsBtn button";
            decreaseBright.innerHTML = "Bright Down";
            decreaseBright.addEventListener("click", function () {
                device.removeBright();
                showBrightStatus();
            }, false)
        }
    }
    device.appendChild(brightStatus);
    device.appendChild(bright);
    bright.appendChild(increaseBright);
    bright.appendChild(decreaseBright);
}

var floorLamp = new Light("Floorlamp", "Panasonic", "floor lamp", "60W", "cold light");
var viewFloorlamp = new RenderDevice(floorLamp, document.querySelectorAll(".house"));
viewFloorlamp.render();

//Create lusterlamp
/*var lusterLamp = new Light("Luster", "Shine Like Sun", "luster", "100W", "warm light");

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
}*/

